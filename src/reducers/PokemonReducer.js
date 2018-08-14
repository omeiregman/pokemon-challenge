import { FETCH_HOME_POKEMONS, FETCH_SELECTED_POKEMON_DATA, DATA_LOADING, FETCH_SELECTED_POKEMON_EVOLUTION } from '../actions/types';


const initialState = {
  pokemonList: [],
  pokemonData: {},
  pokemonEvolution: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case DATA_LOADING:
      return {
        ...state,
        loading: true
      }
    case FETCH_HOME_POKEMONS:
      return {
        ...state,
        pokemonList: action.payload,
        loading: false
      };
    case FETCH_SELECTED_POKEMON_DATA:
      return {
        ...state,
        pokemonData: action.payload,
        loading: false
      };
    case FETCH_SELECTED_POKEMON_EVOLUTION:
      return {
        ...state,
        pokemonEvolution: action.payload,
        loading: false
      }
    default:
    return state;
  }
}
