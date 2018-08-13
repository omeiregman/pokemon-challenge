import React, { Component } from 'react';
// import { Switch, Route, Redirect} from 'react-router-dom';

import PokemonHome from './PokemonHome';

class Root extends Component {
  render() {
    return(
      <div>
        <PokemonHome />
      </div>
    );
  }
}

export default Root;
