import pokemon from './data/data.js';

export function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * pokemon.length);
    return pokemon[randomIndex];
}

export function getThreeUniquePokemon() {
    let pokeOne = {};
    let pokeTwo = {};
    let pokeThree = {};
    do {
        pokeOne = getRandomPokemon();
        pokeTwo = getRandomPokemon();
        pokeThree = getRandomPokemon();
    } while (pokeOne._id === pokeTwo._id || pokeOne._id === pokeThree._id || pokeTwo._id === pokeThree._id);
	
    return [pokeOne, pokeTwo, pokeThree];
}

export function getPokeElements() {
    const dataArray = getThreeUniquePokemon();
    const pokeArray = [];
    for (let pokemon of dataArray) {
        const image = document.createElement('img');
        image.src = pokemon.url_image;
        image.classList.add('poke-img');
        image.addEventListener('click', () => {
            console.log(`Someone clicked ${pokemon.pokemon}`);
        });
        pokeArray.push(image);
    }
    return pokeArray;
}

export function renderPokeElements() {
    const pokeArray = getPokeElements();
    const displayDiv = document.getElementById('pokemon-div');
    for (let image of pokeArray) {
        displayDiv.append(image);
    }
}