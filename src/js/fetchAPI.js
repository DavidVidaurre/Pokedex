let errorModal = false;

export const fetchAPIPokemon = async (valuePokemon) => {
    try{
        const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${valuePokemon.toLowerCase()}`);
        const dataPokemon = await apiResponse.json();
        errorModal = false;
        return {dataPokemon, errorModal}
        // return dataPokemon
    } catch(e){
        errorModal = true;
        modalNotFound.style.display = 'flex';
        console.log('Error fetchAPI: ', e);
    }
}

export const fetchAPISpecies = async (valuePokemon) => {
    try{
        const legendaryResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${valuePokemon.toLowerCase()}`);
        const dataLegendary = await legendaryResponse.json();

        return dataLegendary
    } catch(e){
        console.log('Error fetchAPIPokemon: ', e);
    }
}