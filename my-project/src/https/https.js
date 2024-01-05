// export const getPokemonData = async (fetchURL) => {
//   const res = await fetch(fetchURL);

//   const data = await res.json();
// console.log(data)
//   async function createPokemonObject(result) {
//     let urls = [];
//     result.forEach((pokemon) => {
//       urls.push(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
//     });
//     const requests = urls.map((url) => fetch(url));
//     const responses = await Promise.all(requests);
//     const responseData = await Promise.all(
//       responses.map((response) => response.json())
//     );

//     return responseData;
//   }

//   const fetchedPokemon = await createPokemonObject(data.results);

//   return {
//     prev: data.previous,
//     next: data.next,
//     fetchedPok: fetchedPokemon,
//   };
// };
async function createPokemonObject(result,isForType) {
  let urls = [];
  result.forEach((pokemon) => {
    urls.push(`https://pokeapi.co/api/v2/pokemon/${isForType ? pokemon.pokemon.name : pokemon.name}`);
  });

  const requests = urls.map((url) => fetch(url));
  const responses = await Promise.all(requests);
  const responseData = await Promise.all(
    responses.map((response) => response.json())
  );
  // console.log(responseData)
  return responseData;
}

export const getPokemonForType = async (type) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
    const data = await res.json();
    // console.log(data)
    const fetchedPokemon = await createPokemonObject(data.pokemon,true);
// console.log(fetchedPokemon)
    return fetchedPokemon;
  } catch (error) {
    console.log(error);
  }
};
export const getPokemonData = async (fetchURL) => {
  const res = await fetch(fetchURL);

  const data = await res.json();

  const fetchedPokemon = await createPokemonObject(data.results);
  return {
    prev: data.previous,
    next: data.next,
    fetchedPok: fetchedPokemon,
  };
};
