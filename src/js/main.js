const pokColors = {
    normal: ['#DDCCAA', '168, 160, 144'],
    fire: ['#FF7F00', '240, 80, 48'],
    water: ['#B0E2FF', '56, 153, 248'],
    electric: ['#FFD700', '248, 208, 48'],
    grass: ['#99FF66', '120, 200, 80'],
    ice: ['#ADD8E6', '88, 200, 224'],
    fighting: ['#FF6A6A', '160, 80, 56'],
    poison: ['#CC88BB', '176, 88, 160'],
    ground: ['#DEB887', '234, 214, 164'],
    flying: ['#BAAAFF', '152, 168, 240'],
    psychic: ['#FFB5C5', '248, 112, 160'],
    bug: ['#99CC33', '168, 184, 32'],
    rock: ['#CD853F', '184, 160, 88'],
    ghost: ['#778899', '96, 96, 176'],
    dragon: ['#AB82FF', '160, 80, 56'],
    dark: ['#A9A9A9', '122, 88, 72'],
    steel: ['#CCCCCC', '168, 168, 192'],
    fairy: ['#FFB0FF', '231, 159, 231'],
}

const btnVolverArriba = document.getElementById('btnVolverArriba');
const headerContainer = document.getElementById('headerContainer');
const sectionsContainer = document.getElementById('sectionsContainer');

const logoPage = document.getElementById('logo--container');
const sectionCardsContainer = document.getElementById('section-cards--container');
const btnSearch = document.getElementById('btnSearch');
const inputSearch = document.getElementById('inputSearch');
const sectionPagination = document.getElementById('sectionPagination');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const textPagination = document.getElementById('textPagination');
const btnTeamPokemon = document.getElementById('btnTeamPokemon');

// MODAL
const modalContainer = document.getElementById('modalContainer');
const btnCloseModal = document.getElementById('btnCloseModal');
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
const modalNotFound = document.getElementById('modalNotFound');
const btnModalAccept = document.getElementById('btnModalAccept');

// OPTIONS MOBILE
const btnCheckOptions = document.getElementById('btnCheckOptions');
const modalMobileContainer = document.getElementById('modalMobileContainer');
const modalMobile = document.getElementById('modalMobile');
const btnSearchMobile = document.getElementById('btnSearchMobile');
const inputSearchMobile = document.getElementById('inputSearchMobile');
const btnTeamPokemonModal = document.getElementById('btnTeamPokemonModal');

const animationPokeball = document.getElementById('animationPokeball');
const pokeballSound = new Audio();
pokeballSound.src = './../src/assets/pokeballCatchSound.mp3';

// MODAL CATCHED POKEMON
const sectionCatchPokemon = document.getElementById('sectionCatchPokemon');
const modalCatched = document.getElementById('modalCatched');
const btnModalCatchAccept = document.getElementById('btnModalCatchAccept');

// DROP POKEMON
const sectionDropPokemon = document.getElementById('sectionDropPokemon');
const modalDrop = document.getElementById('modalDrop');
const btnModalDropAccept = document.getElementById('btnModalDropAccept');

let errorModal = false;
let openCloseModalMobile = false;

let idPokemonCatch = 0;

// Añadiendo clases a los elementos
function addClasses(cardpokemon, namePokemon, imgPokemonContainer, imgPokemon, idPokemon, typesPokemon, firstType, secondType, dataTypes, isLegendary, pokemonCatched=null){
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
    if(dataTypes.length == 2){
        secondType.style.backgroundColor = `rgb(${pokColors[dataTypes[1].type.name][1]})`;
    }

    if(pokemonCatched != null){
        pokemonCatched.className = 'pokemon-catched';
    }
}

// Estructurando la card
function addCard(cardpokemon, namePokemon, imgPokemonContainer, imgPokemon, idPokemon, typesPokemon, firstType, secondType, dataTypes, isLegendary, pokemonCatched=null){
    // Añadiendo clases
    addClasses(cardpokemon, namePokemon, imgPokemonContainer, imgPokemon, idPokemon, typesPokemon, firstType, secondType, dataTypes, isLegendary, pokemonCatched);
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
    if(pokemonCatched != null){
        cardpokemon.appendChild(pokemonCatched);
    }
}

