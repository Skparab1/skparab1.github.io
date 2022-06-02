"use strict";

var sleep = function sleep(ms) {
  return new Promise(function (res) {
    return setTimeout(res, ms);
  });
};

var counter = 0;
var animator = 1000;
var colorizer = 0;

(function _callee() {
  var disp, disp2, tbutton;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(counter <= 10000)) {
            _context.next = 10;
            break;
          }

          colorizer = counter;

          if (colorizer >= 1000) {
            colorizer = 1000;
          }

          if (counter >= 1) {
            disp = document.getElementById("topdiv");
            disp2 = document.getElementById("topdiv2");

            if (counter <= 1000) {
              disp.style.background = "linear-gradient(rgb(" + 200 * counter / 1000 + ", " + 75 * counter / 1000 + ", 0),rgb(" + 200 * counter / 1000 + ", 0, 0),black)";
            }

            tbutton = document.getElementById("top-button1");
            tbutton.style.top = 200 + animator * 0.5 + "px";
            tbutton.style.left = 0.04 * window.innerWidth + "px";
            tbutton.style.background = "rgba(" + colorizer / 1000 * 255 + "," + colorizer / 1000 * 100 + "," + colorizer / 1000 * 100 + "," + counter / 1000 + ")";
            tbutton.style.border = "2px solid rgba(" + colorizer / 1000 * 255 + "," + colorizer / 1000 * 100 + "," + colorizer / 1000 * 100 + "," + counter / 1000 + ")";
            tbutton = document.getElementById("top-button2");
            tbutton.style.top = 200 + animator + "px";
            tbutton.style.left = 0.28 * window.innerWidth + "px";
            tbutton.style.background = "rgba(" + colorizer / 1000 * 255 + "," + colorizer / 1000 * 0 + "," + colorizer / 1000 * 0 + "," + counter / 1000 + ")";
            tbutton.style.border = "2px solid rgba(" + colorizer / 1000 * 255 + "," + colorizer / 1000 * 0 + "," + colorizer / 1000 * 0 + "," + counter / 1000 + ")";
            tbutton = document.getElementById("top-button3");
            tbutton.style.top = 200 + animator * 2 + "px";
            tbutton.style.left = 0.52 * window.innerWidth + "px";
            tbutton.style.background = "rgba(" + colorizer / 1000 * 255 + "," + colorizer / 1000 * 150 + "," + colorizer / 1000 * 50 + "," + counter / 1000 + ")";
            tbutton.style.border = "2px solid rgba(" + colorizer / 1000 * 255 + "," + colorizer / 1000 * 150 + "," + colorizer / 1000 * 50 + "," + counter / 1000 + ")";
            tbutton = document.getElementById("top-button4");
            tbutton.style.top = 200 + animator * 3 + "px";
            tbutton.style.left = 0.76 * window.innerWidth + "px";
            tbutton.style.background = "rgba(" + colorizer / 1000 * 255 + "," + colorizer / 1000 * 200 + "," + colorizer / 1000 * 0 + "," + counter / 1000 + ")";
            tbutton.style.border = "2px solid rgba(" + colorizer / 1000 * 255 + "," + colorizer / 1000 * 200 + "," + colorizer / 1000 * 0 + "," + counter / 1000 + ")";
          }

          counter += 5;
          animator = 0.99 * animator;
          _context.next = 8;
          return regeneratorRuntime.awrap(sleep(2));

        case 8:
          _context.next = 0;
          break;

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
})();