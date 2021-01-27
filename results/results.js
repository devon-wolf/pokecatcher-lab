// eslint-disable-next-line no-unused-vars
import { basicChart } from './result-charts.js';
import { clearStats } from '../data-utils.js';

const resetButton = document.getElementById('reset-button');

// generateTableRows();

resetButton.addEventListener('click', () => {
    clearStats();
    window.location = '../';
});




