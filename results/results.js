// eslint-disable-next-line no-unused-vars
import { basicChart } from './result-charts.js';
import { getStats, clearStats, setAndUpdateAllTime } from '../data-utils.js';

const sessionStats = getStats();
const allTimeStats = setAndUpdateAllTime(sessionStats);
const resetButton = document.getElementById('reset-button');

// generateTableRows();

resetButton.addEventListener('click', () => {
    clearStats();
    window.location = '../';
});