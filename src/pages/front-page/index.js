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

import {getCarouselSlides, getFeedbackSlides, getNews} from '../../api/api';

const FrontPage = props => (
  <>
    <div className="wrapper wrapper--front-page">
      <Header noLogo front/>
      <WelcomeScreen/>
      <ProgramList/>
      <InlineButtonBlock/>
      <GotQuestion/>
      <About/>
      <VideoBlock/>
      <Carousel slides={getCarouselSlides()}/>
      <Feedback slides={getFeedbackSlides()}/>
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