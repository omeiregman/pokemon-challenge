import React, { Component } from 'react';
import './css/style.css';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchHomePokemons } from '../actions/pokemonActions';

class PokemonHome extends Component {

  componentWillMount() {
    this.props.fetchHomePokemons();
  }

  componentWillReceiveProps(nextProps) {
  
  }

  render() {
    const pokemonItems = this.props.pokemons.map(pokemon => (
      <div key = {pokemon}>
        <h3>{pokemon.name}</h3>
        <p>{pokemon.url}</p>
      </div>
    ))
    return(
      <div className="content">
        <h2>Pokemons</h2>
        {pokemonItems}
      </div>
    );
  }
}
PokemonHome.propTypes = {
  fetchHomePokemons: PropTypes.func.isRequired,
  pokemons: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  pokemons: state.pokemons.items,
});

export default connect(mapStateToProps, { fetchHomePokemons })(PokemonHome);
