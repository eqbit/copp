import React from 'react';
import {Header} from '../../components/header';
import {Footer} from '../../components/footer';

class ContactUs extends React.Component {
  constructor() {
    super();
    
    this.state = {
      data: {}
    };
  }
  
  setData = (label, value) => {
    this.setState(prevState => {
      prevState.data[label] = value;
      return prevState;
    });
  };
  
  handleFormChange = e => {
    this.setData(e.target.name, e.target.value)
  };
  
  handleFormSubmit = e => {
    e.preventDefault();
  };
  
  render() {
    return (
      <div className="wrapper wrapper--form-page">
        <Header/>
        <div className="form-page__wrapper">
          <div className="container">
            <div className="form-page">
              <div className="form-page__title">Задать вопрос</div>
              
              <div className="form-page__subtitle">
                Если вы хотите узнать информацию по обучению в ЦОПП, оставьте ваше сообщение, и мы перезвоним вам в ближайшее время.
              </div>
              
              <form className="form-page__form" onChange={this.handleFormChange} onSubmit={this.handleFormSubmit}>
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
  
                <textarea name="message"
                          required
                          placeholder="Сообщение или вопрос"
                          className="form-page__textarea"/>
                
                <div className="form-page__fill-required">
                  Пожалуйста, заполните все поля для отправки сообщения
                </div>
                
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

export {ContactUs};