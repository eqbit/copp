import React from 'react';
import {Header} from '../../components/header';
import {WelcomeScreen} from '../../components/welcome-screen';

const FrontPage = props => (
  <div className="wrapper">
    <Header noLogo={true}/>
    <WelcomeScreen />
  </div>
);

export {FrontPage};