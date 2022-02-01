const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const phrases = ['Reincarnation', 'Movies', 'Slapstick', 'Respect', 'Money', 'Time and effort'];
let missed = 0;
const startBtn = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');


startBtn.addEventListener('click', () => {
  document.getElementById('overlay').style.display = "none";
});



// Generate a random number and then use that random number as an index to grab
// one of the phrases from the array.
// Using the random number to return an item from the phrases array instead of just
// the random number.

const getRandomPhraseAsArray = (arr) => {
  // Produces a single random number based on the length of the array.
  const whichOne = Math.floor(Math.random() * arr.length);

  // Chooses the single random phrase from the array using whichOne as an index position.
  const thisOne = arr[whichOne];

  // Splits the phrase into an array of letters
  return thisOne.split('');
}
console.log(getRandomPhraseAsArray(phrases));



const addPhraseToDisplay = (arr) => {
  forEach ( let i = 0; i <= arr.length; i++ ) {

  }
}



const checkLetter = (button) => {

}



const checkWin = () => {

}


qwerty.addEventListener('click', () => {

});
