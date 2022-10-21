import { pokColors } from "./pokColors.js";
import { fetchAPIPokemon, fetchAPISpecies } from "./fetchAPI.js";
import { addCard } from "./addCard.js";

const modalPokemon = document.getElementById('modalPokemon');
const idPokemonModal = document.getElementById('idPokemonModal');
const imgPokemonModal = document.getElementById('imgPokemonModal');
const namePokemonModal = document.getElementById('namePokemonModal');

// TITLES
const titleGeneral = document.getElementById('titleGeneral');
const titleStats = document.getElementById('titleStats');
const titleMoves = document.getElementById('titleMoves');

// GENERAL INFORMATION (ABILITIES - WEIGHT - HEIGHT)
const abilityOne = document.getElementById('abilityOne');
const abilityTwo = document.getElementById('abilityTwo');
const statAbilityTwo = document.getElementById('statAbilityTwo');
const weight = document.getElementById('weight');
const height = document.getElementById('height');

// BASER STATS
const hp = document.getElementById('hp');
const atk = document.getElementById('atk');
const def = document.getElementById('def');
const atkEsp = document.getElementById('atkEsp');
const defEsp = document.getElementById('defEsp');
const spd = document.getElementById('spd');

// MOVES
const moveOne = document.getElementById('moveOne');
const moveTwo = document.getElementById('moveTwo');
const moveThree = document.getElementById('moveThree');
const moveFour = document.getElementById('moveFour');
const moveFive = document.getElementById('moveFive');
const moveSix = document.getElementById('moveSix');

// CARDS CONTAINER
const sectionCardsContainer = document.getElementById('section-cards--container');

// POKEMON CATCHED CONTAINER
const sectionCatchPokemon = document.getElementById('sectionCatchPokemon');

let idPokemonCatch = 0;

let arrayPokemonsCatched = [];
localStorage.getItem('arrayPokemonsCatched') && 
    (arrayPokemonsCatched = JSON.parse(localStorage.getItem('arrayPokemonsCatched')));

