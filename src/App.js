import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {FrontPage} from './pages/front-page';
import './styles/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Switch>
        <Route to="/" exact component={FrontPage} />
      </Switch>
    </div>
  );
}

export default App;
