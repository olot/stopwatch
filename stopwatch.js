var displayTime = 0;
var offset;
var intervalFunction;
var timeStopped;
var timeElapsed;

function startTimer() {
  offset = timeStopped || Date.now();
  intervalFunction = setInterval(display, 1000);
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

function display() {
  displayTime += timeDifference();
  console.log(displayTime);
}
