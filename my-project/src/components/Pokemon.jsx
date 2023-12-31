import PokemonThumbnail from "./PokemonThumbnail"
import Loader from "./Loader"
export default function Pokemon({userFetching,userPokemon}){

    const gridClass = userFetching ? "flex" : "grid";
const pokemon = userPokemon;

    return(

        <div
        style={{
          display: gridClass,
        }}
        className=" grid gap-10 lg:gap-20 sm:w-5/6 xl:w-7/12 lg:w-12/12  md:w-6/6 md:gap-20 mx-auto all-container sm:grid-rows-auto sm:grid-cols-2 md:grid-cols-3 xl:grid-rows-auto xl:gap-20 xl:grid-cols-3 md:grid-rows-auto 2xl:grid-cols-4 lg:grid-cols-4 lg:grid-rows-auto"
      >
        {userFetching ? (
          <Loader />
        ) : pokemon.length !== 0 ? (
          pokemon.map((pokemon, index) => (
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
          ))
        ) : (
          <p>no pokemon</p>
        )}
      </div>

)


}