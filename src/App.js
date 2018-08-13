import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';



import Root from './components/Root';
import store from './Store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Root/>
        </div>
      </Provider>
    );
  }
}

export default App;
