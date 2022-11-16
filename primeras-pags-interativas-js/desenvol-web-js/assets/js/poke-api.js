
const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) =>{
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

  return  fetch(url)
  .then((response) => {return response.json()})
  .then((jsonBody)  => jsonBody.results)
  .then((pokemons) => pokemons.map((pokemon) => fetch(pokemon.url).json()))
  .then((detailRequests) => Promise.all(detailRequests))
}

Promise.all([

  fetch('https://pokeapi.co/api/v2/pokemon/1'),
  fetch('https://pokeapi.co/api/v2/pokemon/2'),
  fetch('https://pokeapi.co/api/v2/pokemon/3'),
  fetch('https://pokeapi.co/api/v2/pokemon/4')

]).then((results) =>{
  console.log(results)
})