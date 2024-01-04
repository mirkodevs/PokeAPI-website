import Bug from "../assets/icons/bug.svg";
import Dark from "../assets/icons/dark.svg";
import Dragon from "../assets/icons/dragon.svg";
import Electric from "../assets/icons/electric.svg";
import Fairy from "../assets/icons/fairy.svg";
import Fighting from "../assets/icons/fighting.svg";
import Fire from "../assets/icons/fire.svg";
import Flying from "../assets/icons/flying.svg";
import Ghost from "../assets/icons/ghost.svg";
import Grass from "../assets/icons/grass.svg";
import Ground from "../assets/icons/ground.svg";
import Ice from "../assets/icons/ice.svg";
import Normal from "../assets/icons/normal.svg";
import Poison from "../assets/icons/poison.svg";
import Psychic from "../assets/icons/psychic.svg";
import Rock from "../assets/icons/rock.svg";
import Steel from "../assets/icons/steel.svg";
import Water from "../assets/icons/water.svg";

const SVGComponent = ({ type }) => {
  let imageSource;

  // Logica per determinare quale SVG utilizzare in base al valore della prop
  switch (type) {
    case "bug":
      imageSource = Bug;
      break;
    case "dark":
      imageSource = Dark;
      break;
    case "dragon":
      imageSource = Dragon;
      break;
    case "electric":
      imageSource = Electric;
      break;
    case "fairy":
      imageSource = Fairy;
      break;
    case "fighting":
      imageSource = Fighting;
      break;

    case "fire":
      imageSource = Fire;
      break;

    case "flying":
      imageSource = Flying;
      break;
    case "ghost":
      imageSource = Ghost;
      break;
    case "grass":
      imageSource = Grass;
      break;
    case "ground":
      imageSource = Ground;
      break;
    case "ice":
      imageSource = Ice;
      break;
    case "normal":
      imageSource = Normal;
      break;
    case "poison":
      imageSource = Poison;
      break;
    case "psychic":
      imageSource = Psychic;
      break;

    case "rock":
      imageSource = Rock;
      break;

    case "steel":
      imageSource = Steel;
      break;
    case "water":
      imageSource = Water;
      break;
  }

  return (
    <span className = "flex content-center justify-center">
     {imageSource && <img   src={imageSource} alt={`SVG ${type}`} width={18} height={18} />}
    </span>
  );
};

export default SVGComponent;
