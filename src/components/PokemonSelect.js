import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchHomePokemons, getPokemonData, getPokemonEvolutionChain } from '../actions/pokemonActions';

import img_spinner from "./img/spinner.gif";
import './css/style.css';

//TODO: 
/**
 * Get pokemon data using url
 * 
 */
class PokemonSelect extends Component {
    constructor(props){
        super(props);
    }


    componentWillReceiveProps(nextProps) {
        const { loading, pokemonData } = this.props.pokemons;

        if (nextProps.pokemons.pokemonData !== this.props.pokemons.pokemonData) {
            let evolutionUrl = nextProps.pokemons.pokemonData.evolution_chain.url;
            console.log(evolutionUrl);
            this.props.getPokemonEvolutionChain(evolutionUrl);
        }
    }

    onClickShowEvolution = (e) => {
        const { loading, pokemonData } = this.props.pokemons;
        const pokemonUrl = e.target.name;
        this.props.getPokemonData(pokemonUrl);
      }

    render() {
        const { loading, pokemonData } = this.props.pokemons;

    let evolutionList = this.props.pokemons.pokemonEvolution;
    let pokemonItems;

    if (loading) {
      return (
        <div className="content">
        <img className="spinner" src={img_spinner} alt="Loading"/>
        </div>
      )
    } else {
      if (Object.keys(evolutionList).length>0) {
        pokemonItems = evolutionList.map(pokemon => 
          {
            return (
              <div key={pokemon.name}>
                <div className="row">
                <div className="col-md-8">
                  <h3>{pokemon.name}</h3>
                </div>
                <Link to={`/pokemon/${pokemon.name}`}>
                <div className="col-md-4">
                  <button className="btn btn-info" name={pokemon.url} onClick={this.onClickShowEvolution}>Show Evolution Chain</button>     
                  </div>
                  </Link>
              </div>
              <hr></hr>
     
              </div>
            )
          }
          )    
      }
    }


    return(
      <div className="content">
        <div>
          {pokemonItems}
        </div>
      </div>
    );
  }
}


PokemonSelect.propTypes = {
    fetchHomePokemons: PropTypes.func.isRequired,
    getPokemonData: PropTypes.func.isRequired,
    pokemons: PropTypes.array.isRequired,
    getPokemonEvolutionChain: PropTypes.func.isRequired
  };
  
  const mapStateToProps = state => ({
    pokemons: state.pokemons
  });
  
  export default connect(mapStateToProps, { fetchHomePokemons, getPokemonData, getPokemonEvolutionChain })(PokemonSelect);
  