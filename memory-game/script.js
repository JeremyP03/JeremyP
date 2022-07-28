const gameContainer = document.getElementById("game");
const cards = document.querySelector("#game")
let cardOne = null;
let cardTwo = null;
let noclick = false;
let matched = 0;
let disableCards

  

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!

// function flipCard({ target: clickedCard}) {
// if (cardOne !== clickedCard && !disableCards) {
//   clickedCard.classList.add("flip");
// }
// }

function handleCardClick(e) {
  if (noclick) return;
  if(e.target.classList.contains("flip")) return;

  let currentCard = e.target;
  currentCard.style.backgroundColor = currentCard.classList[0];

  if (!cardOne || !cardTwo) {
    currentCard.classList.add("flip");
    cardOne = cardOne || currentCard;
    cardTwo = currentCard === cardOne ? null : currentCard;
  }
  if (cardOne && cardTwo){
    noclick = true;
    let img1 = cardOne.className;
    let img2 = cardTwo.className;

    if (img1 === img2) {
      matched += 2;
      cardOne.removeEventListener("click", handleCardClick);
      cardTwo.removeEventListener("click", handleCardClick);
      cardOne = null;
      cardTwo = null;
      noclick = false;
      console.log("match!!!")
    }
    
    else {
      setTimeout(function() {
        cardOne.style.backgroundColor = "";
        cardTwo.style.backgroundColor = "";
        cardOne.classList.remove("flip");
        cardTwo.classList.remove("flip");
        cardOne = null;
        cardTwo = null;
        noclick = false;
      }, 1000);
    }
  }
  if(matched === COLORS.length) alert("game over!!!!!");

cards.addEventListener("click", flipCard)
  
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
}


// when the DOM loads
createDivsForColors(shuffledColors);

/* */