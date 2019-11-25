import React from 'react';
import {Header} from '../../components/header';
import {Footer} from '../../components/footer';
import Select from 'react-select';
import {getProgramList} from '../../api/api';
import {getSelectOption} from '../../api/functions';

class Schedule extends React.Component {
  constructor() {
    super();
    
    this.state = {
      programs: getProgramList(),
      places: [],
      programNames: [],
      data: {}
    };
  }
  
  componentDidMount() {
    const {programs} = this.state;
    
    this.setState({
      places: [...new Set(programs.map(item => item.place))],
      programNames: programs.map(item => item.name),
      data: {
        place: programs[0].place,
        program: programs[0].name
      }
    });
  }
  
  setData = (label, value) => {
    this.setState(prevState => {
      prevState.data[label] = value;
      return prevState;
    });
  };
  
  handlePlaceSelect = place => {
    this.setData('place', place.value);
  };
  
  handleProgramSelect = program => {
    this.setData('program', program.value);
  };
  
  handleFormChange = e => {
    this.setData(e.target.name, e.target.value)
  };
  
  handleFormSubmit = e => {
    e.preventDefault();
  };
  
  render() {
    const {places, programNames} = this.state;
    
    const selectPlaces = [];
    places.forEach(item => {
      selectPlaces.push(getSelectOption(item));
    });
    
    const selectPrograms = [];
    programNames.forEach(item => {
      selectPrograms.push(getSelectOption(item));
    });
    
    return (
      <div className="wrapper wrapper--form-page">
        <Header/>
        <div className="form-page__wrapper">
          <div className="container">
            <div className="form-page">
              <div className="form-page__title">Заявка на обучение</div>
              
              <div className="form-page__subtitle">Заполните заявку, чтобы получить информацию по расписанию занятий и
                условиям обучения.
              </div>
              
              <form className="form-page__form" onChange={this.handleFormChange} onSubmit={this.handleFormSubmit}>
                <div className="form-page__input-title">Ваш город</div>
                <Select value={getSelectOption(this.state.data.place)}
                        onChange={this.handlePlaceSelect}
                        isSearchable={false}
                        className="crs form-page__crs"
                        classNamePrefix="crs"
                        options={selectPlaces}/>
                
                <div className="form-page__input-title">Выберите программу обучения</div>
                <Select value={getSelectOption(this.state.data.program)}
                        onChange={this.handleProgramSelect}
                        isSearchable={false}
                        className="crs form-page__crs"
                        classNamePrefix="crs"
                        options={selectPrograms}/>
                
                <input type="text"
                       name="name"
                       placeholder="Имя и фамилия*"
                       required
                       className="form-page__input"/>
                
                <input type="text"
                       name="phone"
                       placeholder="Номер телефона*"
                       required
                       className="form-page__input"/>
                
                <input type="text"
                       name="email"
                       placeholder="Email"
                       className="form-page__input"/>
                
                <input type="text"
                       name="birthdate"
                       placeholder="Дата рождения"
                       className="form-page__input"/>
                
                <div className="form-page__fill-required">* Пожалуйста, заполните все обязательные поля</div>
                
                <div className="form-page__agreement">
                  <div className="custom-checkbox">
                    <input type="checkbox" id="form-page-agreement" name="agreed" required defaultChecked/>
                    <span>
                      <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              clipRule="evenodd"
                              d="M14.685 2.38101L6.621 12.228L6.443 12.082L6.345 12.186L5.489 11.301L4.3 10.328L4.414 10.19L0.983 6.64301L2.987 4.49901L6.283 7.90601L12.364 0.480011L14.685 2.38101Z"
                              fill="#D0101B"/>
                      </svg>
                    </span>
                  </div>
                  
                  <label htmlFor="form-page-agreement">Я согласен с условиями обработки <a href="/policy" target="_blank">персональных данных</a></label>
                </div>
                
                <button type="submit" className="btn btn--secondary form-page__btn">Отправить</button>
              </form>
              
              <div className="form-page__sign">
                <b>Возникли вопросы?</b> Позвоните нам <a href="tel:+7 950 480 02 52">+7 950 480 02 52</a>,
                <a href="tel:+7 952 687 57 52">+7 952 687 57 52</a> или напишите на почту
                <a href="mailto:zayavka@copp72.ru">zayavka@copp72.ru</a>
              </div>
            </div>
          </div>
          
          <div className="form-page__bg">
            <img src="/images/form-page.jpg"
                 srcSet="/images/form-page.jpg 1400w, /images/form-page@2x.jpg 2800w"
                 alt=""/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export {Schedule};