import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchHomePokemons, getPokemonData, getPokemonEvolutionChain, fetchHomePokemonsNext } from '../actions/pokemonActions';

import img_spinner from "./img/spinner.gif";
import './css/style.css';

//TODO: 

/**
 * Add more Info on each specie
 * Add Search Component
 * 
 */

class PokemonHome extends Component {

  constructor(props) {
    super(props);

    this.state = {
      offset: 20
    }

    this.onClickShowEvolution = this.onClickShowEvolution.bind(this);
  }

  componentWillMount() {
    this.props.fetchHomePokemons();
  }


  onClickShowEvolution = (e) => {
    const { loading, pokemonData } = this.props.pokemons;
    const pokemonUrl = e.target.name;
    this.props.getPokemonData(pokemonUrl);
  }

  onClickNext = (e) => {
    e.preventDefault();
    let newOffset = this.state.offset + 20;
    this.setState({
      offset: newOffset
    })

    this.props.fetchHomePokemonsNext(this.state.offset);
    console.log(this.state.offset);
  }

  onClickPrev = (e) => {
    e.preventDefault();
    if (this.state.offset > 0) {
      let newOffset = this.state.offset - 20;
      this.setState({
        offset: newOffset
      })
      this.props.fetchHomePokemonsPrev(this.state.offset);
    }
    console.log(this.state.offset);
  }

  render() {

    const { loading } = this.props.pokemons;
    let pokemonList = this.props.pokemons.pokemonList;
    let pokemonItems;

    if (loading) {
      return (
        <div className="content">
          <img className="spinner" src={img_spinner} alt="Loading"/>
        </div>
      )
    } else {
      if (Object.keys(pokemonList).length>0) {
        pokemonItems = pokemonList.map(pokemon => 
          {
            return (
              <div key={pokemon.name}>
                <div className="row">
                <div className="col-md-8 listname">
                  <p>{pokemon.name}</p>
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
          <nav>
              <ul className="pagination">
                <li className="page-item" onClick={this.onClickPrev}><a className="page-link">Previous</a></li>
                <li className="page-item" onClick={this.onClickNext}><a className="page-link">Next</a></li>
              </ul>
            </nav>
        </div>
      </div>
    );
  }
}
PokemonHome.propTypes = {
  fetchHomePokemons: PropTypes.func.isRequired,
  getPokemonData: PropTypes.func.isRequired,
  pokemons: PropTypes.array.isRequired,
  getPokemonEvolutionChain: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  pokemons: state.pokemons
});

export default connect(mapStateToProps, { fetchHomePokemons, getPokemonData, getPokemonEvolutionChain, fetchHomePokemonsNext })(PokemonHome);
