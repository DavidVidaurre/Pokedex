import { pokColors } from "./pokColors.js";

export function addClassesCard(cardpokemon, namePokemon, imgPokemonContainer, imgPokemon, idPokemon, typesPokemon, firstType, secondType, dataTypes, isLegendary, pokemonCatched=null){
    cardpokemon.className = 'cardPokemon';
    cardpokemon.style.background = pokColors[dataTypes[0].type.name][0];
    if(isLegendary)
        cardpokemon.style.background = `linear-gradient(45deg, rgba(${pokColors[dataTypes[0].type.name][1]},1) 0%, rgba(255,255,255,1) 10%, rgba(${pokColors[dataTypes[0].type.name][1]},1) 15%, rgba(255,255,255,1) 20%, rgba(${pokColors[dataTypes[0].type.name][1]},1) 30%, rgba(255,255,255,1) 35%, rgba(${pokColors[dataTypes[0].type.name][1]},1) 40%, rgba(255,255,255,1) 50%, rgba(${pokColors[dataTypes[0].type.name][1]},1) 55%, rgba(255,255,255,1) 60%, rgba(${pokColors[dataTypes[0].type.name][1]},1) 70%, rgba(255,255,255,1) 75%, rgba(${pokColors[dataTypes[0].type.name][1]},1) 80%, rgba(255,255,255,1) 90%, rgba(${pokColors[dataTypes[0].type.name][1]},1) 95%, rgba(255,255,255,1) 100%)`;

    namePokemon.className = 'namePokemon';
    namePokemon.style.backgroundColor = `rgb(${pokColors[dataTypes[0].type.name][1]})`;

    imgPokemonContainer.className = 'imgPokemon--container';
    imgPokemon.className = 'imgPokemon';

    idPokemon.className = 'idPokemon';
    idPokemon.style.backgroundColor = `rgb(${pokColors[dataTypes[0].type.name][1]})`;

    typesPokemon.className = 'typesPokemon';
    firstType.classList.add('type', 'firstType');
    secondType.classList.add('type', 'secondType');
    firstType.style.backgroundColor = `rgb(${pokColors[dataTypes[0].type.name][1]})`;
    if(dataTypes.length == 2)
        secondType.style.backgroundColor = `rgb(${pokColors[dataTypes[1].type.name][1]})`;
    if(pokemonCatched != null)
        pokemonCatched.className = 'pokemon-catched';
}