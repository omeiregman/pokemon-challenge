import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchHomePokemons } from '../actions/pokemonActions';

import './css/style.css';


class PokemonHome extends Component {

  constructor(props) {
    super(props);

    this.onClickShowEvolution = this.onClickShowEvolution.bind(this);
  }

  componentWillMount() {
    this.props.fetchHomePokemons();
  }

  componentWillReceiveProps(nextProps) {
  
  }

  onClickShowEvolution = (e) => {
    e.preventDefault();
    console.log("Show Evo Clicked");
    
  }

  render() {
    const pokemonItems = this.props.pokemons.map(pokemon => 
      (
      <div key={pokemon}>
        <div className="row">
        <div className="col-md-8">
          <h3>{pokemon.name}</h3>
        </div>
        <div className="col-md-4">
          <button className="btn btn-info" onClick={this.onClickShowEvolution}>Show Evolution Chain</button>
        </div>
      </div>
      <hr></hr>
      </div>
      
    ))
    return(
      <div className="content">
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
