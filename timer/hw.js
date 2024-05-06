'use strict';

let timer;
let seconds = 0;

const displayTimer = document.querySelector('.timer__time-window');
const startBtn = document.querySelector('.timer__timer-button-start');
const pauseBtn = document.querySelector('.timer__timer-button-pause');

function startTimer() {
    timer = setInterval(() => {
      seconds++;
      displayTimer.textContent = `${seconds < 10 ? '0' : ''}${seconds} sec`;
    }, 1000);
    startBtn.disabled = true;
    pauseBtn.disabled = false;
  }
  
  function pauseTimer() {
    clearInterval(timer);
    startBtn.disabled = false;
    pauseBtn.disabled = true;
  }
  
  startBtn.addEventListener('click', startTimer);
  pauseBtn.addEventListener('click', pauseTimer);