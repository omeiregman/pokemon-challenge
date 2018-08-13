import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/main.css';
import './css/normalize.css';
import App from './App';
import './include/bootstrap';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( (

  <BrowserRouter>
    <App />
  </BrowserRouter>

), document.getElementById('root'));
registerServiceWorker();
