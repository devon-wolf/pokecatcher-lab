// import { generateTableRows } from './render-results-utils.js';
import { clearStats, getStats } from '../data-utils.js';
import { makePropertyArray } from './munge-utils.js';
import pokemon from '../data/data.js';

const resetButton = document.getElementById('reset-button');
const pokeStats = getStats();
const pokeData = 
// generateTableRows();

resetButton.addEventListener('click', () => {
    clearStats();
    window.location = '../';
});

var ctx = document.getElementById('myChart').getContext('2d');
// eslint-disable-next-line no-undef
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: makePropertyArray(pokeStats, 'name'),
        datasets: [{
            label: 'Number Caught',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: makePropertyArray(pokeStats, 'caught')
        }]
    },

    // Configuration options go here
    options: {}
});