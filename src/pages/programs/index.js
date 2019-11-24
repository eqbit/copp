import React from 'react';
import {Header} from '../../components/header';
import {GotQuestion} from '../../components/got-question';
import {Footer} from '../../components/footer';
import {ProgramFilter} from '../../components/program-filter';

const Programs = props => (
  <div className="wrapper">
    <Header/>
    <ProgramFilter/>
    <GotQuestion/>
    <Footer/>
  </div>
);

export {Programs};