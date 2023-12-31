import { getPokemonData } from "../https/https";
import TypeBadge from "./TypeBadge";

export default function TypesFilter({ updateLoad, allPokemon }) {
  function filterForType(type) {
    const newUserPokemon = allPokemon.filter((pokemon) => {
      return type === pokemon.types[0].type.name;
    });

    updateLoad((prevLoad) => {
      return {
        ...prevLoad,
        userPokemon: newUserPokemon,
      };
    });
  }

  async function resetFilter() {
    const { userPokemon } = await getPokemonData(
      "https://pokeapi.co/api/v2/pokemon?limit=40"
    );

    updateLoad((prev) => {
      return {
        ...prev,
        userPokemon: userPokemon,
      };
    });
  }
  return (
    <section className="flex justify-center  xl:px-20">
      <section className=" xl:px-0 md:ms-20 lg:ms-20 xl:ps-6 lg:w-5/6 xl:w-11/12 px-5 max-w-7xl">
        <h2 className="mb-5 text-2xl font-bold text-center md:text-start">
          Filter by type:
        </h2>
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
  );
}
