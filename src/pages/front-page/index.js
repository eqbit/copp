import React from 'react';
import {Header} from '../../components/header';
import {WelcomeScreen} from '../../components/welcome-screen';
import {ProgramList} from '../../components/program-list';
import {InlineButtonBlock} from '../../components/inline-button-block';

const FrontPage = props => (
  <div className="wrapper">
    <Header noLogo={true}/>
    <WelcomeScreen/>
    <ProgramList/>
    <InlineButtonBlock/>
  </div>
);

export {FrontPage};