const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase ul');
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
const randomPhrase = getRandomPhraseAsArray(phrases);



const addPhraseToDisplay = (arr) => {
  for ( let i = 0; i < arr.length; i++ ) {
    const li = document.createElement('li');
    li.textContent = arr[i];
    if (li.textContent !== ' '){
      li.className = 'letter';
    } else {
      li.className = 'space';
    }

    phrase.append(li);
  }
}

addPhraseToDisplay(randomPhrase);


// Create checkLetter function
const checkLetter = (button) => {
  let li = document.querySelectorAll('.letter');
  let match = null;
  for ( let i = 0; i < li.length; i++) {
    if (button.textContent === li[i].textContent.toLowerCase()){
      li[i].classList.add("show");
      match = li[i].textContent;
    }
  }
  return match;
}



const checkWin = () => {

}



// Add Event listener To Keyboard
qwerty.addEventListener('click', (event) => {
  if ( event.target.tagName === "BUTTON" ) {
    //console.log(event.target.textContent);
    let button = document.querySelector('event.target');
    button.classList.add('.chosen');
    //const checkLetter = checkLetter('letter');
    const letterFound = checkLetter('event.target');
    //missed++;
  }

});


//const checkLetter = ;
