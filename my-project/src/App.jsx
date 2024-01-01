import { useEffect, useState } from "react";
import Header from "./sections/Header";
import TypesFilter from "./components/TypesFilter";
import ChangePage from "./components/ChangePage";
import { getPokemonData } from "./https/https";
import Pokemon from "./components/Pokemon";

function App() {

  const allPokemonURL = "https://pokeapi.co/api/v2/pokemon?limit=150";
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

  
  const getUserPokemon = async (currentPageURL) => {
    setFetchingState(prev =>{return {...prev,isFetching:true}})

    const data = await getPokemonData(currentPageURL);
    setFetchingState({hasUserPokemon:true,isFetching:false})

    setLoadPoke((prevLoad) => {
      return {
        ...prevLoad,
        next: data.next,
        prev: data.prev,
        userPokemon: data.fetchedPok,
      };
    });
console.log("fetched")

  };
  useEffect(() => {
    getUserPokemon(loadPoke.current);
  }, [loadPoke.current]);

  async function getAllPokemon() {
    const data = await getPokemonData(allPokemonURL);

    setLoadPoke((prevLoadPoke) => {
      return {
        ...prevLoadPoke,
        allPokemon: data.fetchedPok,
      };
    });
    console.log("all pokemon fetched")
  }


  useEffect(() => {
    getAllPokemon();
  }, [fetchingState.hasUserPokemon]);

  return (

    
    <div className="app-container">
      <Header updateLoad={setLoadPoke} allPokemon={loadPoke.allPokemon} />

      <div className="pt-7 rounded-xl">
        <TypesFilter
          updateLoad={setLoadPoke}
          allPokemon={loadPoke.allPokemon}
        />
        <Pokemon
          userFetching={fetchingState.isFetching}
          userPokemon={loadPoke.userPokemon}
        />
        <ChangePage 
        updateLoad={setLoadPoke}
        prevPage = {loadPoke.prev}
        nextPage = {loadPoke.next}
         />

     
      </div>


    </div>
  );
}

export default App;
