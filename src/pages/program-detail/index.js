import React from 'react';
import {Header} from '../../components/header';
import {Footer} from '../../components/footer';
import {ProgramDetailBlock} from '../../components/program-detail-block';
import {Carousel} from '../../components/carousel';
import {Feedback} from '../../components/feedback';
import {ProgramList} from '../../components/program-list';
import {GotQuestion} from '../../components/got-question';
import {getCarouselSlides, getDetailPageInitialState, getFeedbackSlides, getProgramList} from '../../api/api';

const ProgramDetail = props => (
  <div className="wrapper wrapper--detail-page">
    <Header/>
    
    <ProgramDetailBlock initialState={getDetailPageInitialState()}/>
    
    <div className="block-margin"/>
    
    <div className="container">
      <div className="block-title">Фото занятий</div>
    </div>
    
    <div className="carousel__default-wrapper">
      <Carousel slides={getCarouselSlides()} noBg/>
    </div>
  
    <div className="block-margin"/>
  
    <div className="container">
      <div className="block-title">Отзывы учеников</div>
    </div>
  
    <div className="feedback__default-wrapper">
      <Feedback slides={getFeedbackSlides()}/>
    </div>
  
    <div className="block-margin"/>
    
    <GotQuestion/>
  
    <div className="block-margin"/>
    
    <div className="container">
      <div className="program-list__detail-page-title">
        Также в направлении “Сфера услуг” в Тюмени для школьников
      </div>
    </div>
  
    <div className="program-list__default-wrapper">
      <ProgramList programs={getProgramList()}/>
    </div>
  
    <div className="block-margin"/>
    
    <Footer/>
  </div>
);

export {ProgramDetail};