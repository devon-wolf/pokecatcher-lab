import { generateTableRows } from './render-results-utils.js';
import { clearStats } from '../data-utils.js';

const resetButton = document.getElementById('reset-button');

generateTableRows();

resetButton.addEventListener('click', () => {
    clearStats();
    window.location = '../';
});