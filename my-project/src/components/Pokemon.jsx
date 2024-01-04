import PokemonThumbnail from "./PokemonThumbnail";
import Loader from "./Loader";
import TypesFilter from "./TypesFilter";
export default function Pokemon({ userFetching, userPokemon,updateLoad,allPokemon }) {
  const gridClass = userFetching ? "justify-center" : "grid";
  const pokemon = userPokemon;

  return (
    <main id = "pokemon">
      <div
        style={{
          display: gridClass,
        }}
        className="grid gap-10 mx-auto   sm:w-5/6   md:gap-20 md:grid-cols-3 md:grid-rows-auto lg:grid-rows-auto lg:gap-20 lg:grid-cols-4 xl:grid-rows-auto xl:gap-20 xl:grid-cols-5 2xl:grid-cols-6  "
      >
               <TypesFilter
          updateLoad={updateLoad}
          allPokemon={allPokemon}
        />
        { pokemon.length !== 0 ? (
          pokemon.map((pokemon, index) => (
            <PokemonThumbnail
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.front_default ? pokemon.sprites.front_default : ""}
              types={pokemon.types}
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
          ))
        ) : !userFetching && (
       <p className="text-center text-gray-600 font-bold">Oops! No Pokémon found. </p>
        )
        
        }
{userFetching && (
          <Loader />
        ) }


      </div>
    </main>
  );
}
