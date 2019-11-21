import React from 'react';
import {Link} from 'react-router-dom';

const InlineButtonBlock = props => (
  <div className="container">
    <div className="inline-button-block">
      <Link to="/programs" className="btn btn--primary btn--arrow inline__btn">
        <span>Все программы</span>
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
      </Link>
      
      <div className="smile-block">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="#FDBE54"/>
          <path d="M21.0714 12.8572C22.4521 12.8572 23.5714 11.7379 23.5714 10.3572C23.5714 8.97647 22.4521 7.85718 21.0714 7.85718C19.6907 7.85718 18.5714 8.97647 18.5714 10.3572C18.5714 11.7379 19.6907 12.8572 21.0714 12.8572Z" fill="#1D1D1B"/>
          <path d="M15 25.7143C10.2857 25.7143 6.42859 21.8572 6.42859 17.1429C6.42859 16.7143 6.7143 16.4286 7.14287 16.4286C7.57145 16.4286 7.85716 16.7143 7.85716 17.1429C7.85716 21.0714 11.0714 24.2857 15 24.2857C18.9286 24.2857 22.1429 21.0714 22.1429 17.1429C22.1429 16.7143 22.4286 16.4286 22.8572 16.4286C23.2857 16.4286 23.5714 16.7143 23.5714 17.1429C23.5714 21.8572 19.7143 25.7143 15 25.7143Z" fill="#1D1D1B"/>
          <path d="M10.7143 10.7143H5.71429C5.28571 10.7143 5 10.4286 5 10.0001C5 9.57148 5.28571 9.28577 5.71429 9.28577H10.7143C11.1429 9.28577 11.4286 9.57148 11.4286 10.0001C11.4286 10.4286 11.1429 10.7143 10.7143 10.7143Z" fill="#1D1D1B"/>
        </svg>
        
        <div className="smile-block__sign">Получи первую профессию бесплатно</div>
      </div>
    </div>
  </div>
);

export {InlineButtonBlock};