const fetchAPI = async (valuePokemon) => {
    try{
        const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${valuePokemon.toLowerCase()}`);
        const dataPokemon = await apiResponse.json();
        errorModal = false;
        return dataPokemon
    } catch(e){
        errorModal = true;
        modalNotFound.style.display = 'flex';
        console.log('Error fetchAPI: ', e);
    }
}

const fetchAPISpecies = async (valuePokemon) => {
    try{
        const legendaryResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${valuePokemon.toLowerCase()}`);
        const dataLegendary = await legendaryResponse.json();

        return dataLegendary
    } catch(e){
        console.log('Error fetchAPIPokemon: ', e);
    }
}

const renderCardPokemon = async (valuePokemon) => {
    try {
        const data = await fetchAPI(valuePokemon);
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

            cardpokemon.setAttribute('id', data.id);

            cardpokemon.addEventListener('click', () => {
                idPokemonCatch = data.id;
                if(arrayPokemonsCatched.includes(idPokemonCatch)){
                    sectionCatchPokemon.style.display = 'none';
                    if(goTeamPokemon){
                        sectionDropPokemon.style.display = 'block';
                    } else{
                        sectionDropPokemon.style.display = 'none';
                    }
                } else{
                    sectionCatchPokemon.style.display = 'block';
                    sectionDropPokemon.style.display = 'none';
                }
                modalContainer.style.display = 'flex';
                modalPokemon.style.background = pokColors[data.types[0].type.name][0];
                if(dataLegendary['is_legendary']){
                    modalPokemon.style.background = `linear-gradient(45deg, rgba(${pokColors[data.types[0].type.name][1]},1) 0%, rgba(255,255,255,1) 10%, rgba(${pokColors[data.types[0].type.name][1]},1) 15%, rgba(255,255,255,1) 20%, rgba(${pokColors[data.types[0].type.name][1]},1) 30%, rgba(255,255,255,1) 35%, rgba(${pokColors[data.types[0].type.name][1]},1) 40%, rgba(255,255,255,1) 50%, rgba(${pokColors[data.types[0].type.name][1]},1) 55%, rgba(255,255,255,1) 60%, rgba(${pokColors[data.types[0].type.name][1]},1) 70%, rgba(255,255,255,1) 75%, rgba(${pokColors[data.types[0].type.name][1]},1) 80%, rgba(255,255,255,1) 90%, rgba(${pokColors[data.types[0].type.name][1]},1) 95%, rgba(255,255,255,1) 100%)` 
                }
                idPokemonModal.style.backgroundColor = `rgb(${pokColors[data.types[0].type.name][1]})`;
                idPokemonModal.innerText = '#' + data.id;
                imgPokemonModal.src = data['sprites']['front_default'] || data['sprites']['other']['official-artwork']['front_default'];
                imgPokemonModal.alt = data.name;
                namePokemonModal.style.backgroundColor = `rgb(${pokColors[data.types[0].type.name][1]})`;
                namePokemonModal.innerText = data.name;
                titleGeneral.style.backgroundColor = `rgb(${pokColors[data.types[0].type.name][1]})`;
                titleStats.style.backgroundColor = `rgb(${pokColors[data.types[0].type.name][1]})`;
                titleMoves.style.backgroundColor = `rgb(${pokColors[data.types[0].type.name][1]})`;

                //GENERAL STATS
                abilityOne.innerText = data.abilities[0].ability.name;
                if(data.abilities.length >= 2)
                    abilityTwo.innerText = data.abilities[1].ability.name;
                else
                    statAbilityTwo.style.display = 'none';
                
                weight.innerText = `${data.weight/10} kg`;
                height.innerText = `${data.height/10} m`;

                // BASE STATS
                hp.innerText = `Hp: ${data.stats[0].base_stat}`;
                atk.innerText = `Atk: ${data.stats[1].base_stat}`;
                def.innerText = `Def: ${data.stats[2].base_stat}`;
                atkEsp.innerText = `Esp Atk: ${data.stats[3].base_stat}`;
                defEsp.innerText = `Esp Def: ${data.stats[4].base_stat}`;
                spd.innerText = `Spd: ${data.stats[5].base_stat}`;

                // MOVES
                moveOne.innerText = data.moves[Math.floor((Math.random() * (data.moves.length)))].move.name;
                moveTwo.innerText = data.moves[Math.floor((Math.random() * (data.moves.length )))].move.name;
                moveThree.innerText = data.moves[Math.floor((Math.random() * (data.moves.length)))].move.name;
                moveFour.innerText = data.moves[Math.floor((Math.random() * (data.moves.length)))].move.name;
                moveFive.innerText = data.moves[Math.floor((Math.random() * (data.moves.length)))].move.name;
                moveSix.innerText = data.moves[Math.floor((Math.random() * (data.moves.length)))].move.name;

                disableScroll();
            })
            
            addCard(cardpokemon, namePokemon, imgPokemonContainer, imgPokemon, idPokemon, typesPokemon, firstType, secondType, data.types, dataLegendary['is_legendary']);
            if(arrayPokemonsCatched.includes(data.id)){
                addCard(cardpokemon, namePokemon, imgPokemonContainer, imgPokemon, idPokemon, typesPokemon, firstType, secondType, data.types, dataLegendary['is_legendary'], pokemonCatched);
            }
            
            
            namePokemon.innerText = data.name;
            imgPokemon.src = data['sprites']['front_default'] || data['sprites']['other']['official-artwork']['front_default'];
            // imgPokemon.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'] || data['sprites']['front_default'] || data['sprites']['other']['official-artwork']['front_default'];
            imgPokemon.alt = data.name;
            idPokemon.innerText = '#' + data.id;
            firstType.innerText = data.types[0].type.name;
            if (data.types.length == 2){
                secondType.innerText = data.types[1].type.name;
            }
            pokemonCatched.src = './../src/assets/logoPokebola.png';
            
            sectionCardsContainer.appendChild(cardpokemon);
        }
    } catch (error) {
        console.log('Error render: ', error);
    }
}

