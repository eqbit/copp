import React from 'react';
import {Link} from 'react-router-dom';

const GotQuestionLarge = props => (
  <div className="got-question got-question--large">
    <div className="got-question__bg">
      <img src="/images/photo-pattern-large.jpg"
           srcSet="/images/photo-pattern-large.jpg 1400w, /images/photo-pattern-large@2x.jpg 2800w"
           alt=""/>
    </div>
    
    <div className="container">
      <div className="got-question__title">Примерь профессию на себя</div>
      <div className="got-question__text">
        ЦОПП для тех, кто с интересом смотрит в будущее и выбирает <br/>
        активную жизненную позицию
      </div>
      
      <Link to="/schedule">
        <div className="btn btn--secondary got-question__btn">ПОДАТЬ ЗАЯВКУ</div>
      </Link>
    </div>
  </div>
);

export {GotQuestionLarge};