const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const historyBtn = document.querySelector(".history");
const stopwatch = document.querySelector(".stopwatch");
const time = document.querySelector(".time");

let countTime;
let minutes = 0;
let seconds = 0;

const handleStart = () => {
  clearInterval(countTime);
  countTime = setInterval(() => {
    seconds++;
    if (seconds < 9) {
      stopwatch.textContent = `${minutes}:0${seconds}`;
    } else if (seconds >= 9 && seconds < 59) {
      stopwatch.textContent = `${minutes}:${seconds}`;
    } else {
      minutes++;
      seconds = 0;
      stopwatch.textContent = `${minutes}:00`;
    }
  }, 100);
};

const handlePause = () => {
  clearInterval(countTime);
};

const handleStop = () => {
  clearInterval(countTime);
  if (stopwatch.textContent !== "0:00") {
    time.style.visibility = "visible";
  }
  time.textContent = `Ostatni czas: ${stopwatch.textContent}`;

  stopwatch.textContent = "0:00";
  timeList.textContent = "";
  seconds = 0;
  minutes = 0;
};

startBtn.addEventListener("click", handleStart);
pauseBtn.addEventListener("click", handlePause);
stopBtn.addEventListener("click", handleStop);
