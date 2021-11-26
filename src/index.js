import { Plotly } from 'plotly.js';

// let TESTER = document.getElementById('tester');
const rand = () => {
    return Math.random();
};
Plotly.plot('chart', [
    {
        y: [rand()],
        type: 'line',
    },
]);
