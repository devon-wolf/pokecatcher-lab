import { makePropertyArray } from './munge-utils.js';
import { getStats } from '../data-utils.js';
const pokeStats = getStats();

var ctx1 = document.getElementById('myChart1').getContext('2d');
var ctx2 = document.getElementById('myChart2').getContext('2d');

// eslint-disable-next-line no-unused-vars, no-undef
export var basicChart = new Chart(ctx1, {
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

var mostChosenChart = new Chart(ctx2, {
    type: 'line',
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