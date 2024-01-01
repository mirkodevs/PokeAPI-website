export function getPokemonColor(type){
const pokemonColors = {
  "grass": { color: "#16a34a" },
  "fire": { color: "#ef4444" },
  "water": { color: "#0ea5e9" },
  "normal": { color: "#e0e7ff", textColor: "#171717" },
  "electric": { color: "#facc15", textColor: "#171717" },
  "bug": { color: "#84cc16" },
  "ground": { color: "#854d0e" },
  "poison": { color: "#7e22ce" },
  "fairy": { color: "#e879f9" },
  "fighting": { color: "#ef4444" },
  "rock": { color: "#713f12" },
  "ghost": { color: "#4338ca" },
  "dragon": { color: "#e11d48" },
  "psychic": { color: "#c026d3" },
  "ice": { color: "#7dd3fc" },
  "reset": { color: "#18181b" }
  
};

return {
  pokemonColor:pokemonColors[type].color,
  textColor : pokemonColors[type].textColor

}

}