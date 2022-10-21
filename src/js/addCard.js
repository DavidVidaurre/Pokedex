import { addClassesCard } from "./addClassesCard.js";

// Estructurando la card
export function addCard(cardpokemon, namePokemon, imgPokemonContainer, imgPokemon, idPokemon, typesPokemon, firstType, secondType, dataTypes, isLegendary, pokemonCatched=null){
    // Añadiendo clases
    addClassesCard(cardpokemon, namePokemon, imgPokemonContainer, imgPokemon, idPokemon, typesPokemon, firstType, secondType, dataTypes, isLegendary, pokemonCatched);
    // Añadiendo la img a su contenedor
    imgPokemonContainer.appendChild(imgPokemon);

    // Añadiendo los tipos a su contenedor
    typesPokemon.appendChild(firstType);
    if(dataTypes.length == 2){
        typesPokemon.appendChild(secondType);
    }
    // Añadiendo elementos a la card
    cardpokemon.appendChild(namePokemon);
    cardpokemon.appendChild(imgPokemonContainer);
    cardpokemon.appendChild(idPokemon);
    cardpokemon.appendChild(typesPokemon);
    if(pokemonCatched != null)
        cardpokemon.appendChild(pokemonCatched);
}