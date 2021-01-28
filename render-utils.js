import { addCaught, addSeen } from './data-utils.js';
import pokemon from './data/data.js';

const displayDiv = document.getElementById('pokemon-div');
let rounds = 0;

function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * pokemon.length);
    return pokemon[randomIndex];
}

function getThreeUniquePokemon() {
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

function getPokeElements() {
    const dataArray = getThreeUniquePokemon();
    const pokeArray = [];
    for (let pokemon of dataArray) {
        const image = document.createElement('img');
		
        image.src = pokemon.url_image;
        image.classList.add('poke-img');
        image.value = pokemon._id;
        image.alt = pokemon.pokemon;
        image.addEventListener('click', () => {
            addCaught(image.value);
            clearAndFillElements(displayDiv);
        });
        pokeArray.push(image);
    }
    return pokeArray;
}

export function renderPokeElements() {
    const pokeArray = getPokeElements();
    
    for (let image of pokeArray) {
        addSeen(image.value);
        displayDiv.append(image);
    }
}

function clearAndFillElements(element) {
    rounds++;
    element.textContent = '';
    if (rounds >= 10) {
        window.location = './results';
    }
    else {
        renderPokeElements();
    }
}