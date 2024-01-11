let hype1 = document.getElementById('gif-maker');
let homeScore = document.getElementById('home-score');
let guestScore = document.getElementById('guest-score');
let curQuarter = document.getElementById('quarter');

let homePoints = 0;
let guestPoints = 0;
let period = 1;

const startingMinutes = 12;
let timeRemaining = startingMinutes * 60;
let timerInterval;
let countdownTimer = '12:00';
let isTimerRunning = false;

let countdownEl = document.getElementById('time-clock');

countdownEl.innerHTML = countdownTimer;

// CROWD HYPE CONTROLS

function crowd1() {
  hype1.src='gifs/crowd1.gif';
}

function crowd2() {
  hype1.src='gifs/crowd2.gif';
}
 
function clearGif() {
  hype1.src='images/kroger.jpg';
}

// HOME POINTS

function freeThrow() {
  homePoints += 1;
  homeScore.textContent = homePoints;
};

function jumpShot() {
  homePoints += 2;
  homeScore.textContent = homePoints;
};

function threePTR() {
  homePoints += 3;
  homeScore.textContent = homePoints;
};

function zero() {
  homePoints = 0;
  homeScore.textContent = homePoints;
}

// GUEST POINTS

function gFreeThrow() {
  guestPoints += 1;
  guestScore.textContent = guestPoints;
};

function gJumpShot() {
  guestPoints += 2;
  guestScore.textContent = guestPoints;
};

function gThreePTR() {
  guestPoints += 3;
  guestScore.textContent = guestPoints;
};

function gZero() {
  guestPoints = 0;
  guestScore.textContent = guestPoints;
}

// CLOCK MANAGEMENT

function updateCountdown() {
  const minutes = Math.floor(timeRemaining / 60);
  let seconds = timeRemaining % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;
  countdownEl.innerHTML = `${minutes}:${seconds}`;
  timeRemaining--;

  if(timeRemaining < 0) {
    stopTime();
    nextPeriod();
  }
}

function resetTime() {
  stopTime();
  timeRemaining = startingMinutes * 60;
  updateCountdown();
}

function startTime() {
  if(!isTimerRunning) {
    timerInterval = setInterval(updateCountdown, 1000);
    isTimerRunning = true;
  }
}

function stopTime() {
  clearInterval(timerInterval);
  isTimerRunning = false;
}

function quarterChg() {
  period += 1;
  curQuarter.textContent = period;

  if(period === 4) {
    period = 0;
  }
}



