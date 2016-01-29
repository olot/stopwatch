var displayTime = 0;
var interval;
var offset;
var state = 'off';
var timer = document.getElementById('timer');
var startButton = document.getElementById('start');
var stopButton = document.getElementById('stop');
var resetButton = document.getElementById('reset');

function startTimer() {
  if (state == 'off') {
    offset = Date.now();
    interval = setInterval(counter, 1);
    state = 'on';
  }
}

function stopTimer() {
  if (state == 'on') {
    clearInterval(interval);
    state = 'off';
  }
}

function reset() {
  if (state == 'off') {
    clearInterval(interval);
    displayTime = 0;
    timer.innerHTML = "00 m 00 s 000 ms";
  }
}

function timeDiff() {
  var now = Date.now();
  var timeDiff = now - offset;
  offset = now;
  return timeDiff;
}

function timeFormatter(timeInMilliseconds) {
  var time = new Date(timeInMilliseconds);
  var minutes = time.getMinutes().toString();
  var seconds = time.getSeconds().toString();
  var milliseconds = time.getMilliseconds().toString();

  if (minutes.length < 2) {
      minutes = '0' + minutes;
  }


  if (seconds.length < 2) {
      seconds = '0' + seconds;
  }

  while (milliseconds.length < 3) {
      milliseconds = '0' + milliseconds;
  }

  return minutes + ' m ' + seconds + ' s ' + milliseconds + ' ms';
}

function counter() {
  displayTime += timeDiff();
  console.log(displayTime, timeFormatter(displayTime), timer);
  timer.innerHTML = timeFormatter(displayTime);
}

startButton.addEventListener('click', function() {
  startTimer();
});

stopButton.addEventListener('click', function() {
  stopTimer();
});

resetButton.addEventListener('click', function() {
  reset();
});
