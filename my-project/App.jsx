import { useEffect, useState } from "react";
import Header from "./components/Header";
import PokemonThumbnail from "./components/PokemonThumbnail";
import Button from "./components/Button";
import TypeBadge from "./components/TypeBadge"

function App() {
  const allPokemonURL = "https://pokeapi.co/api/v2/pokemon?limit=150";
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

  return (
    <div className="app-container">
      <Header onSearch={onSearch} />
<section className="gap-6 w-5/6 flex-wrap mx-auto px-16 flex justify-start mb-10 uppercase cursor-pointer select-none">
<TypeBadge type = "grass"/>
<TypeBadge type = "fire"/>
<TypeBadge type = "normal"/>
<TypeBadge type = "electric"/>
<TypeBadge type = "bug"/>
<TypeBadge type = "ground"/>
<TypeBadge type = "poison"/>
<TypeBadge type = "fairy"/>
<TypeBadge type = "fighting"/>
<TypeBadge type = "rock"/>
<TypeBadge type = "ghost"/>

</section>

      {!userFetching && (
        <div className="pokemon-container ">
          <div className="md:gap-5 lg:w-5/6  md:px-1 mx-auto all-container grid sm:grid-rows-auto sm:grid-cols-2 xl:grid-rows-auto xl:grid-cols-4 md:grid-rows-auto  lg:grid-cols-3 lg:grid-rows-auto">
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
        </div>
      )}
    </div>
  );
}

export default App;
