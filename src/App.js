import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {FrontPage} from './pages/front-page';
import {Programs} from './pages/programs';
import {ProgramDetail} from './pages/program-detail';
import {Schedule} from './pages/schedule';
import {ContactUs} from './pages/contact-us';
import {Policy} from './pages/policy';
import './styles/app.scss';

function App() {
  return (
    <Switch>
      <Route path="/programs" component={Programs} />
      <Route path="/nail-designer" component={ProgramDetail} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/contact-us" component={ContactUs} />
      <Route path="/policy" component={Policy} />
      <Route path="/" exact component={FrontPage} />
    </Switch>
  );
}

export default App;
