import React from 'react';
import {Header} from '../../components/header';
import {WelcomeScreen} from '../../components/welcome-screen';
import {ProgramList} from '../../components/program-list';
import {InlineButtonBlock} from '../../components/inline-button-block';
import {GotQuestion} from '../../components/got-question';
import {About} from '../../components/about';
import {VideoBlock} from '../../components/video-block';
import {Carousel} from '../../components/carousel';

import {getSlides} from '../../api/api';

const FrontPage = props => (
  <div className="wrapper">
    <Header noLogo={true}/>
    <WelcomeScreen/>
    <ProgramList/>
    <InlineButtonBlock/>
    <GotQuestion/>
    <About/>
    <VideoBlock/>
    <Carousel slides={getSlides()}/>
  </div>
);

export {FrontPage};