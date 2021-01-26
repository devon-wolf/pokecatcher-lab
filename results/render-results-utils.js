import { getStats, findByUnderscoreID } from '../data-utils.js';
import pokeData from '../data/data.js';

const tableBody = document.getElementById('table-body');
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
