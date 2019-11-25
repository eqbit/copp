import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from '../button';

class ProgramDetailBlock extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: this.props.initialState
    }
  }
  
  render() {
    const {data} = this.state;
    
    return (
      <div className="container">
        <div className="program-detail">
          <div className="program-detail__top">
            <div className="program-detail__img">
              <img src={data.img} alt=""/>
  
              <img src="/images/detail-page-img-bg.png" alt=""/>
            </div>
            
            <div className="program-detail__info">
              <div className="program-detail__competence">
                Компетенция: {data.competence}
              </div>
              
              <div className="program-detail__duration">{data.duration}<i>ч</i></div>
              
              <h1 className="program-detail__title">{data.title}</h1>
              
              <div className="program-detail__subtitle">{data.subtitle}</div>
              
              <div className="program-detail__short-description">
                <span dangerouslySetInnerHTML={{__html: data.shortDescription}}/>
              </div>
  
              <div className="program-detail__detail-link">подробнее</div>
              
              <div className="program-detail__price">{data.price}<i>*</i></div>
              
              <div className="program-detail__order">
                <Button className="btn--secondary program-detail__btn">
                  Записаться
                </Button>
                
                <div className="program-detail__wanna-free">
                  <i>*</i>Хочу бесплатно
                </div>
              </div>
  
              <Link to='/programs' className="program-detail__return">
                <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M17.001 7.01401H2.98098L6.36898 10.853L5.11998 12.001L0.719981 7.01401H0.00598145V4.98201H0.663981L5.16298 -0.00299072L6.43998 1.14401L2.97598 4.98201H17.001V7.01401Z" fill="#778899"/>
                </svg>
    
                Вернуться в программы
              </Link>
            </div>
          </div>
          
          <div className="program-detail-description">
            <div className="block-title">Описание программы</div>
            
            <div className="program-detail-description__text" dangerouslySetInnerHTML={{__html:data.description}}/>
          </div>
  
          <a href={data.programFile} className="program-detail__program-file">
            Скачать программу
    
            <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M7.01702 16.336V16.994H4.98502V16.28L-0.000976562 11.881L1.14602 10.631L4.98502 14.019V0H7.01702V14.024L10.856 10.56L12.003 11.837L7.01702 16.336Z"
                    fill="#d0101b"/>
            </svg>
          </a>
  
          <div className="program-detail-doc">
            <div className="program-detail-doc__img">
              <img src="/images/doc.png" alt=""/>
            </div>
    
            <div className="program-detail-doc__text">
              <div className="program-detail-doc__title">Документ об окончании</div>
              <a href={data.docFile} className="program-detail-doc__link">Свидетельство о профессиональной переподготовке</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export {ProgramDetailBlock}