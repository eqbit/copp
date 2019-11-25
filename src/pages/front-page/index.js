import React from 'react';
import {Header} from '../../components/header';
import {WelcomeScreen} from '../../components/welcome-screen';
import {ProgramList} from '../../components/program-list';
import {InlineButtonBlock} from '../../components/inline-button-block';
import {GotQuestion} from '../../components/got-question';
import {About} from '../../components/about';
import {VideoBlock} from '../../components/video-block';
import {Carousel} from '../../components/carousel';
import {Feedback} from '../../components/feedback';
import {News} from '../../components/news';
import {GotQuestionLarge} from '../../components/got-question-large';
import {Footer} from '../../components/footer';
import {FooterMap} from '../../components/footer-map';
import {Link} from 'react-router-dom';

import {getCarouselSlides, getFeedbackSlides, getNews, getProgramList} from '../../api/api';

const FrontPage = props => (
  <>
    <div className="wrapper wrapper--front-page">
      <Header noLogo front/>
      <WelcomeScreen/>
      
      <div className="block-margin"/>
  
      <div className="container">
        <div className="program-list__title">Программы</div>
      </div>
      
      <div className="program-list__default-wrapper">
        <ProgramList programs={getProgramList()}/>
      </div>
      
      <InlineButtonBlock/>
  
      <div className="block-margin"/>
      
      <GotQuestion/>
      
      <About/>
      
      <div className="block-margin"/>
      
      <VideoBlock/>
      
      <div className="block-margin"/>
      
      <div className="container">
        <div className="carousel__title">
          Мы уже сейчас можем заложить фундамент будущей <br/>
          личности и помочь вам раскрыться
        </div>
      </div>
      
      <div className="carousel__default-wrapper">
        <Carousel slides={getCarouselSlides()}/>
      </div>
  
      <div className="block-margin"/>
      
      <div className="container">
        <div className="feedback__title">Отзывы выпускников</div>
        <div className="feedback__subtitle">
          Мы гордимся нашими выпускниками, и они рады, что учились у нас. <br/>
          Наши <Link to="/programs" className="underline-link">программы</Link> прошли уже более 1000 человек.
        </div>
      </div>
      
      <div className="feedback__default-wrapper">
        <Feedback slides={getFeedbackSlides()}/>
      </div>
      
      <News news={getNews()} extraLink={{
        title: 'Мастер-класс по кулинарному искусству',
        sign: 'Дата проведения: 20.05.2020',
        img: '/images/extra-link.jpg',
        link: '/master-class'
      }}/>
      <GotQuestionLarge/>
      
      <Footer/>
    </div>
    
    <FooterMap/>
  </>
);

export {FrontPage};