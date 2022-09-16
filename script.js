const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const historyBtn = document.querySelector(".history");
const stopwatch = document.querySelector(".stopwatch");
const time = document.querySelector(".time");
const timeList = document.querySelector(".time-list");

let countTime;
let minutes = 0;
let seconds = 0;

let timesArr = [];

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
  if (stopwatch.textContent !== "0:00") {
    time.style.visibility = "visible";
    timesArr.push(stopwatch.textContent);
  }

  time.textContent = `Ostatni czas: ${stopwatch.textContent}`;

  clearInterval(countTime);
  stopwatch.textContent = "0:00";
  timeList.textContent = "";
  seconds = 0;
  minutes = 0;
};

const handleReset = () => {
  time.style.visibility = "hidden";
  timesArr = [];

  clearInterval(countTime);
  stopwatch.textContent = "0:00";
  timeList.textContent = "";
  seconds = 0;
  minutes = 0;
};

startBtn.addEventListener("click", handleStart);
pauseBtn.addEventListener("click", handlePause);
stopBtn.addEventListener("click", handleStop);
