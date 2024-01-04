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

export const getPokemonData = async (fetchURL) => {
  const res = await fetch(fetchURL);

  const data = await res.json();
  async function createPokemonObject(result) {
    let urls = [];
    result.forEach((pokemon) => {
      urls.push(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
    });

    const requests = urls.map((url) => fetch(url));
    const responses = await Promise.all(requests);
    const responseData = await Promise.all(
      responses.map((response) => response.json())
    );
// console.log(responseData)
    return responseData;
  }

  const fetchedPokemon = await createPokemonObject(data.results);
  return {
    prev: data.previous,
    next: data.next,
    fetchedPok: fetchedPokemon,
  };
};
