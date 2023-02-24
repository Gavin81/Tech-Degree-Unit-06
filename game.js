const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase ul');
const phrases = ['Reincarnation', 'Movies', 'Slapstick', 'Respect', 'Money', 'Time and effort'];
let missed = 0;
const startBtn = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');
const hearts = document.querySelectorAll('.tries img');
//const reStart = document.createElement('button');


// Generate a random number and then use that random number as an index to grab
// one of the phrases from the array.
// Using the random number to return an item from the phrases array instead of just
// the random number.

startBtn.addEventListener('click', () => {
  document.getElementById('overlay').style.display = "none";
});


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
  const liLetter = document.querySelectorAll('.letter');
  const liShow = document.querySelectorAll('.show');
  const result = document.querySelector('.title');
  // const reStart = document.createElement('button');
  if ( liLetter.length === liShow.length ){
    overlay.classList.add('win');
    result.textContent = "You've Won";
    overlay.style.display = 'flex';
    startBtn.textContent = 'Re-start Game';
  } else if ( missed > 4 ) {
    overlay.classList.add('lose');
    result.textContent = "Oh Dear, Game Over";
    overlay.style.display = 'flex';
    startBtn.textContent = 'Re-start Game';
    // document.querySelector('#overlay').style.display = 'flex';
  }
}



// Add Event listener To Keyboard
qwerty.addEventListener('click', (event) => {
  if ( event.target.tagName === "BUTTON" ) {
    let button = event.target;
    event.target.classList.add('chosen');

    const letterFound = checkLetter(button);

    if (letterFound === null){
      const hearts = document.querySelectorAll('.tries img');
      hearts[missed].src = 'images/lostHeart.png';
      missed ++;
    }
    checkWin();
  }
});



// EXTRA CREDIT PART
// function resetGame() {

  // // Set the missed var back to 0
  // missed = 0;

  // // Empty the phrase ul element
  // phrase.innerHTML = '';

  // // Call the getRandomPhraseAsArray function to get a new phrase
  // const randomPhrase = getRandomPhraseAsArray(phrases);

  // // Add this new random phrase to the display
  // addPhraseToDisplay(randomPhrase);



  // Loop over the keys, remove the chosen class, enable them again
  // Remove the chosen class
  overlay.addEventListener('click', (event) => {

      if ( event.target.textContent === "Re-start Game" ) {

        // Set the missed var back to 0
        missed = 0;

        // Empty the phrase ul element
        phrase.innerHTML = '';

        // Call the getRandomPhraseAsArray function to get a new phrase
        const randomPhrase = getRandomPhraseAsArray(phrases);

        // Add this new random phrase to the display
        addPhraseToDisplay(randomPhrase);

          for ( i = 0; i <= hearts.length; i++ ){
            hearts[i].src = 'images/liveHeart.png';
            classList.remove('chosen');
          }



      //   const hearts = document.querySelectorAll('.tries img');
      //   hearts[missed].src = 'images/liveHeart.png';
      //   missed ++;
      // }

    } else {
      
    }
  });


   // Set the missed var back to 0
   // Empty the #phrase ul element
   // call the getRandomPhraseAsArray function to get a new phrase
     // Add this new random phrase to the display
     // by calling your addToDisplay function
   // Loop over the keys
     // remove the chosen class
     // enable them again
   // Loop over the images
    // Set the src of each of the images back to liveHeart.png
