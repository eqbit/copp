import React from 'react';
import {Link} from 'react-router-dom';
import {getMenuItems} from '../../api/api';
import {HeaderSearch} from '../header-search';
import {HeaderPhones} from '../header-phones';
import {Button} from '../button';

class Header extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      scrollTop: document.body.scrollTop || document.documentElement.scrollTop
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  
  handleScroll = e => {
    this.setState({
      scrollTop: document.body.scrollTop || document.documentElement.scrollTop
    });
  };
  
  render() {
    const {props} = this;
    return (
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
          
              {getMenuItems().map((item, index) => (
                <Link to={item.link}
                      className="header-menu__item"
                      key={index}>{item.anchor}</Link>
              ))}
            </div>
        
            <HeaderSearch/>
        
            <HeaderPhones/>
        
            <Button className="btn--tertiary header__btn" onClick={() => {
            }}>Оставить заявку</Button>
          </div>
        </div>
      </header>
    );
  }
}

export {Header};