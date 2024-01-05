import { getPokemonData } from "../https/https";
import TypeBadge from "./TypeBadge";
import { getPokemonForType } from "../https/https";
export default function TypesFilter({
  updateFetching,
  updateLoad,
  allPokemon,
}) {
  // function filterForType(type) {
  //   const newUserPokemon = allPokemon.filter((pokemon) => {
  //     let condition = false;

  //     pokemon.types.forEach((oneType) => {
  //       if (type === oneType.type.name) {
  //         condition = true;
  //       }
  //     });

  //     return condition;
  //   });

  //   updateLoad((prevLoad) => {
  //     return {
  //       ...prevLoad,
  //       userPokemon: newUserPokemon,
  //     };
  //   });
  // }

  async   function filterForType(type) {
    updateFetching({ hasUserPokemon: false, isFetching: true, isFiltered:true });

    const newUserPokemon = await getPokemonForType(type);
    updateLoad((prevLoad) => {
      return {
        ...prevLoad,
        userPokemon: newUserPokemon,
      };
    });
    updateFetching({ hasUserPokemon: true, isFetching: false,isFiltered:true});

  }

  async function resetFilter() {
    updateFetching({ hasUserPokemon: true, isFetching: true, isFiltered:false });
    updateLoad((prev) => {
      return {
        ...prev,
        userPokemon: allPokemon.slice(0,40),
      };
    });
  }
  return (
    <section className="flex justify-center w-100 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5 2xl:col-span-6">
      <section className="w-full">
        <h2 className="mb-5 text-2xl font-bold text-center md:text-start">
          Filter by type:
        </h2>
        <section
          className="
md:gap-5 
gap-8  flex-wrap mx-auto  flex justify-center md:justify-start uppercase  select-none px-0"
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
          <TypeBadge type="dragon" onSelect={filterForType} />
          <TypeBadge type="steel" onSelect={filterForType} />
          <TypeBadge type="reset" onSelect={resetFilter} />
        </section>
      </section>
    </section>
  );
}