export const renderCardPokemon = async (valuePokemon) => {
    try {
        const {dataPokemon, errorModal} = await fetchAPIPokemon(valuePokemon);
        if(!errorModal){
            const dataLegendary = await fetchAPISpecies(valuePokemon);
            const cardpokemon = document.createElement('div');
            const namePokemon = document.createElement('div');
            const imgPokemonContainer = document.createElement('div');
            const imgPokemon = document.createElement('img');
            const idPokemon = document.createElement('div');
            const typesPokemon = document.createElement('div');
            const firstType = document.createElement('div');
            const secondType = document.createElement('div');
            const pokemonCatched = document.createElement('img');

            cardpokemon.setAttribute('id', dataPokemon.id);

            cardpokemon.addEventListener('click', () => {
                idPokemonCatch = dataPokemon.id;
                if(arrayPokemonsCatched.includes(idPokemonCatch)){
                    sectionCatchPokemon.style.display = 'none';
                } else{
                    sectionCatchPokemon.style.display = 'block';
                }
                modalContainer.style.display = 'flex';
                modalPokemon.style.background = pokColors[dataPokemon.types[0].type.name][0];
                if(dataLegendary['is_legendary']){
                    modalPokemon.style.background = `linear-gradient(45deg, rgba(${pokColors[dataPokemon.types[0].type.name][1]},1) 0%, rgba(255,255,255,1) 10%, rgba(${pokColors[dataPokemon.types[0].type.name][1]},1) 15%, rgba(255,255,255,1) 20%, rgba(${pokColors[dataPokemon.types[0].type.name][1]},1) 30%, rgba(255,255,255,1) 35%, rgba(${pokColors[dataPokemon.types[0].type.name][1]},1) 40%, rgba(255,255,255,1) 50%, rgba(${pokColors[dataPokemon.types[0].type.name][1]},1) 55%, rgba(255,255,255,1) 60%, rgba(${pokColors[dataPokemon.types[0].type.name][1]},1) 70%, rgba(255,255,255,1) 75%, rgba(${pokColors[dataPokemon.types[0].type.name][1]},1) 80%, rgba(255,255,255,1) 90%, rgba(${pokColors[dataPokemon.types[0].type.name][1]},1) 95%, rgba(255,255,255,1) 100%)` 
                }
                idPokemonModal.style.backgroundColor = `rgb(${pokColors[dataPokemon.types[0].type.name][1]})`;
                idPokemonModal.innerText = '#' + dataPokemon.id;
                imgPokemonModal.src = dataPokemon['sprites']['front_default'] || dataPokemon['sprites']['other']['official-artwork']['front_default'];
                imgPokemonModal.alt = dataPokemon.name;
                namePokemonModal.style.backgroundColor = `rgb(${pokColors[dataPokemon.types[0].type.name][1]})`;
                namePokemonModal.innerText = dataPokemon.name;
                titleGeneral.style.backgroundColor = `rgb(${pokColors[dataPokemon.types[0].type.name][1]})`;
                titleStats.style.backgroundColor = `rgb(${pokColors[dataPokemon.types[0].type.name][1]})`;
                titleMoves.style.backgroundColor = `rgb(${pokColors[dataPokemon.types[0].type.name][1]})`;

                //GENERAL STATS
                abilityOne.innerText = dataPokemon.abilities[0].ability.name;
                if(dataPokemon.abilities.length >= 2)
                    abilityTwo.innerText = dataPokemon.abilities[1].ability.name;
                else
                    statAbilityTwo.style.display = 'none';
                
                weight.innerText = `${dataPokemon.weight/10} kg`;
                height.innerText = `${dataPokemon.height/10} m`;

                // BASE STATS
                hp.innerText = `Hp: ${dataPokemon.stats[0].base_stat}`;
                atk.innerText = `Atk: ${dataPokemon.stats[1].base_stat}`;
                def.innerText = `Def: ${dataPokemon.stats[2].base_stat}`;
                atkEsp.innerText = `Esp Atk: ${dataPokemon.stats[3].base_stat}`;
                defEsp.innerText = `Esp Def: ${dataPokemon.stats[4].base_stat}`;
                spd.innerText = `Spd: ${dataPokemon.stats[5].base_stat}`;

                // MOVES
                moveOne.innerText = dataPokemon.moves[Math.floor((Math.random() * (dataPokemon.moves.length)))].move.name;
                moveTwo.innerText = dataPokemon.moves[Math.floor((Math.random() * (dataPokemon.moves.length )))].move.name;
                moveThree.innerText = dataPokemon.moves[Math.floor((Math.random() * (dataPokemon.moves.length)))].move.name;
                moveFour.innerText = dataPokemon.moves[Math.floor((Math.random() * (dataPokemon.moves.length)))].move.name;
                moveFive.innerText = dataPokemon.moves[Math.floor((Math.random() * (dataPokemon.moves.length)))].move.name;
                moveSix.innerText = dataPokemon.moves[Math.floor((Math.random() * (dataPokemon.moves.length)))].move.name;
            })
            
            addCard(cardpokemon, namePokemon, imgPokemonContainer, imgPokemon, idPokemon, typesPokemon, firstType, secondType, dataPokemon.types, dataLegendary['is_legendary']);
            if(arrayPokemonsCatched.includes(dataPokemon.id)){
                addCard(cardpokemon, namePokemon, imgPokemonContainer, imgPokemon, idPokemon, typesPokemon, firstType, secondType, dataPokemon.types, dataLegendary['is_legendary'], pokemonCatched);
            }
            
            
            namePokemon.innerText = dataPokemon.name;
            imgPokemon.src = dataPokemon['sprites']['front_default'] || dataPokemon['sprites']['other']['official-artwork']['front_default'];
            // imgPokemon.src = dataPokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default'] || dataPokemon['sprites']['front_default'] || dataPokemon['sprites']['other']['official-artwork']['front_default'];
            imgPokemon.alt = dataPokemon.name;
            idPokemon.innerText = '#' + dataPokemon.id;
            firstType.innerText = dataPokemon.types[0].type.name;
            if (dataPokemon.types.length == 2){
                secondType.innerText = dataPokemon.types[1].type.name;
            }
            pokemonCatched.src = './../src/assets/logoPokebola.png'
            
            sectionCardsContainer.appendChild(cardpokemon);

            return { idPokemon, arrayPokemonsCatched };
        }
    } catch (error) {
        console.log('Error render: ', error);
    }
}