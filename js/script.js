const HTMLelements = {
  choices: document.querySelectorAll('.choice'),
  score: document.querySelector('#score'),
  result: document.querySelector('#result'),
  restart: document.querySelector('#restart'),
  modal: document.querySelector('.modal'),
};

const scoreBoard = {
  player: 0,
  computer: 0,
};

const choices = document.querySelectorAll('.choice');

const playGame = e => {
  console.log(e.target.id);
};

choices.forEach(choice => choice.addEventListener('click', playGame));
