let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let changeHead = document.querySelector(".heading");
const diceEl1 = document.querySelector(".img1");
const diceEl2 = document.querySelector(".img2");

const changeImage = function () {
  diceEl1.src = `images/dice${randomNumber1}.png`;
  diceEl2.src = `images/dice${randomNumber2}.png`;
};

const winner = function () {
  if (randomNumber1 > randomNumber2) {
    changeHead.textContent = `Player 1 Wins`;
  } else if (randomNumber2 > randomNumber1) {
    changeHead.textContent = `Player 2 Wins`;
  } else {
    changeHead.textContent = `ITS A DRAW`;
  }
};
changeImage();
winner();
