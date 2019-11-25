import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import ScrollToTop from './components/scroll-to-top'

render((
  <BrowserRouter>
    <ScrollToTop/>
    <App/>
  </BrowserRouter>
), document.getElementById('root'));
