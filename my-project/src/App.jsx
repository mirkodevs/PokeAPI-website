import { useEffect, useState } from "react";
import Header from "./components/Header";
import PokemonThumbnail from "./components/PokemonThumbnail";
import Button from "./components/Button";
import TypeBadge from "./components/TypeBadge";
import Loader from "./components/Loader";

function App() {
  const allPokemonURL = "https://pokeapi.co/api/v2/pokemon?limit=500";
  const [loadPoke, setLoadPoke] = useState({
    current: "https://pokeapi.co/api/v2/pokemon?limit=40",
    next: null,
    prev: null,
    userPokemon: [],
    allPokemon: [],
  });

  const [userFetching, setUserFetching] = useState();

  const getAllUserPokemon = async () => {
    setUserFetching(true);
    const res = await fetch(loadPoke.current);

    const data = await res.json();
    setLoadPoke((prevLoadPoke) => {
      return {
        ...prevLoadPoke,
        next: data.next,
        prev: data.previous,
        userPokemon: [],
      };
    });
    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setLoadPoke((prevLoadPoke) => {
          return {
            ...prevLoadPoke,
            userPokemon: [...prevLoadPoke.userPokemon, data],
          };
        });
        setUserFetching(false);
      });
    }
    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllUserPokemon();
  }, [loadPoke.current]);

  const getAllPokemons = async () => {
    const res = await fetch(allPokemonURL);

    const data = await res.json();

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setLoadPoke((prevLoadPoke) => {
          return {
            ...prevLoadPoke,
            allPokemon: [...prevLoadPoke.allPokemon, data],
          };
        });
      });
    }
    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  function next() {
    setLoadPoke((prev) => {
      return {
        ...prev,
        current: loadPoke.next,
      };
    });
  }
  function previous() {
    setLoadPoke((prev) => {
      return {
        ...prev,
        current: loadPoke.prev,
      };
    });
  }
  function onSearch(searchingValue) {
    const newUserPokemon = loadPoke.allPokemon.filter((pokemon) => {
      return pokemon.name.startsWith(searchingValue.toLowerCase());
    });
    setLoadPoke((prev) => {
      return {
        ...prev,
        userPokemon: newUserPokemon,
      };
    });
  }
  function filterForType(type) {
    const newUserPokemon = loadPoke.allPokemon.filter((pokemon) => {
      return type === pokemon.types[0].type.name;
    });

    setLoadPoke((prevLoad) => {
      return {
        ...prevLoad,
        userPokemon: newUserPokemon,
      };
    });
  }
  function resetFilter() {
    getAllUserPokemon();
  }
  return (
    <div className="app-container">
      <Header onSearch={onSearch} />

      <div className="pt-7 rounded-xl">
        <section className="flex justify-center  xl:px-20">
        <section className=" xl:px-0 md:ms-20 lg:ms-20 xl:ps-6 lg:w-5/6 xl:w-11/12 px-5 max-w-7xl">
        <h2 className="mb-5 text-2xl font-bold text-center md:text-start">Filter by type:</h2>
          <section
            className="
md:gap-5 
gap-8  flex-wrap mx-auto  flex justify-center md:justify-start mb-10 uppercase  select-none px-0 max-w-7xl " 
          >
            <TypeBadge type="grass" onSelect={filterForType} />
            <TypeBadge type="fire" onSelect={filterForType} />
            <TypeBadge type="water" onSelect={filterForType} />
            <TypeBadge type="normal" onSelect={filterForType} />
            <TypeBadge type="electric" onSelect={filterForType} />
            <TypeBadge type="bug" onSelect={filterForType} />
            <TypeBadge type="ground" onSelect={filterForType} />
            <TypeBadge type="poison" onSelect={filterForType} />
            <TypeBadge type="fairy" onSelect={filterForType} />
            <TypeBadge type="fighting" onSelect={filterForType} />
            <TypeBadge type="rock" onSelect={filterForType} />
            <TypeBadge type="ghost" onSelect={filterForType} />
            <TypeBadge type="ice" onSelect={filterForType} />
            <TypeBadge type="reset" onSelect={resetFilter} />
          </section>
          </section>
        </section>
        {!userFetching ? (
          <>
            <div
              className="gap-10 sm:w-5/6 xl:w-7/12 lg:w-12/12 lg:gap-6 md:w-5/6 md:gap-20 mx-auto all-container
              
             grid sm:grid-rows-auto sm:grid-cols-2 xl:grid-rows-auto xl:gap-20 xl:grid-cols-3 md:grid-rows-auto 2xl:grid-cols-4 lg:grid-cols-3 lg:grid-rows-auto"
            >
              {loadPoke.userPokemon.map((pokemon, index) => (
                <PokemonThumbnail
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.sprites.other.dream_world.front_default}
                  type={pokemon.types[0].type.name}
                  key={index}
                  height={pokemon.height}
                  weight={pokemon.weight}
                  stat1={pokemon.stats[0].stat.name}
                  stat2={pokemon.stats[1].stat.name}
                  stat3={pokemon.stats[2].stat.name}
                  stat4={pokemon.stats[3].stat.name}
                  stat5={pokemon.stats[4].stat.name}
                  stat6={pokemon.stats[5].stat.name}
                  bs1={pokemon.stats[0].base_stat}
                  bs2={pokemon.stats[1].base_stat}
                  bs3={pokemon.stats[2].base_stat}
                  bs4={pokemon.stats[3].base_stat}
                  bs5={pokemon.stats[4].base_stat}
                  bs6={pokemon.stats[5].base_stat}
                />
              ))}
            </div>

            <section className="w-100 flex justify-center gap-4  py-10">
              <Button
                onClick={previous}
                condition={loadPoke.prev}
                isPrevButton={true}
              ></Button>
              <Button
                onClick={next}
                condition={loadPoke.next}
                isNextButton={true}
              ></Button>
            </section>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}

export default App;
