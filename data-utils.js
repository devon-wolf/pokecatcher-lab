import pokeData from './data/data.js';

const POKESTATS = 'POKESTATS';
const POKESESSIONS = 'POKESESSIONS';
const emptyStats = [];

export function findByID(id, array) {
    for (let item of array) {
        if (item.id === id) return item;
    }
}

export function findByUnderscoreID(id, array) {
    for (let item of array) {
        if (item._id === id) return item;
    }
}

// functions for interacting with localStorage, pulled almost directly from the shopping cart API

export function getOrSeed(key, seedData) {
    const stringyData = localStorage.getItem(key);

    if (stringyData) {
        return JSON.parse(stringyData);
    }
    else {
        localStorage.setItem(key, JSON.stringify(seedData));
        return seedData;
    }
}

export function getStats() {
    return getOrSeed(POKESTATS, emptyStats);
}

export function setStats(statsArray) {
    localStorage.setItem(POKESTATS, JSON.stringify(statsArray));
}

export function clearStats() {
    localStorage.setItem(POKESTATS, JSON.stringify(emptyStats));
}

export function addSeen(id) {
    const statsArray = getStats();
    const pokemon = findByID(id, statsArray);
    const pokeObj = findByUnderscoreID(id, pokeData);

		
    if (pokemon) {
        pokemon.seen++;
    }
    else {
        statsArray.push({ id: id, name: pokeObj.pokemon, seen: 1, caught: 0 });
    }
    setStats(statsArray);
}

export function addCaught(id) {
    const statsArray = getStats();
    const pokemon = findByID(id, statsArray);
    pokemon.caught++;
    setStats(statsArray);
}

export function setAndUpdateAllTime(statsArray) {
    const allTimeStats = getOrSeed(POKESESSIONS, emptyStats);
    allTimeStats.push(statsArray);
    localStorage.setItem(POKESESSIONS, JSON.stringify(allTimeStats));
}

export function clearAllTime() {
    localStorage.setItem(POKESESSIONS, JSON.stringify(emptyStats));
}