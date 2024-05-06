"use strict";

const timer = document.querySelector('.timer');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');

let seconds = 0;
let interval;
let isTimerRunning = 0;

function updateTime() {
    seconds++;
    timer.textContent = `${seconds.toString().padStart(2, '0')} sec`;
}

start.addEventListener('click', () => {
    if (!isTimerRunning) {
        interval = setInterval(updateTime, 1000); 
        isTimerRunning = true;
    }
})

pause.addEventListener('click', () => {
    if (isTimerRunning) {
        clearInterval(interval);
        isTimerRunning = false;
    }
});

