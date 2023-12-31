import PokeApiIMG from "../assets/logo.svg";

export default function Header({ updateLoad, allPokemon }) {
  function handleChange(e) {
    const value = e.target.value;
    const newUserPokemon = allPokemon.filter((pokemon) => {
      return pokemon.name.startsWith(value.toLowerCase());
    });
    updateLoad((prev) => {
      return {
        ...prev,
        userPokemon: newUserPokemon,
      };
    });
  }

  return (
    <header className="flex justify-center flex-col">
      <section className=" bg-[#38bdf8] py-8 pb-7 flex flex-col justify-center content-center">
        <section className="w-100 flex justify-center py-5">
          <img width={256} src={PokeApiIMG}></img>
        </section>
        <input
          className="w-18 self-center outline-none py-2 my-4 px-2 rounded-lg"
          type="text"
          placeholder="Search pokemon"
          onChange={(e) => handleChange(e)}
        ></input>
      </section>
    </header>
  );
}
