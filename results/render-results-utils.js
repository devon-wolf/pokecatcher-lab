import { getStats, findByUnderscoreID, getAllTime } from '../data-utils.js';
import pokeData from '../data/data.js';

const tableBody = document.getElementById('table-body');
const allTimeTableBody = document.getElementById('all-time-body');
// const tableFooter = document.getElementById('table-footer');


export function generateTableRows() {
    const statsArray = getStats();
    for (let item of statsArray) {
        const pokeObject = findByUnderscoreID(item.id, pokeData);
        
        const tr = document.createElement('tr');
        const tdPoke = document.createElement('td');
        const tdCaught = document.createElement('td');
        const tdSeen = document.createElement('td');

        tdPoke.textContent = pokeObject.pokemon;
        tdPoke.classList.add('pokename');
        tdCaught.textContent = item.caught;
        tdSeen.textContent = item.seen;

        tr.append(tdPoke, tdCaught, tdSeen);
        tableBody.append(tr);
    }
}

export function generateAllTimeTableRows() {
    const sessionsArray = getAllTime();
    let flattenedArray = [];
    for (let session of sessionsArray) {
        flattenedArray.push(...session);
    }

    let filteredArray = [];
    for (let poke of flattenedArray) {
        if (filteredArray.some(filteredPoke => filteredPoke.id === poke.id)) {
            for (let filteredPoke of filteredArray) {
                if (filteredPoke.id === poke.id) {
                    filteredPoke.seen += poke.seen;
                    filteredPoke.caught += poke.caught;
                }
            }
        }
        else {
            filteredArray.push(poke);
        }
    }
    console.log(filteredArray);

    // for (let item of statsArray) {
    //     const pokeObject = findByUnderscoreID(item.id, pokeData);
        
    //     const tr = document.createElement('tr');
    //     const tdPoke = document.createElement('td');
    //     const tdCaught = document.createElement('td');
    //     const tdSeen = document.createElement('td');

    //     tdPoke.textContent = pokeObject.pokemon;
    //     tdPoke.classList.add('pokename');
    //     tdCaught.textContent = item.caught;
    //     tdSeen.textContent = item.seen;

    //     tr.append(tdPoke, tdCaught, tdSeen);
    //     allTimeTableBody.append(tr);
    // }
}