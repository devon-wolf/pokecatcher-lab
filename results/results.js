import { clearStats, getStats } from '../data-utils.js';
import { makePropertyArray } from './munge-utils.js';
// import pokemon from '../data/data.js';

const resetButton = document.getElementById('reset-button');
const pokeStats = getStats();

// generateTableRows();

resetButton.addEventListener('click', () => {
    clearStats();
    window.location = '../';
});


var ctx = document.getElementById('myChart').getContext('2d');

// eslint-disable-next-line no-unused-vars, no-undef
var chart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: makePropertyArray(pokeStats, 'name'),
        datasets: [
            {
                label: 'Number Caught',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: makePropertyArray(pokeStats, 'caught')
            },
            {
                label: 'Number Seen',
                backgroundColor: 'blue',
                borderColor: 'rgb(255, 99, 132)',
                data: makePropertyArray(pokeStats, 'seen')
            }
        ]
    },

    options: {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                        stepSize: 1
                    }
                }
            ],
            xAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                        stepSize: 1
                    }
                }
            ]
        }
    }
});