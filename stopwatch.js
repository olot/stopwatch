var displayTime = 0;
var interval;
var offset;
var timer = document.getElementById('timer');
var startButton = document.getElementById('start');
var stopButton = document.getElementById('stop');

function startTimer() {
  offset = Date.now();
  interval = setInterval(counter, 1);
}

function stopTimer() {
  clearInterval(interval);
}

function timeDiff() {
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

function counter() {
  displayTime += timeDiff();
  console.log(displayTime, timeFormatter(displayTime), timer);
  timer.innerHTML = timeFormatter(displayTime);
}

function reset() {
  clearInterval(interval);
  displayTime = 0;
}

startButton.addEventListener('click', function() {
  startTimer();
});

stopButton.addEventListener('click', function() {
  stopTimer();
});
