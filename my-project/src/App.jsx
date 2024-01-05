import { useEffect, useState } from "react";
import Header from "./sections/Header";
// import TypesFilter from "./components/TypesFilter";
// import ChangePage from "./components/ChangePage";
import { getPokemonData } from "./https/https";
import Pokemon from "./components/Pokemon";

function App() {
  const initialPokemonURL = "https://pokeapi.co/api/v2/pokemon?limit=40";
  const nonaGenerazioneURL = "https://pokeapi.co/api/v2/generation/9";
  const allPokemonURL = "https://pokeapi.co/api/v2/pokemon?limit=1301";
  const [fetchingState, setFetchingState] = useState({
    hasUserPokemon: false,
    isFetching: true,
    isFiltered:false
  });

  const [loadPoke, setLoadPoke] = useState({
    current: initialPokemonURL,
    next: null,
    prev: null,
    userPokemon: [],
    allPokemon: [],

  });



  async function getPokemon() {
    setFetchingState({ hasUserPokemon: true, isFetching: true });
    const data = await getPokemonData(loadPoke.current);
    const actualUserPokemon = loadPoke.userPokemon;
    // console.log(actualUserPokemon)
    setLoadPoke((prevLoadPoke) => {
      return {
        ...prevLoadPoke,
        next: data.next,
        prev: data.prev,
        userPokemon: [...actualUserPokemon,...data.fetchedPok] ,
      };
      
    });
    setFetchingState({ hasUserPokemon: true, isFetching: false });

  }
async function getAllPokemon(){

  const data = await getPokemonData(allPokemonURL);
  setLoadPoke((prevLoadPoke) => {
    return {
      ...prevLoadPoke,
      allPokemon: data.fetchedPok,
    };
    
  });


}


  useEffect(() => {
    getPokemon();
  }, [loadPoke.current]);

  useEffect(() => {
    getAllPokemon();
  }, []);


  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const totalHeight = document.documentElement.scrollHeight;
    const scrolled = window.scrollY;
    const maxScroll = totalHeight - windowHeight;
    const scrolledPercentage = (scrolled / maxScroll) * 100;

    setScrollPercentage(scrolledPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPercentage > 95 && !fetchingState.isFiltered ) {
      setLoadPoke((prevLoad) => {
        return {
          ...prevLoad,
          current: loadPoke.next,
        };
      });
    }
  }, [scrollPercentage]);

  return (
    <div className="app-container">
      <Header updateLoad={setLoadPoke} allPokemon={loadPoke.allPokemon} 
          updateUserFetching={setFetchingState}
       />

      <div className="pt-7 rounded-xl mb-10">
        <Pokemon
          fetchingState={fetchingState}
          userPokemon={loadPoke.userPokemon}
          updateLoad={setLoadPoke}
          allPokemon={loadPoke.allPokemon}
          updateUserFetching={setFetchingState}
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
