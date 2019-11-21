import React from 'react';

const GotQuestion = props => (
  <div className="got-question">
    <div className="got-question__bg">
      <img src="/images/photo-pattern.png" alt=""/>
    </div>
    
    <div className="container">
      <div className="got-question__title">Появились вопросы?</div>
      <div className="got-question__text">
        Свяжитесь с нами любым удобным для вас способом. <br/>
        Позвоните <a href="tel:+79504800252">+7 950 480 02 52</a>, <a href="tel:+79526875752">+7 952 687 57 52</a> или
        напишите.
      </div>
  
      <div className="btn btn--secondary got-question__btn">НАПИСАТЬ НАМ</div>
    </div>
  </div>
);

export {GotQuestion};