function disableScroll(){  
    document.querySelector('body').style.overflowY = 'hidden';
}

function enableScroll(){  
    document.querySelector('body').style.overflowY = 'auto';
}

function listPokemon(index){
    sectionCardsContainer.innerHTML = '';
    let pagInterna = 20 * index;
    
    if(pagInterna == 20){
        textPagination.innerText = '1 de 20';
    } else{
        textPagination.innerText = `${pagInterna - 19} de ${pagInterna}`;
    }

    for(let i = (index - 1)*20; i < pagInterna; i++){
        if(i < 905)
            renderCardPokemon(String(i+1));
    }
    
}

let pag = 1;
pag == 1 ? btnPrev.classList.add('btnDisabled') : null;

const loadPage = () => {
    pag = 1;
    btnPrev.classList.add('btnDisabled')
    listPokemon(1);
};

const loadPokemonsCatched = (arrayIDs) => {
    for(let i = 0; i < arrayIDs.length; i++){
        renderCardPokemon(String(arrayIDs[i]));
    }
}

// CARGANDO PRIMEROS POKEMONS
loadPage();

logoPage.addEventListener('click', () => {
    goTeamPokemon = false;
    sectionPagination.style.display = 'block';
    sectionCardsContainer.style.marginTop = '0';
    searched = false;
    loadPage();
})

// Aparecer el botón para volver a arriba
window.onscroll = () => {
    if (window.scrollY >= 200) {
        btnVolverArriba.style.right = '15px';
    } else {
        btnVolverArriba.style.right = '-50px';
    }
}

btnVolverArriba.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
    })
})

// BOTÓN SIGUIENTE
btnNext.addEventListener('click', (e) => {
    e.preventDefault();
    if(pag < 76){
        pag++;
        listPokemon(pag);
    }

    pag > 1 ? btnPrev.classList.remove('btnDisabled') : null;
    pag == 76 ? btnNext.classList.add('btnDisabled') : null;
})

// BOTÓN ANTERIOR
btnPrev.addEventListener('click', (e) => {
    e.preventDefault();

    if(pag >= 2){
        pag--;
        // sectionCardsContainer.innerHTML = '';
        listPokemon(pag);
    }

    pag == 1 ? btnPrev.classList.add('btnDisabled') : null
    pag < 76 ? btnNext.classList.remove('btnDisabled') : null;
})

