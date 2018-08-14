import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import './css/normalize.css';
import App from './App';
import './include/bootstrap';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render( (

  <BrowserRouter>
    <App />
  </BrowserRouter>

), document.getElementById('root'));
