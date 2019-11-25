import React from 'react';
import {Header} from '../../components/header';
import {Footer} from '../../components/footer';
import {Carousel} from '../../components/carousel';
import {Feedback} from '../../components/feedback';
import {ProgramList} from '../../components/program-list';
import {GotQuestion} from '../../components/got-question';
import {getCarouselSlides, getFeedbackSlides} from '../../api/api';

const ProgramDetail = props => (
  <div className="wrapper">
    <Header/>
    <Carousel slides={getCarouselSlides()} noBg/>
    <Feedback slides={getFeedbackSlides()}/>
    <GotQuestion/>
    <ProgramList/>
    <Footer/>
  </div>
);

export {ProgramDetail};