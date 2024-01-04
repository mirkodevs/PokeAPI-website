import { getPokemonColor } from "../utilities/getPokemonColor";
import SVGComponent from "./DynamicTypeSVG";



export default function TypeBadge({ type,onSelect, }) {

   const {pokemonColor,textColor} = getPokemonColor(type);
 

  const badgeStyle = {
    padding: "2.5px 3px ",
    color: textColor ? textColor : "white",
    backgroundColor: pokemonColor,
    borderRadius: "10px",
    width: "100px",
    textAlign: "center",
    TextTransform: "uppercase",
    fontWeight: "700",
    fontSize:"15px",
    cursor: onSelect && "pointer"
  };
 const typeName = type[0].toUpperCase() + type.substring(1)

return <div className="flex justify-center content-center gap-1 py-1" onClick={() => onSelect && onSelect(type)} style={badgeStyle}>

<SVGComponent type={type}></SVGComponent>


{typeName}

</div>;
}
