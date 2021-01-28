const POKESTATS = 'POKESTATS';
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
		
    if (pokemon) {
        pokemon.seen++;
    }
    else {
        statsArray.push({ id: id, seen: 1, caught: 0 });
    }
    setStats(statsArray);
}

export function addCaught(id) {
    const statsArray = getStats();
    const pokemon = findByID(id, statsArray);
    pokemon.caught++;
    setStats(statsArray);
}

// not sure if I ever need to actually parse this data, but have the function here just in case?
// export function parsePokeData() {
//     return JSON.parse(pokemon);
// }