
# **Stopwatch READme**

## The Project


Create tests to be verified by QUnit, starting with the most basic elements of the stopwatch. Watch the test fail, then write *just enough* code to make the test pass. After the test passes refactor the code making sure the test still passes. After the code has been re-factored write another basic test for the next element of the stopwatch, again watch it fail, write code so that it passes, refactor and continue.

Click [here](http://olot.github.io/stopwatch/) to see our project!

## TDD, RGR


RED GREEN REFACTOR!
Use the RGR method, of writing a test and watching it fail RED, writing the code to pass it GREEN and refactor the code to continue.


## QUnit


Write the test code in a specific test JS file and link the QUnit in the HTML file so that the tests in the test folder will show in the browser.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Learn QUnit</title>
  <link rel="stylesheet" href="resources/qunit.css">
</head>
<body>
  <div id="qunit"></div>
  <div id="qunit-fixture"></div>
  <script src="resources/qunit.js"></script>
  <script src="test/tests.js"></script>
</body>
</html>
```



### Quick Tip!

It is very difficult to write tests if you don't know what you are coding. Our solution for this was to create a working stopwatch first, save this code elsewhere and then start from scratch writing basic tests, code and refactoring until we ended up with something resembling our intial code. This time however it was fully tested!  

## References


* [Video with a breakdown of stopwatch code.](https://www.youtube.com/watch?v=jRhB1IG7uAw)
* [QUnit basic setup](http://qunitjs.com/)
* [QUnit assert explanation](https://api.qunitjs.com/category/assert/)
* [TDD and QUnit explanation](https://github.com/dwyl/learn-qunit)
