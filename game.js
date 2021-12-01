const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
let missed = 0;
const startBtn = document.querySelector('btn__reset');
const overlay = document.querySelector('#overlay');


btn__reset.addEventListener('click', () => {
  overlay.style.display = hide;
});
