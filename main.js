"use strict";

const timer = document.querySelector('.timer');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');

let seconds = 0;
let interval;
let TimeRun = 0;

start.addEventListener('click', () => {
    if (++TimeRun) {
        interval = setInterval(updateTime, 1000); 
       
    }
})

pause.addEventListener('click', () => {
    if (TimeRun) {
        clearTimeout(interval);
    }
});

function updateTime() {
    seconds++;
    timer.textContent = `${seconds.toString().padStart(2, '0')} SECONDS`;
}
