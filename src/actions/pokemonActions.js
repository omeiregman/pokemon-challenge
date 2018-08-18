import { FETCH_HOME_POKEMONS, FETCH_ALL_POKEMONS, FETCH_SELECTED_POKEMON_DATA, DATA_LOADING, FETCH_SELECTED_POKEMON_EVOLUTION } from './types';


//Fetch Base Pokemon data.. 1 - 20
export const fetchHomePokemons = () => dispatch => {
    dispatch(setDataLoading());
        fetch('https://pokeapi.co/api/v2/pokemon-species/')
        .then(res => res.json())
        .then(pokemons => dispatch({
          type: FETCH_HOME_POKEMONS,
          payload: pokemons.results
        }));
}

//Next Button Action
export const fetchHomePokemonsNext = (offset) => dispatch => {
  dispatch(setDataLoading());
      fetch(`https://pokeapi.co/api/v2/pokemon-species/?limit=20&offset=${offset}`)
      .then(res => res.json())
      .then(pokemons => dispatch({
        type: FETCH_HOME_POKEMONS,
        payload: pokemons.results
      })
    );
}

//Previous Button Action
export const fetchHomePokemonsPrev = (offset) => dispatch => {
  dispatch(setDataLoading());
      fetch(`https://pokeapi.co/api/v2/pokemon-species/?limit=20&offset=${offset}`)
      .then(res => res.json())
      .then(pokemons => dispatch({
        type: FETCH_HOME_POKEMONS,
        payload: pokemons.results
      })
    );
}

//Get Complete data of pokemon using the  url returned from fetchHomePokemon Action
export const getPokemonData = (pokemonUrl) => dispatch => {
  dispatch(setDataLoading());
      fetch(pokemonUrl)
      .then(res => res.json())
      .then(pokemons => dispatch({
        type: FETCH_SELECTED_POKEMON_DATA,
        payload: pokemons
      })
    );
}

//Get evolution chain using evolution_chain: url from the getPokemonData
export const getPokemonEvolutionChain = (evolutionUrl) => dispatch => {
  dispatch(setDataLoading());
    let data;
    let evolutionResult = [];
    fetch(evolutionUrl)
    .then((response) => {
      return response.json();
  })
  .then((myJson) => {
      data=myJson;
      findSpecies();
  }).then(evolution => dispatch({
    type: FETCH_SELECTED_POKEMON_EVOLUTION,
    payload: findSpecies()
  })
  );

  const findSpecies = () => {
      let hasExtraChain = true;
      while(hasExtraChain){
          // debugger;
          if(data.species!==undefined){
              evolutionResult.push(data.species);
          }
          if(data[0]!==undefined && data[0].species!==undefined){
              evolutionResult.push(data[0].species);
          }
          if(data.chain!==undefined){
              data=data.chain;
              continue;
          }else{
              if(data.evolves_to!==undefined){
                  data=data.evolves_to;
              }else if(data[0]!==undefined && data[0].evolves_to !== undefined){
                  data=data[0].evolves_to;
              }else{
                  hasExtraChain=false;
              }
          }
      }
      console.log(evolutionResult);
      return evolutionResult
  }
    
}

// Get every Pokemon data
export const fetchAllPokemons = () => dispatch => {
        fetch("https://pokeapi.co/api/v2/pokemon-species/?limit=802")
        .then(res => res.json())
        .then(pokemons => dispatch({
          type: FETCH_ALL_POKEMONS,
          payload: pokemons.results
        }));
}

//Set state to Loading
export const setDataLoading = () => {
  return {
    type: DATA_LOADING
  }
}
