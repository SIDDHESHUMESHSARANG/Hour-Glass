let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId; // To store the interval ID
let isRunning = false; // To track if the stopwatch is running

// Get references to the DOM elements
const hoursDisplay = document.getElementById("hours");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const startButton = document.querySelector(".start");
const pauseButton = document.querySelector(".pause");
const resetButton = document.querySelector(".reset");

// Function to update the stopwatch display
function updateDisplay() {
  hoursDisplay.textContent = hours;
  minutesDisplay.textContent = minutes.toString().padStart(2, "0");
  secondsDisplay.textContent = seconds.toString().padStart(2, "0");
}

// Function to start the stopwatch
function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    intervalId = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
      }
      updateDisplay();
    }, 1000);
  }
}

// Function to pause the stopwatch
function pauseStopwatch() {
  clearInterval(intervalId);
  isRunning = false;
}

// Function to reset the stopwatch
function resetStopwatch() {
  pauseStopwatch();
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
}

// Event listeners for the buttons
startButton.addEventListener("click", startStopwatch);
pauseButton.addEventListener("click", pauseStopwatch);
resetButton.addEventListener("click", resetStopwatch);

// Initial display update
updateDisplay();
