import React from 'react';
import {getPhones} from '../../api/api';

const HeaderPhones = () => {
  const phones = getPhones();
  
  return (
    <div className="header-phone">
      <div className="header-phone__city">
        <img src="/images/place.png" alt=""/>
        <span>Тюмень</span>
      </div>
      <a className="header-phone__link" href={`tel:${phones[0]}`}>{phones[0]}</a>
      
      <div className="header-phone__tooltip">
        {phones.map((item, index) => (
          <a className="header-phone__link" href={`tel:${item}`} key={index}>{item}</a>
        ))}
      </div>
    </div>
  );
};

export {HeaderPhones};