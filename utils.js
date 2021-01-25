import pokemon from './data/data.js';

export function parsePokeData() {
    return JSON.parse(pokemon);
}

export function getStats() {}
export function setStats() {}

export function findByUnderscoreID(id, array) {
    for (let item of array) {
        if (item._id === id) return item;
        else return null;
    }
}