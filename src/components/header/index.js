import React from 'react';
import {Link} from 'react-router-dom';
import {getMenuItems, getPhones} from '../../api/api';
import {HeaderSearch} from '../header-search';
import {HeaderPhones} from '../header-phones';
import {Button} from '../button';

class Header extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      scrollTop: document.body.scrollTop || document.documentElement.scrollTop,
      mobileMenuVisible: false,
      menuItems: getMenuItems(),
      phones: getPhones()
    };
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  handleScroll = e => {
    this.setState({
      scrollTop: document.body.scrollTop || document.documentElement.scrollTop
    });
  };
  
  toggleMobileMenu = () => {
    this.setState(prevState => ({mobileMenuVisible: !prevState.mobileMenuVisible}));
  };
  
  render() {
    const {props} = this;
    return (
      <>
        <header className={`header ${
          props.front && this.state.scrollTop < 250
            ? 'header--front'
            : ''
          }`}>
          <div className="container">
            <div className={props.noLogo ? 'header__row header__row--no-logo' : 'header__row'}>
              <Link to="/" className="header__logo">
                <img src="/images/logo.png" alt=""/>
              </Link>
              
              <div className="header-menu">
                
                {this.state.menuItems.map((item, index) => (
                  <Link to={item.link}
                        className="header-menu__item"
                        key={index}>{item.anchor}</Link>
                ))}
              </div>
              
              <HeaderSearch/>
              
              <HeaderPhones/>
              <Link to="/schedule">
                <Button className="btn--tertiary header__btn">Оставить заявку</Button>
              </Link>
              
              <div className="header__mobile-menu-toggle" onClick={this.toggleMobileMenu}>
                <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd"
                        d="M0 14V11.999H22V14H0ZM0 6.00002H22V8.00002H0V6.00002ZM0 -0.000976562H22V2.00002H0V-0.000976562Z"
                        fill="#394959"/>
                </svg>
                
                Меню
              </div>
            </div>
          </div>
        </header>
        
        <div className={`mobile-menu ${this.state.mobileMenuVisible ? 'visible' : ''}`}>
          <div className="mobile-menu__logo">
            <img src="/images/logo.png" alt=""/>
          </div>
          <div className="mobile-menu__close" onClick={this.toggleMobileMenu}>
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M16.996 14.59L15.658 16.01L8.49999 9.33401L1.34199 16.01L0.00299072 14.59L7.06899 8.00001L0.00299072 1.40901L1.34199 -0.0109863L8.49999 6.66501L15.658 -0.0109863L16.996 1.40901L9.92999 8.00001L16.996 14.59Z"
                    fill="#394959"/>
            </svg>
          </div>
          
          <HeaderSearch mobile/>
          
          <div className="mobile-menu__list">
            {this.state.menuItems.map((item, index) => (
              <Link to={item.link}
                    className="mobile-menu__item"
                    key={index}>{item.anchor}</Link>
            ))}
          </div>
          
          <div className="mobile-menu-phones">
            <div className="mobile-menu-phones__city">
              <img src="/images/place.png" alt=""/>
              <span>Тюмень</span>
            </div>
            
            <div className="mobile-menu-phones__list">
              {this.state.phones.map((item, index) => (
                <a className="header-phone__link" href={`tel:${item}`} key={index}>{item}</a>
              ))}
            </div>
          </div>
          
          <Link to="/schedule">
            <Button className="btn--tertiary mobile-menu__btn">
              Оставить заявку
            </Button>
          </Link>
        </div>
      </>
    );
  }
}

export {Header};