import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {FrontPage} from './pages/front-page';
import {Programs} from './pages/programs';
import './styles/app.scss';

function App() {
  return (
    <Switch>
      <Route path="/programs" component={Programs} />
      <Route path="/" exact component={FrontPage} />
    </Switch>
  );
}

export default App;
