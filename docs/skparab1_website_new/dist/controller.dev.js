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
  var disp, disp2, _tbutton;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(counter <= 4000)) {
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

            _tbutton = document.getElementById("top-button1");
            _tbutton.style.top = 200 + animator * 0.5 + "px";
            _tbutton.style.left = 0.04 * window.innerWidth + "px";
            _tbutton.style.background = "rgba(" + colorizer / 1000 * 255 + "," + colorizer / 1000 * 0 + "," + colorizer / 1000 * 0 + "," + counter / 1000 + ")";
            _tbutton.style.border = "2px solid rgba(" + colorizer / 1000 * 255 + "," + colorizer / 1000 * 0 + "," + colorizer / 1000 * 0 + "," + counter / 1000 + ")";
            _tbutton = document.getElementById("top-button2");
            _tbutton.style.top = 200 + animator + "px";
            _tbutton.style.left = 0.28 * window.innerWidth + "px";
            _tbutton.style.background = "rgba(" + colorizer / 1000 * 200 + "," + colorizer / 1000 * 200 + "," + colorizer / 1000 * 0 + "," + counter / 1000 + ")";
            _tbutton.style.border = "2px solid rgba(" + colorizer / 1000 * 200 + "," + colorizer / 1000 * 200 + "," + colorizer / 1000 * 0 + "," + counter / 1000 + ")";
            _tbutton = document.getElementById("top-button3");
            _tbutton.style.top = 200 + animator * 2 + "px";
            _tbutton.style.left = 0.52 * window.innerWidth + "px";
            _tbutton.style.background = "rgba(" + colorizer / 1000 * 0 + "," + colorizer / 1000 * 255 + "," + colorizer / 1000 * 0 + "," + counter / 1000 + ")";
            _tbutton.style.border = "2px solid rgba(" + colorizer / 1000 * 0 + "," + colorizer / 1000 * 255 + "," + colorizer / 1000 * 0 + "," + counter / 1000 + ")";
            _tbutton = document.getElementById("top-button4");
            _tbutton.style.top = 200 + animator * 3 + "px";
            _tbutton.style.left = 0.76 * window.innerWidth + "px";
            _tbutton.style.background = "rgba(" + colorizer / 1000 * 0 + "," + colorizer / 1000 * 0 + "," + colorizer / 1000 * 255 + "," + counter / 1000 + ")";
            _tbutton.style.border = "2px solid rgba(" + colorizer / 1000 * 0 + "," + colorizer / 1000 * 0 + "," + colorizer / 1000 * 255 + "," + counter / 1000 + ")"; // next row

            _tbutton = document.getElementById("top-button5");
            _tbutton.style.top = 500 + animator * 4 + "px";
            _tbutton.style.left = 0.04 * window.innerWidth + "px";
            _tbutton.style.background = "rgba(" + colorizer / 1000 * 200 + "," + colorizer / 1000 * 100 + "," + colorizer / 1000 * 0 + "," + counter / 1000 + ")";
            _tbutton.style.border = "2px solid rgba(" + colorizer / 1000 * 200 + "," + colorizer / 1000 * 100 + "," + colorizer / 1000 * 0 + "," + counter / 1000 + ")";
            _tbutton = document.getElementById("top-button6");
            _tbutton.style.top = 500 + animator * 5 + "px";
            _tbutton.style.left = 0.28 * window.innerWidth + "px";
            _tbutton.style.background = "rgba(" + colorizer / 1000 * 200 + "," + colorizer / 1000 * 200 + "," + colorizer / 1000 * 0 + "," + counter / 1000 + ")";
            _tbutton.style.border = "2px solid rgba(" + colorizer / 1000 * 200 + "," + colorizer / 1000 * 200 + "," + colorizer / 1000 * 0 + "," + counter / 1000 + ")";
            _tbutton = document.getElementById("top-button7");
            _tbutton.style.top = 500 + animator * 6 + "px";
            _tbutton.style.left = 0.52 * window.innerWidth + "px";
            _tbutton.style.background = "rgba(" + colorizer / 1000 * 0 + "," + colorizer / 1000 * 255 + "," + colorizer / 1000 * 0 + "," + counter / 1000 + ")";
            _tbutton.style.border = "2px solid rgba(" + colorizer / 1000 * 0 + "," + colorizer / 1000 * 255 + "," + colorizer / 1000 * 0 + "," + counter / 1000 + ")";
            _tbutton = document.getElementById("top-button8");
            _tbutton.style.top = 500 + animator * 7 + "px";
            _tbutton.style.left = 0.76 * window.innerWidth + "px";
            _tbutton.style.background = "rgba(" + colorizer / 1000 * 0 + "," + colorizer / 1000 * 0 + "," + colorizer / 1000 * 255 + "," + counter / 1000 + ")";
            _tbutton.style.border = "2px solid rgba(" + colorizer / 1000 * 0 + "," + colorizer / 1000 * 0 + "," + colorizer / 1000 * 255 + "," + counter / 1000 + ")";
          }

          counter += 5;
          animator = 0.99 * animator;
          _context.next = 8;
          return regeneratorRuntime.awrap(sleep(2));

        case 8:
          _context.next = 0;
          break;

        case 10:
          counter = 0;
          animator = 1000;

        case 12:
          if (!(counter < 1000)) {
            _context.next = 28;
            break;
          }

          tbutton = document.getElementById("top-button1");
          tbutton.style.height = (1000 - animator) / 1000 * 150 + 100 + "px";
          tbutton = document.getElementById("top-button2");
          tbutton.style.height = (1000 - animator) / 1000 * 150 + 100 + "px";
          tbutton = document.getElementById("top-button3");
          tbutton.style.height = (1000 - animator) / 1000 * 150 + 100 + "px";
          tbutton = document.getElementById("top-button4");
          tbutton.style.height = (1000 - animator) / 1000 * 150 + 100 + "px";
          console.log('did it' + (1000 - animator) / 1000);
          counter += 1;
          animator = 0.99 * animator;
          _context.next = 26;
          return regeneratorRuntime.awrap(sleep(2));

        case 26:
          _context.next = 12;
          break;

        case 28:
        case "end":
          return _context.stop();
      }
    }
  });
})();