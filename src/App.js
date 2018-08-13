import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';



import Root from './components/Root';
import store from './Store';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
           <div>
            <Nav/>
            <Root/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
