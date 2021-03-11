console.log("Welcome to Mother Russia, comrade.");

let bullet = Math.round(Math.random() * 6);
let activeBullet = 1;
let activePlayer = 0;
let deathCounter = 0;
let living = [true, true, true, true];
const fire = document.getElementById("gun");
const feedback = document.getElementById("feedback");
const resetBtn = document.getElementById("reset");
//functions

function reset() {
  for (let i = 0; i < living.length; i++) {
    living[i] = true;
    document.getElementById(`player${i}`).textContent = `${i + 1}-Alive`;
  }
  bullet = Math.round(Math.random() * 6);
  activeBullet = 1;
  deathCounter = 0;
  activePlayer = 0;
  feedback.textContent = ` `;
  document.getElementById("player").textContent = `Playing: ${
    activePlayer + 1
  }`;
}

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
  document.getElementById("player").textContent = `Playing: ${
    activePlayer + 1
  }`;
}

function death() {
  document.getElementById(`player${activePlayer}`).textContent = `${
    activePlayer + 1
  }-Dead`;
  deathCounter++;
  living[activePlayer] = false;
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
      nextPlayer();
      bullet = Math.round(Math.random() * 6);
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

//Buttons

fire.addEventListener("click", function () {
  shoot();
});

resetBtn.addEventListener("click", function () {
  reset();
});
