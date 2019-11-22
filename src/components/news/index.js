import React from 'react';
import {Link} from 'react-router-dom';
import {trimText} from '../../api/functions';

const News = props => (
  <div className="news__wrapper">
    <div className="container news__container">
      <div className="news__title">Новости и события ЦОПП</div>
      <Link to='/news' className="news__all-link">Все новости</Link>
      
      <div className="news">
        {props.news.map((item, index) => (
          <Link to={item.link} className="news-item" key={index}>
            <div className="news-item__img">
              <img src={item.img} alt=""/>
            </div>
            
            <div className="news-item__info">
              <div className="news-item__date">{item.date}</div>
              <div className="news-item__title">{item.title}</div>
              <div className="news-item__text">{trimText(item.text, 118, '...')}</div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="random-links">
        <Link to={props.extraLink.link} className="random-links-item">
          <div className="random-links-item__img">
            <img src={props.extraLink.img} alt=""/>
          </div>
          
          <div className="random-links-item__text">
            <div className="random-links-item__title">{props.extraLink.title}</div>
            <div className="random-links-item__sign">{props.extraLink.sign}</div>
          </div>
        </Link>
  
        <a href="https://www.instagram.com/?hl=ru"
           target="_blank"
           rel="noopener noreferrer"
           className="random-links-item">
          <div className="random-links-item__img">
            <img src="/images/extra-instagram.jpg" alt=""/>
          </div>
    
          <div className="random-links-item__text">
            <div className="random-links-item__title">Наш блог в Instagram</div>
            <div className="random-links-item__sign">Следите за нашими новостями <br/>и новыми программами</div>
          </div>
        </a>
      </div>
    </div>
  </div>
);

export {News};