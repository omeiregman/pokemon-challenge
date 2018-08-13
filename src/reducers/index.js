import { combineReducers } from 'redux';

import pokemonReducer from './PokemonReducer';


export default combineReducers({
  pokemons: pokemonReducer
});
