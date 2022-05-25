let cards = [];
let sum = 0;
let hasBj = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
//let cardsEl = document.getElementById("cards-el");
let cardsEl = document.querySelector("#cards-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
// let sumEl = document.querySelector(".sum-el"); if class instead of id

let player = {
  name: "Per",
  chips: 155,
  sayHello: function () {
    console.log("hello");
  },
};

player.sayHello();

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard > 10) {
    return 10;
  } else if (randomCard === 1) {
    return 11;
  } else {
    return randomCard;
  }
}

function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  isAlive = true;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Draw another card?";
  } else if (sum === 21) {
    message = "Blackjack! You Win!";
    hasBj = true;
  } else {
    message = "Over 21, You Lose";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBj === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
