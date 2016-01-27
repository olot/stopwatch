var displayTime = 0;
var offset;
var timeStopped;
var timeElapsed;

function startTimer() {
  offset = Date.now();
  setInterval(display, 10);
}

function stopTimer() {

}

function timeDifference() {
  var now = Date.now();
  var timeDiff = now - offset;
  return timeDiff;
}

function display() {
  var timeDiff = timeDifference();
  displayTime =+ timeDiff;
  console.log(displayTime);
}
