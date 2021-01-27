/* eslint-disable no-undef */
import { getFrequencyAsPercent, makePropertyArray } from './munge-utils.js';
import { findByUnderscoreID, getStats } from '../data-utils.js';
import pokeData from '../data/data.js';

const getCaughtPokemon = () => {
    const caughtArray = [];
    for (let poke of pokeStats) {
        if (poke.caught) caughtArray.push(poke);
    }
    return caughtArray;
};

const chosenFrequency = () => {
    let frequencyArray = [];
    for (let poke of pokeStats) {
        frequencyArray.push(getFrequencyAsPercent(poke.caught, poke.seen));
    }
    return frequencyArray;
};

const getPokeWeight = () => {
    let weightArray = [];
    for (let poke of caughtPokemon) {
        const pokeObj = findByUnderscoreID(poke.id, pokeData);
        weightArray.push(pokeObj.weight);
    }
    return weightArray;
};

const getWeightObjects = () => {
    const weightObjectArray = [];
    for (let poke of caughtPokemon) {
        const pokeObj = findByUnderscoreID(poke.id, pokeData);
        weightObjectArray.push({ 
            id: poke.id, 
            name: poke.name, 
            weight: pokeObj.weight, 
            caught: poke.caught, 
            combinedWeight: pokeObj.weight * poke.caught 
        });
    }
    return weightObjectArray;
};

const pokeStats = getStats();
const caughtPokemon = getCaughtPokemon();

var ctx1 = document.getElementById('myChart1').getContext('2d');
var ctx2 = document.getElementById('myChart2').getContext('2d');
var ctx3 = document.getElementById('myChart3').getContext('2d');

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

export var mostChosenChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: makePropertyArray(pokeStats, 'name'),
        datasets: [
            {
                label: 'How Much You Seem to Like This Pokemon',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: chosenFrequency()
            },
        ]
    },

    options: {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                        stepSize: 25
                    },
                }
            ],
        }
    }
});

export var pokeWeightChart = new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: makePropertyArray(caughtPokemon, 'name'),
        datasets: [
            {
                label: 'Total Weight by Pokemon Type',
                backgroundColor: [
                    'blue',
                    'pink',
                    'red',
                    'orange',
                    'green',
                    'yellow',
                    'purple',
                    'skyblue',
                    'tomato',
                    'lightgreen',
                ],
                borderColor: 'rgb(255, 99, 132)',
                data: makePropertyArray(getWeightObjects(), 'combinedWeight')
            },
            {
                label: 'Pokemon Weight',
                backgroundColor: [
                    'blue',
                    'pink',
                    'red',
                    'orange',
                    'green',
                    'yellow',
                    'purple',
                    'skyblue',
                    'tomato',
                    'lightgreen',
                ],
                borderColor: 'rgb(255, 99, 132)',
                data: getPokeWeight()
            }
        ]
    },

    options: {}
});