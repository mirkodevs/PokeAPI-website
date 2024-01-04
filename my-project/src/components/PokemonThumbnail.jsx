//PokemonThumbnail.js
import { useState } from "react";
import { createPortal } from "react-dom";
import Description from "./Description";
import TypeBadge from "./TypeBadge";
import { getPokemonColor } from "../utilities/getPokemonColor";
const PokemonThumbnail = ({
  id,
  name,
  image,
  types,
  height,
  weight,
  stat1,
  stat2,
  stat3,
  stat4,
  stat5,
  stat6,
  bs1,
  bs2,
  bs3,
  bs4,
  bs5,
  bs6,
}) => {
  const [show, setShow] = useState(false);

  const { pokemonColor } = getPokemonColor(types[0].type.name);
  const zeros = id < 10 ? "00" : id < 100 && "0";

  const gradientClass = `absolute z-10 bottom-0 top-0 w-full h-full rounded-xl
  bg-gradient-to-b from-transparent from-70% via-[#525252]/50 to-[#525252]/80`;

  function handleClose() {
    setShow(false);
  }
  return (
    <div className="flex flex-col content-ceter items-center md:items-start">
      <div>
        <div className="w-64 h-64 md:w-48 md:h-48">
          <div
            onClick={() => setShow(true)}
            style={{ backgroundColor: pokemonColor }}
            className=" scale-100
        flex justify-center content-center w-full h-full md:w-full md:h-full p-10 rounded-xl relative
        hover:scale-105 ease-in-out duration-300 cursor-pointer
        "
          >
            <div className={gradientClass}></div>
            <img className="select-none z-2 pokemon-image" src={image}></img>
          </div>
        </div>
        <div>
          <h4 className="mt-3 font-number size-8">#{zeros + id}</h4>
        </div>
        <h3 className="uppercase font-bold text-md my-2">{name}</h3>
        <div className="flex gap-1">
{types.map((oneType,idx) => {

return(

<TypeBadge key={idx} type={oneType.type.name} />
)

})

}
</div>
        <button
          className="mt-3 bg-[#38bdf8]
        border-2 border-[#38bdf8]
        hover:bg-transparent hover:text-[#38bdf8]
         p-1 px-2 font-bold text-white
         ease-in duration-75
         "
          onClick={() => setShow(true)}
        >
          SEE MORE
        </button>
      </div>
      {show &&
        createPortal(
          <Description
            types={types}
            color={pokemonColor}
            image={image}
            heightpok={height}
            weightpok={weight}
            pokstat1={stat1}
            posbs1={bs1}
            pokstat2={stat2}
            posbs2={bs2}
            pokstat3={stat3}
            posbs3={bs3}
            pokstat4={stat4}
            posbs4={bs4}
            pokstat5={stat5}
            posbs5={bs5}
            pokstat6={stat6}
            posbs6={bs6}
            onClose={handleClose}
          />,
          document.body
        )}
    </div>
  );
};

export default PokemonThumbnail;
