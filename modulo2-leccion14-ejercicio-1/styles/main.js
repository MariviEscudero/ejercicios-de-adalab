'use strict';
let counter = 0;
const startCount = document.querySelector('.button');
const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.time');
  time.innerHTML = counter;
};

setInterval(incrementAndShowCounter, 2000);

