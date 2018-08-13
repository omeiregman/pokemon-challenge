import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';


import PokemonHome from './PokemonHome';
import PokemonSelect from './PokemonSelect';

class Root extends Component {
  render() {
    return(
      <div>
        <Switch>
          <Route exact path='/' component={PokemonHome} />
          <Route exact path='/pokemon/:name' render = { props => <PokemonSelect {...props} /> } />
        </Switch>
      </div>
    );
  }
}

export default Root;