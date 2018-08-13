import { FETCH_HOME_POKEMONS } from './types';



export const fetchHomePokemons = () => dispatch => {
        fetch('https://pokeapi.co/api/v2/pokemon-species/')
        .then(res => res.json())
        .then(pokemons => dispatch({
          type: FETCH_HOME_POKEMONS,
          payload: pokemons.results
        }));
}

