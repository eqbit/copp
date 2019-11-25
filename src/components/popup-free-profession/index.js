import React from 'react';
import {Popup} from '../../hoc/popup';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {Link} from 'react-router-dom';
import {Button} from '../button';

const PopupFreeProfession = props => (
  <Popup handleClose={props.handleClose}>
    <div className="free-prof">
      
      <div className="free-prof__title">Хочу бесплатно</div>
      
      <Tabs>
        <TabList className="free-prof-tabs">
          <Tab className="free-prof-tabs-item">Школьники</Tab>
          <Tab className="free-prof-tabs-item">Предпенсионеры</Tab>
        </TabList>
        
        <TabPanel className="free-prof__tab-panel">
          Если школьник еще не получал первую профессию и является учеником 6-11 классов, предлагаем получить первую профессию бесплатно.
        </TabPanel>
        
        <TabPanel  className="free-prof__tab-panel">
          ОБЯЗАТЕЛЬНЫЕ УСЛОВИЯ ДЛЯ УЧАСТИЯ В ПРОГРАММЕ:
          
          <p><i>1.</i>  Соответствующие по возрасту –  в течение 5 лет до наступления возраста, дающего право на страховую пенсию по старости, в том числе назначаемую досрочно.
            В 2019г. к предпенсионному возрасту относятся:
            Женщины 51-55 лет (1964 – 1968 г.р.), либо иной возраст, если пенсия будет назначаться досрочно.
            Мужчины 56-60 лет (1959 – 1963 г.р.), либо иной возраст, если пенсия будет назначаться досрочно.</p>
          
          <p><i>2.</i>  Не получающие пособие в центре занятости населения.</p>
          
          <p><i>3.</i>  Не проходившие ранее обучение по данной программе.</p>
          
          <p><i>4.</i>  Не воспользовались ранее своим правом на обучение на бюджетной основе по рабочей специальности, согласно ст.43 Конституции.</p>
          
          <p><i>5.</i>  Имеющие возможность подтвердить статус предпенсионера - предоставление справки (СВЕДЕНИЯ ОБ ОТНЕСЕНИИ ГРАЖДАНИНА К КАТЕГОРИИ ГРАЖДАН ПРЕДПЕНСИОННОГО ВОЗРАСТА)  - заказывается через портал гос.услуг либо в отделении Пенсионного фонда России.</p>
        </TabPanel>
      </Tabs>
      
      <Link to="/schedule" className="free-prof__btn">
        <Button className="btn--secondary">Записаться</Button>
      </Link>
    </div>
  </Popup>
);

export {PopupFreeProfession};