let searched = false;

function searchPokemon(searchInput){
    sectionPagination.style.display = 'none';
    sectionCardsContainer.style.marginTop = '50px';
    searched = true;
    if(searchInput.value !== ''){
        sectionCardsContainer.innerHTML = '';
        renderCardPokemon(String(searchInput.value));
    }
}

btnSearch.addEventListener('click', (e) => {
    e.preventDefault();
    searchPokemon(inputSearch);
})

btnSearchMobile.addEventListener('click', (e) => {
    e.preventDefault();
    searchPokemon(inputSearchMobile);

    modalMobile.style.left = '-320px';
    modalMobileContainer.style.left = '-100%'
    btnCheckOptions.checked = false;
    openCloseModalMobile = false;
})

btnCloseModal.addEventListener('click', (e) => {
    e.preventDefault();
    modalContainer.style.display = 'none';
    enableScroll();
})

btnModalAccept.addEventListener('click', (e) => {
    e.preventDefault();
    modalNotFound.style.display = 'none';
})

btnModalCatchAccept.addEventListener('click', (e) => {
    e.preventDefault();
    modalCatched.style.display = 'none';
    arrayPokemonsCatched.push(idPokemonCatch);
    localStorage.setItem('arrayPokemonsCatched', JSON.stringify(arrayPokemonsCatched));
    enableScroll();
    if(!searched){
        listPokemon(pag);
    }
})

btnModalDropAccept.addEventListener('click', (e) => {
    e.preventDefault();
    modalDrop.style.display = 'none';
    modalContainer.style.display = 'none';
    enableScroll();
    arrayPokemonsCatched = arrayPokemonsCatched.filter((item) => item !== idPokemonCatch);
    localStorage.setItem('arrayPokemonsCatched', JSON.stringify(arrayPokemonsCatched));
    teamPokemon()
})

btnCheckOptions.addEventListener('click', () => {
    openCloseModalMobile = !openCloseModalMobile;
    if(openCloseModalMobile){
        modalMobile.style.left = '0';
        modalMobileContainer.style.left = '0';
        disableScroll();
    } else{
        modalMobile.style.left = '-320px';
        modalMobileContainer.style.left = '-100%';
        enableScroll();
    }
})

let arrayPokemonsCatched = [];
localStorage.getItem('arrayPokemonsCatched') && 
    (arrayPokemonsCatched = JSON.parse(localStorage.getItem('arrayPokemonsCatched')));

animationPokeball.addEventListener('click', () => {
    animationPokeball.setAttribute('disabled', 'true');
    btnCloseModal.setAttribute('disabled', 'true');
    pokeballSound.play();

    const intervalAnimation = setInterval(() => {
        animationPokeball.checked = false;
        animationPokeball.removeAttribute('disabled');
        btnCloseModal.removeAttribute('disabled');
        modalContainer.style.display = 'none';
        modalCatched.style.display = 'flex';
        btnModalCatchAccept.setAttribute('disabled', 'true');
        if(animationPokeball.checked === false){
            clearInterval(intervalAnimation);
        }
    }, 3000);

    const intervalActiveButtonCatched = setInterval(() => {
        btnModalCatchAccept.removeAttribute('disabled');

        clearInterval(intervalActiveButtonCatched);
    }, 6700)
})

sectionDropPokemon.addEventListener('click', () => {
    modalDrop.style.display = 'flex';
})

let goTeamPokemon = false;

function teamPokemon(){
    goTeamPokemon = true;
    modalMobile.style.left = '-320px';
    modalMobileContainer.style.left = '-100%'
    btnCheckOptions.checked = false;
    openCloseModalMobile = false;
    sectionPagination.style.display = 'none';
    sectionCardsContainer.style.marginTop = '50px';
    searched = false;
    enableScroll();
    sectionCardsContainer.innerHTML = '';
    arrayPokemonsCatched = arrayPokemonsCatched.sort((a, b) => a - b);
    loadPokemonsCatched(arrayPokemonsCatched);
    
}

btnTeamPokemon.addEventListener('click', teamPokemon);
btnTeamPokemonModal.addEventListener('click', teamPokemon);