console.log("Welcome to Mother Russia, comrade.");

let bullet = Math.round(Math.random() * 7);
let activeBullet = 1;
let activePlayer = 0;
let realActivePlayer = 1;
let deathCounter = 0;
let living = [true, true, true, true];
const fire = document.getElementById("gun");
const feedback = document.getElementById("feedback");

//functions

function nextPlayer() {
  if (activePlayer < 3) {
    activePlayer++;
  } else {
    activePlayer = 0;
  }
  if (activeBullet === 6) {
    activeBullet = 1;
  } else {
    activeBullet++;
  }
  while (living[activePlayer] === false) {
    if (activePlayer < 3) {
      activePlayer++;
    } else if (activePlayer === 3) {
      activePlayer = 0;
    }
  }
}

function death() {
  document.getElementById(`player${activePlayer}`).textContent = `${
    activePlayer + 1
  }-Dead`;
  deathCounter++;
  living[activePlayer] = false;
}

function load() {
  bullet = Math.round(Math.random() * 7);
}

function shoot() {
  if (deathCounter === 3) {
    feedback.textContent = `Player ${
      activePlayer + 1
    } is the last one standing!`;
  } else {
    if (activeBullet === bullet) {
      feedback.textContent = `BAM! Player ${activePlayer + 1} is dead!`;
      death();
      load();
      nextPlayer();
    } else {
      feedback.textContent = `CLICK! Player ${
        activePlayer + 1
      } gets to live another day!`;
      nextPlayer();
    }
  }
  if (activeBullet === 6) {
    activeBullet = 1;
  }
}

//Button

fire.addEventListener("click", function () {
  shoot();
});
