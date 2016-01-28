var displayTime = 0;
var offset;
var intervalFunction;
var timeStopped;
var timeElapsed;

function startTimer() {
  offset = timeStopped || Date.now();
  intervalFunction = setInterval(display, 1);
}

function stopTimer() {
  clearInterval(intervalFunction);
}

function timeDifference() {
  var now = Date.now();
  var timeDiff = now - offset;
  offset = now;
  return timeDiff;
}

function timeFormatter(timeInMilliseconds) {
  var time = new Date(timeInMilliseconds);
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  var milliseconds = time.getMilliseconds();
  return minutes + ' :' + seconds + ' :' + milliseconds;
}

var timer = document.getElementById('timer');

function display() {
  displayTime += timeDifference();
  timer.innerHTML = timeFormatter(displayTime);
}
