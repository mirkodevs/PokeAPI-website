export function getPokemonColor(type){

let pokemonColor;
let textColor;
    switch (type) {
        case "grass":
          pokemonColor = "#16a34a";
          break;
        case "fire":
          pokemonColor = "#ef4444";
          break;
          case "water":
            pokemonColor = "#0ea5e9";
            break;
        case "normal":
          pokemonColor = "#e0e7ff";
          textColor = "#171717";
          break;
        case "electric":
          pokemonColor = "#facc15";
          textColor = "#171717";
          break;
        case "bug":
          pokemonColor = "#84cc16";
          break;
        case "ground":
          pokemonColor = "#854d0e";
          break;
        case "poison":
          pokemonColor = "#7e22ce";
          break;
        case "fairy":
          pokemonColor = "#e879f9";
          break;
        case "fighting":
          pokemonColor = "#ef4444";
          break;
        case "rock":
          pokemonColor = "#713f12";
          break;
        case "ghost":
          pokemonColor = "#4338ca";
          break;
        case "dragon":
          pokemonColor = "#e11d48";
          break;
        case "psychic":
          pokemonColor = "#c026d3";
          break;
          case "ice":
            pokemonColor = "#7dd3fc";
            break;
            default:
              pokemonColor = "#18181b"
      }
    return {pokemonColor:pokemonColor,textColor : textColor}

}