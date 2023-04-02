var second = 0,
  minute = 0,
  hour = 0,
  day = 100;

var displaySeconds = document.getElementById("second");
var displayMinutes = document.getElementById("minute");
var displayHours = document.getElementById("hour");
var displayDays = document.getElementById("day");

function displayTime() {
  second < 10
    ? (displaySeconds.textContent = "0" + second.toString())
    : (displaySeconds.textContent = second);
  minute < 10
    ? (displayMinutes.textContent = "0" + minute.toString())
    : (displayMinutes.textContent = minute);
  hour < 10
    ? (displayHours.textContent = "0" + hour.toString())
    : (displayHours.textContent = hour);
  day < 10
    ? (displayDays.textContent = "0" + day.toString())
    : (displayDays.textContent = day);
}

function Timer() {
  displayTime();
  second--;
  if (second < 0) {
    second = 59;
    minute--;
  }
  if (minute < 0) {
    minute = 59;
    hour--;
  }
  if (hour < 0) {
    hour = 23;
    day--;
  }
}

const timeInterval = setInterval(() => {
  Timer();
}, 1000);
