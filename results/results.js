// eslint-disable-next-line no-unused-vars
import { basicChart } from './result-charts.js';
import { getStats, clearStats, clearAllTime, setAllTime } from '../data-utils.js';
import { generateAllTimeTableRows, generateTableRows } from './render-results-utils.js';

const sessionStats = getStats();
// const allTimeStats = setAndUpdateAllTime(sessionStats);
const resetButton = document.getElementById('reset-button');
const resetAllButton = document.getElementById('clear-all-stats');

setAllTime(sessionStats);
generateTableRows();
generateAllTimeTableRows();

resetButton.addEventListener('click', () => {
    clearStats();
    window.location = '../';
});

resetAllButton.addEventListener('click', () => {
    clearAllTime();
});