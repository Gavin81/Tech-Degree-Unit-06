const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
let missed = 0;
const startBtn = document.getElementsByClassName('btn__reset');
const overlay = document.querySelector('#overlay');


startBtn.addEventListener('click', () => {
  overlay.style.display = 'hide';
});
