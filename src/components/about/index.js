import React from 'react';
import OnVisible from 'react-on-visible';

const About = props => {
  return (
    <div className="container">
      <div className="about">
    
        <div className="about__title">О центре опережающей профессиональной подготовки</div>
        
        <div className="quote">
          Команда, которая мечтает изменить мир и стать лучше. <br/>
          <span className="quote__highlight">Делаем проекты, создаем события, творим историю.</span>
        </div>
      </div>
      
      <div className="about-icons">
        <OnVisible className="about-icons__row">
          <div className="about-icons-item" style={{transitionDelay: `${Math.random() / 2}s`}}>
            <div className="about-icons-item__img">
              <img src="/images/building.svg" alt=""/>
            </div>
    
            <div className="about-icons-item__title">5 городов</div>
          </div>
  
          <div className="about-icons-item" style={{transitionDelay: `${Math.random() / 2}s`}}>
            <div className="about-icons-item__img">
              <img src="/images/specialist.svg" alt=""/>
            </div>
    
            <div className="about-icons-item__title">25 специалистов</div>
          </div>
  
          <div className="about-icons-item" style={{transitionDelay: `${Math.random() / 2}s`}}>
            <div className="about-icons-item__img">
              <img src="/images/programms.svg" alt=""/>
            </div>
    
            <div className="about-icons-item__title">79 программ</div>
          </div>
        </OnVisible>
      </div>
    </div>
    
  );
};

export {About};