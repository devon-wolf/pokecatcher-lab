import { clearStats, getStats } from '../data-utils.js';
import { makePropertyArray } from './munge-utils.js';
import pokemon from '../data/data.js';

const resetButton = document.getElementById('reset-button');
const pokeStats = getStats();

// generateTableRows();

resetButton.addEventListener('click', () => {
    clearStats();
    window.location = '../';
});

var ctx = document.getElementById('myChart').getContext('2d');
// eslint-disable-next-line no-undef
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: makePropertyArray(pokeStats, 'name'),
        datasets: [{
            stack: 'caught',
            label: 'Number Caught',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: makePropertyArray(pokeStats, 'caught')
        },
        {
            stack: 'seen',
            label: 'Number Seen',
            backgroundColor: 'blue',
            borderColor: 'rgb(255, 99, 132)',
            data: makePropertyArray(pokeStats, 'seen')
        }
        ]
    },

    // Configuration options go here
    options: {
        scales: {
            xAxes: [{
                stacked: true
            }]
        }
    }
});