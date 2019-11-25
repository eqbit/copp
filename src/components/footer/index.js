import React from 'react';
import {getMenuItems} from '../../api/api';
import {Link} from 'react-router-dom';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      width: window.innerWidth,
      menuItems: getMenuItems()
    };
  }
  
  componentDidMount() {
    window.addEventListener('resize', this.updateWindowSize);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowSize);
  }
  
  updateWindowSize = () => {
    this.setState({
      width: window.innerWidth
    });
  };
  
  getLayout = () => {
    if (this.state.width >= 1024) {
      return this.getDesktopLayout();
    } else if (this.state.width >= 768) {
      return this.getTabletLayout();
    } else {
      return this.getMobileLayout();
    }
  };
  
  getDesktopLayout = () => (
    <footer className="footer">
      <div className="container container__footer">
        <div className="footer__row">
          <div className="footer__left">
            <div className="footer__logo">
              <img src="/images/large-logo.png" alt=""/>
            </div>
            
            {this.socials()}
            
            <div className="footer__copy">© 2019 ЦОПП</div>
          </div>
          
          <div className="footer__middle">
            {this.menu()}
            {this.faq()}
          </div>
          
          <div className="footer__right">
            {this.addresses()}
            {this.branch()}
          </div>
        </div>
      </div>
    </footer>
  );
  
  getTabletLayout = () => (
    <footer className="footer">
      <div className="container">
        <div className="footer__row footer__row--tablet">
          <div className="footer__left">
            <div className="footer__logo">
              <img src="/images/large-logo.png" alt=""/>
            </div>
            
            {this.socials()}
            
            <div className="footer__copy">© 2019 ЦОПП</div>
          </div>
          
          <div className="footer__middle footer__middle--tablet">
            {this.menu()}
            {this.faq()}
          </div>
          
          <div className="footer__right">
            {this.addresses()}
            {this.branch()}
          </div>
        </div>
      </div>
    </footer>
  );
  
  getMobileLayout = () => (
    <footer className="footer">
      <div className="container">
        <div className="footer__mobile-row">
          <div className="footer__logo">
            <img src="/images/large-logo.png" alt=""/>
          </div>
          
          {this.faq()}
          
          {this.addresses()}
          
          {this.branch()}
          
          {this.socials()}
          
          <div className="footer__copy">© 2019 ЦОПП</div>
        </div>
      </div>
    </footer>
  );
  
  socials = () => (
    <div className="footer-socials">
      <a href="/" className="footer-socials__item">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd"
                d="M20 3.5C29.113 3.5 36.5 10.887 36.5 20C36.5 29.113 29.113 36.5 20 36.5C10.887 36.5 3.5 29.113 3.5 20C3.5 10.887 10.887 3.5 20 3.5Z"
                stroke="#778899"/>
          <path
            d="M23.9993 12.0033L21.9245 12C19.5935 12 18.0871 13.5455 18.0871 15.9376V17.7531H16.001C15.8207 17.7531 15.6747 17.8993 15.6747 18.0795V20.71C15.6747 20.8903 15.8209 21.0363 16.001 21.0363H18.0871V27.6738C18.0871 27.854 18.2331 28 18.4134 28H21.1352C21.3155 28 21.4614 27.8539 21.4614 27.6738V21.0363H23.9006C24.0809 21.0363 24.2269 20.8903 24.2269 20.71L24.2279 18.0795C24.2279 17.993 24.1934 17.9101 24.1323 17.8488C24.0712 17.7876 23.988 17.7531 23.9015 17.7531H21.4614V16.2141C21.4614 15.4744 21.6377 15.0989 22.6013 15.0989L23.999 15.0984C24.1791 15.0984 24.3251 14.9522 24.3251 14.7721V12.3296C24.3251 12.1496 24.1793 12.0037 23.9993 12.0033Z"
            fill="#778899"/>
        </svg>
      </a>
      
      <a href="/" className="footer-socials__item">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd"
                d="M20 3.5C29.113 3.5 36.5 10.887 36.5 20C36.5 29.113 29.113 36.5 20 36.5C10.887 36.5 3.5 29.113 3.5 20C3.5 10.887 10.887 3.5 20 3.5Z"
                stroke="#778899"/>
          <path
            d="M27.8572 23.5782C27.8142 23.5062 27.5482 22.9282 26.2681 21.7401C24.928 20.496 25.1081 20.698 26.7222 18.5469C27.7052 17.2368 28.0983 16.4367 27.9753 16.0947C27.8582 15.7687 27.1352 15.8547 27.1352 15.8547L24.731 15.8687C24.731 15.8687 24.553 15.8447 24.42 15.9237C24.291 16.0017 24.208 16.1817 24.208 16.1817C24.208 16.1817 23.827 17.1958 23.3189 18.0578C22.2478 19.877 21.8188 19.973 21.6438 19.86C21.2368 19.5969 21.3388 18.8019 21.3388 18.2378C21.3388 16.4747 21.6058 15.7397 20.8177 15.5496C20.5557 15.4866 20.3637 15.4446 19.6947 15.4376C18.8366 15.4286 18.1095 15.4406 17.6985 15.6416C17.4245 15.7757 17.2135 16.0747 17.3425 16.0917C17.5015 16.1127 17.8615 16.1887 18.0525 16.4487C18.2996 16.7837 18.2906 17.5378 18.2906 17.5378C18.2906 17.5378 18.4326 19.6129 17.9595 19.871C17.6345 20.048 17.1895 19.6869 16.2344 18.0358C15.7454 17.1908 15.3753 16.2557 15.3753 16.2557C15.3753 16.2557 15.3043 16.0817 15.1773 15.9887C15.0233 15.8757 14.8073 15.8397 14.8073 15.8397L12.5211 15.8537C12.5211 15.8537 12.1781 15.8637 12.0521 16.0127C11.9401 16.1457 12.0431 16.4197 12.0431 16.4197C12.0431 16.4197 13.8332 20.607 15.8594 22.7182C17.7185 24.6533 19.8287 24.5263 19.8287 24.5263H20.7847C20.7847 24.5263 21.0738 24.4943 21.2208 24.3353C21.3568 24.1893 21.3518 23.9153 21.3518 23.9153C21.3518 23.9153 21.3328 22.6322 21.9288 22.4432C22.5159 22.2571 23.2699 23.6832 24.069 24.2323C24.673 24.6473 25.1321 24.5563 25.1321 24.5563L27.2692 24.5263C27.2692 24.5263 28.3873 24.4573 27.8572 23.5782Z"
            fill="#778899"/>
        </svg>
      </a>
      
      <a href="/" className="footer-socials__item">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd"
                d="M20 3.5C29.113 3.5 36.5 10.887 36.5 20C36.5 29.113 29.113 36.5 20 36.5C10.887 36.5 3.5 29.113 3.5 20C3.5 10.887 10.887 3.5 20 3.5Z"
                stroke="#778899"/>
          <path
            d="M23 12H17C14.239 12 12 14.239 12 17V23C12 25.761 14.239 28 17 28H23C25.761 28 28 25.761 28 23V17C28 14.239 25.761 12 23 12ZM26.5 23C26.5 24.93 24.93 26.5 23 26.5H17C15.07 26.5 13.5 24.93 13.5 23V17C13.5 15.07 15.07 13.5 17 13.5H23C24.93 13.5 26.5 15.07 26.5 17V23Z"
            fill="#778899"/>
          <path
            d="M20 16C17.791 16 16 17.791 16 20C16 22.209 17.791 24 20 24C22.209 24 24 22.209 24 20C24 17.791 22.209 16 20 16ZM20 22.5C18.622 22.5 17.5 21.378 17.5 20C17.5 18.621 18.622 17.5 20 17.5C21.378 17.5 22.5 18.621 22.5 20C22.5 21.378 21.378 22.5 20 22.5Z"
            fill="#778899"/>
          <path
            d="M24.3 16.233C24.5944 16.233 24.833 15.9944 24.833 15.7C24.833 15.4056 24.5944 15.167 24.3 15.167C24.0056 15.167 23.767 15.4056 23.767 15.7C23.767 15.9944 24.0056 16.233 24.3 16.233Z"
            fill="#778899"/>
        </svg>
      </a>
    </div>
  );
  
  menu = () => (
    <div className="footer-menu">
      {this.state.menuItems.map((item, index) => (
        <Link to={item.link} className="footer-menu__item" key={index}>{item.anchor}</Link>
      ))}
    </div>
  );
  
  faq = () => (
    <div className="footer-faq">
      <Link to="/faq" className='footer-faq__link'>Часто задаваемые <br/> вопросы</Link>
      <Link to="/contact-us">
        <div className="btn btn--primary btn--arrow footer-faq__btn">
          <span>Написать нам</span>
          
          <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M41.005 8.38197L33.795 16.001L32.009 14.472L37.191 8.99597H-0.000976562V7.00497H37.176L31.985 1.52497L33.773 -0.00402832L40.991 7.61497L40.55 7.99197L41.005 8.38197Z"
                    fill="#778899"/>
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="41" height="16" fill="#778899"/>
              </clipPath>
            </defs>
          </svg>
        </div>
      </Link>
    </div>
  );
  
  addresses = () => (
    <div className="footer-addresses">
      <div className="footer-addresses__title">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.95622 1.22628C8.1679 0.437956 7.1168 0 6.00001 0C4.88323 0 3.83213 0.437956 3.02191 1.22628C1.55476 2.69343 1.37958 5.45255 2.62775 7.13869L6.00001 12L9.35038 7.13869C10.6205 5.45255 10.4234 2.69343 8.95622 1.22628ZM6.04381 5.69343C5.18979 5.69343 4.51096 5.0146 4.51096 4.16058C4.51096 3.30657 5.18979 2.62774 6.04381 2.62774C6.89782 2.62774 7.57666 3.30657 7.57666 4.16058C7.57666 5.0146 6.87593 5.69343 6.04381 5.69343Z"
            fill="#D0101B"/>
        </svg>
        
        <span>г. Тюмень</span>
      </div>
      
      <div className="footer-addresses__item">ул. Мельникайте, 76</div>
      <div className="footer-addresses__item">ул. Пермякова 3/1</div>
      <a href="tel:+7 950 480 02 52" className="footer-addresses__item">+7 950 480 02 52</a>
      <a href="tel:+7 952 687 57 52" className="footer-addresses__item">+7 952 687 57 52</a>
      <a href="mailto:zayavka@copp72.ru"
         className="footer-addresses__item footer-addresses__item--email">zayavka@copp72.ru</a>
    </div>
  );
  
  branch = () => (
    <Link to="/contacts" className="footer__branch">
      <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.95622 1.22628C7.1679 0.437956 6.1168 0 5.00001 0C3.88323 0 2.83213 0.437956 2.02191 1.22628C0.554758 2.69343 0.379576 5.45255 1.62775 7.13869L5.00001 12L8.35038 7.13869C9.62045 5.45255 9.42337 2.69343 7.95622 1.22628ZM5.04381 5.69343C4.18979 5.69343 3.51096 5.0146 3.51096 4.16058C3.51096 3.30657 4.18979 2.62774 5.04381 2.62774C5.89782 2.62774 6.57666 3.30657 6.57666 4.16058C6.57666 5.0146 5.87593 5.69343 5.04381 5.69343Z"
          fill="#778899"/>
      </svg>
      
      <span>Филиалы в других городах</span>
    </Link>
  );
  
  render() {
    return this.getLayout();
  }
}

export {Footer};