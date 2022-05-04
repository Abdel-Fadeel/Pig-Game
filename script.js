'use strict';

const newBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');
const rollBtn = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');
const players = document.querySelectorAll('.player');

rollBtn.addEventListener('click', () => {
  const randomRoll = Math.floor(Math.random() * 6 + 1);
  dice.setAttribute('src', `dice-${randomRoll}.png`);

  if (randomRoll === 1) {
    players.forEach(p => {
      p.classList.toggle('player--active');
    });
    return;
  }
  const activePlayer = document.querySelector('.player--active');
  const activePlayerScore = parseFloat(
    activePlayer.querySelector('.current-score').innerText
  );
  activePlayer.querySelector('.current-score').innerText =
    randomRoll + activePlayerScore;
});
