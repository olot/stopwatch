test( "the timer should have an inital value 0", function(assert) {
  var expected = 0;
  var actual = displayTime;
  assert.equal(actual, expected, "Initial value is 0!");
});

test( "After startTimer function is called the displayTime should start increasing", function(assert) {
  var done = assert.async();
  startTimer();
  setTimeout(function() {
    assert.ok(displayTime > 0, "Success!");
    clearInterval(interval);
    displayTime = 0;
    timer.innerHTML = "00 m 00 s 000 ms";
    state = 'off';
    done();
  }, 10);
});

test( "displayTime should stop increasing when stopTimer function is called", function(assert) {
  var done = assert.async();
  startTimer();
  stopTimer();
  var timeNow = displayTime;
  var timeLater;
  setTimeout(function() {
    timeLater = displayTime;
    assert.equal(timeNow, timeLater, "Time is the same!");
    clearInterval(interval);
    displayTime = 0;
    timer.innerHTML = "00 m 00 s 000 ms";
    state = 'off';
    done();
  }, 100);
});

test( "when startTimer is called the date should be recorded in the variable offset", function(assert) {
  startTimer();
  var expected = 'number';
  var actual = typeof offset;
  assert.equal(actual, expected, "Date has been recorded!");
  clearInterval(interval);
  displayTime = 0;
  timer.innerHTML = "00 m 00 s 000 ms";
  state = 'off';
});

test( "the function timeDiff should record the difference between timeNow and offset", function(assert) {
  var done = assert.async();
  startTimer();
  setTimeout(function () {
    var expected = Math.floor((Date.now() - offset)/10);
    var actual = Math.floor(timeDiff()/10);
    assert.equal(actual, expected, "timeDiff records interval!");
    clearInterval(interval);
    displayTime = 0;
    timer.innerHTML = "00 m 00 s 000 ms";
    state = 'off';
    done();
  }, 50);
});

test( "startTimer should continue the counter after having been stoppped by stopTimer", function(assert) {
  var done = assert.async();
  startTimer();
  setTimeout(stopTimer, 50);
  setTimeout(function() {
    var time = displayTime;
    startTimer();
    setTimeout(function() {
      assert.ok(displayTime > time, "Success!");
      clearInterval(interval);
      displayTime = 0;
      timer.innerHTML = "00 m 00 s 000 ms";
      state = 'off';
      done();
    }, 10);
  }, 51);
});

test( "the reset function should make the counter 0", function(assert) {
  var expected = 0;
  reset();
  var actual = displayTime;
  assert.equal(actual, expected, "Value is 0!");
  clearInterval(interval);
  displayTime = 0;
  timer.innerHTML = "00 m 00 s 000 ms";
  state = 'off';
});
