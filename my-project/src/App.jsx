import { useEffect, useState } from "react";
import Header from "./sections/Header";
// import TypesFilter from "./components/TypesFilter";
// import ChangePage from "./components/ChangePage";
import { getPokemonData } from "./https/https";
import Pokemon from "./components/Pokemon";

function App() {

  const allPokemonURL = "https://pokeapi.co/api/v2/pokemon?limit=500";
  const nonaGenerazioneURL = "https://pokeapi.co/api/v2/generation/9";
const [fetchingState,setFetchingState] = useState({

  hasUserPokemon:false,
isFetching:false
})

  const [loadPoke, setLoadPoke] = useState({
    current: "https://pokeapi.co/api/v2/pokemon?limit=40",
    next: null,
    prev: null,
    userPokemon: [],
    allPokemon: [],
  });

  
//   const getUserPokemon = async (currentPageURL) => {
//     setFetchingState(prev =>{return {...prev,isFetching:true}})

//     const data = await getPokemonData(currentPageURL);
//     setFetchingState({hasUserPokemon:true,isFetching:false})

//     setLoadPoke((prevLoad) => {
//       return {
//         ...prevLoad,
//         next: data.next,
//         prev: data.prev,
//         userPokemon: data.fetchedPok,
//         allPokemon:data.fetchedPok
//       };
//     });
// console.log("fetched")

//   };
  // useEffect(() => {
  //   getUserPokemon(loadPoke.current);
  // }, [loadPoke.current]);

  async function getAllPokemon() {
    setFetchingState({hasUserPokemon:true,isFetching:true})

    const data = await getPokemonData(nonaGenerazioneURL)
    setFetchingState({hasUserPokemon:true,isFetching:false})

    setLoadPoke((prevLoadPoke) => {
      return {
        ...prevLoadPoke,
        userPokemon:data.fetchedPok,
        allPokemon: data.fetchedPok,
      };
    });
  }


  useEffect(() => {
    getAllPokemon();
  }, []);

  return (

    
    <div className="app-container">
      <Header updateLoad={setLoadPoke} allPokemon={loadPoke.allPokemon} />

      <div className="pt-7 rounded-xl mb-10">

        <Pokemon
          userFetching={fetchingState.isFetching}
          userPokemon={loadPoke.userPokemon}
          updateLoad = {setLoadPoke}
          allPokemon={loadPoke.allPokemon}
        />
        {/* <ChangePage 
        updateLoad={setLoadPoke}
        prevPage = {loadPoke.prev}
        nextPage = {loadPoke.next}
         /> */}

     
      </div>


    </div>
  );
}

export default App;
