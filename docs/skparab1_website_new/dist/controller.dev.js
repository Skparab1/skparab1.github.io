"use strict";

var sleep = function sleep(ms) {
  return new Promise(function (res) {
    return setTimeout(res, ms);
  });
};

var counter = 0;
var animator = 1000;
var colorizer = 0;
var fader = 0;
var fader2 = 0;

(function _callee() {
  var it, disp, disp2, tbutton, txt, disc;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          it = document.getElementById('topheader');
          it.style.left = 2 * window.innerWidth / 5 + "px";

        case 2:
          if (!(counter <= 4000)) {
            _context.next = 14;
            break;
          }

          colorizer = counter;

          if (colorizer >= 1000) {
            colorizer = 1000;
          }

          if (counter >= 2500) {
            fader = counter - 2500;
          }

          if (counter >= 3000) {
            fader2 = counter - 3000;
          }

          if (counter >= 1) {
            disp = document.getElementById("topdiv");
            disp2 = document.getElementById("topdiv2");

            if (counter <= 1000) {
              disp.style.background = "linear-gradient(rgb(" + 200 * counter / 1000 + ", " + 75 * counter / 1000 + ", 0),rgb(" + 200 * counter / 1000 + ", 0, 0),black)";
            } //btn 1


            tbutton = document.getElementById("top-button1");
            tbutton.style.top = 200 + animator * 0.5 + "px";
            tbutton.style.left = 0.04 * window.innerWidth + "px";
            tbutton.style.background = "rgba(" + colorizer / 1000 * 255 + "," + colorizer / 1000 * 0 + "," + colorizer / 1000 * 0 + "," + counter / 1000 + ")";
            tbutton.style.border = "2px solid rgba(" + colorizer / 1000 * 255 + "," + colorizer / 1000 * 0 + "," + colorizer / 1000 * 0 + "," + counter / 1000 + ")";
            txt = document.getElementById("b1d");
            txt.style.top = "305px";
            txt.style.left = 0.05 * window.innerWidth + "px";
            txt.style.width = 0.18 * window.innerWidth + "px";
            disc = document.getElementById('disctext1');
            disc.style.color = "rgba(0,0,0," + fader / 1000 + ")"; // btn 2

            tbutton = document.getElementById("top-button2");
            tbutton.style.top = 200 + animator + "px";
            tbutton.style.left = 0.28 * window.innerWidth + "px";
            tbutton.style.background = "rgba(" + colorizer / 1000 * 200 + "," + colorizer / 1000 * 200 + "," + colorizer / 1000 * 0 + "," + counter / 1000 + ")";
            tbutton.style.border = "2px solid rgba(" + colorizer / 1000 * 200 + "," + colorizer / 1000 * 200 + "," + colorizer / 1000 * 0 + "," + counter / 1000 + ")";
            txt = document.getElementById("b2d");
            txt.style.top = "305px";
            txt.style.left = 0.29 * window.innerWidth + "px";
            txt.style.width = 0.18 * window.innerWidth + "px";
            disc = document.getElementById('disctext2');
            disc.style.color = "rgba(0,0,0," + fader / 1000 + ")"; // btn 3

            tbutton = document.getElementById("top-button3");
            tbutton.style.top = 200 + animator * 2 + "px";
            tbutton.style.left = 0.52 * window.innerWidth + "px";
            tbutton.style.background = "rgba(" + colorizer / 1000 * 0 + "," + colorizer / 1000 * 255 + "," + colorizer / 1000 * 0 + "," + counter / 1000 + ")";
            tbutton.style.border = "2px solid rgba(" + colorizer / 1000 * 0 + "," + colorizer / 1000 * 255 + "," + colorizer / 1000 * 0 + "," + counter / 1000 + ")";
            txt = document.getElementById("b3d");
            txt.style.top = "305px";
            txt.style.left = 0.53 * window.innerWidth + "px";
            txt.style.width = 0.18 * window.innerWidth + "px";
            disc = document.getElementById('disctext3');
            disc.style.color = "rgba(0,0,0," + fader / 1000 + ")"; // btn 4

            tbutton = document.getElementById("top-button4");
            tbutton.style.top = 200 + animator * 3 + "px";
            tbutton.style.left = 0.76 * window.innerWidth + "px";
            tbutton.style.background = "rgba(" + colorizer / 1000 * 0 + "," + colorizer / 1000 * 0 + "," + colorizer / 1000 * 255 + "," + counter / 1000 + ")";
            tbutton.style.border = "2px solid rgba(" + colorizer / 1000 * 0 + "," + colorizer / 1000 * 0 + "," + colorizer / 1000 * 255 + "," + counter / 1000 + ")";
            txt = document.getElementById("b4d");
            txt.style.top = "305px";
            txt.style.left = 0.77 * window.innerWidth + "px";
            txt.style.width = 0.18 * window.innerWidth + "px";
            disc = document.getElementById('disctext4');
            disc.style.color = "rgba(0,0,0," + fader / 1000 + ")"; // next row
            // btn 5

            tbutton = document.getElementById("top-button5");
            tbutton.style.top = 500 + animator * 4 + "px";
            tbutton.style.left = 0.04 * window.innerWidth + "px";
            tbutton.style.background = "rgba(" + colorizer / 1000 * 200 + "," + colorizer / 1000 * 100 + "," + colorizer / 1000 * 0 + "," + counter / 1000 + ")";
            tbutton.style.border = "2px solid rgba(" + colorizer / 1000 * 200 + "," + colorizer / 1000 * 100 + "," + colorizer / 1000 * 0 + "," + counter / 1000 + ")";
            txt = document.getElementById("b5d");
            txt.style.top = "610px";
            txt.style.left = 0.05 * window.innerWidth + "px";
            txt.style.width = 0.18 * window.innerWidth + "px";
            disc = document.getElementById('disctext5');
            disc.style.color = "rgba(0,0,0," + fader2 / 1000 + ")"; // btn 6

            tbutton = document.getElementById("top-button6");
            tbutton.style.top = 500 + animator * 5 + "px";
            tbutton.style.left = 0.28 * window.innerWidth + "px";
            tbutton.style.background = "rgba(" + colorizer / 1000 * 200 + "," + colorizer / 1000 * 200 + "," + colorizer / 1000 * 0 + "," + counter / 1000 + ")";
            tbutton.style.border = "2px solid rgba(" + colorizer / 1000 * 200 + "," + colorizer / 1000 * 200 + "," + colorizer / 1000 * 0 + "," + counter / 1000 + ")";
            txt = document.getElementById("b6d");
            txt.style.top = "610px";
            txt.style.left = 0.29 * window.innerWidth + "px";
            txt.style.width = 0.18 * window.innerWidth + "px";
            disc = document.getElementById('disctext6');
            disc.style.color = "rgba(0,0,0," + fader2 / 1000 + ")"; // btn 7

            tbutton = document.getElementById("top-button7");
            tbutton.style.top = 500 + animator * 6 + "px";
            tbutton.style.left = 0.52 * window.innerWidth + "px";
            tbutton.style.background = "rgba(" + colorizer / 1000 * 0 + "," + colorizer / 1000 * 255 + "," + colorizer / 1000 * 0 + "," + counter / 1000 + ")";
            tbutton.style.border = "2px solid rgba(" + colorizer / 1000 * 0 + "," + colorizer / 1000 * 255 + "," + colorizer / 1000 * 0 + "," + counter / 1000 + ")";
            txt = document.getElementById("b7d");
            txt.style.top = "610px";
            txt.style.left = 0.53 * window.innerWidth + "px";
            txt.style.width = 0.18 * window.innerWidth + "px";
            disc = document.getElementById('disctext7');
            disc.style.color = "rgba(0,0,0," + fader2 / 1000 + ")"; // btn 8

            tbutton = document.getElementById("top-button8");
            tbutton.style.top = 500 + animator * 7 + "px";
            tbutton.style.left = 0.76 * window.innerWidth + "px";
            tbutton.style.background = "rgba(" + colorizer / 1000 * 0 + "," + colorizer / 1000 * 0 + "," + colorizer / 1000 * 255 + "," + counter / 1000 + ")";
            tbutton.style.border = "2px solid rgba(" + colorizer / 1000 * 0 + "," + colorizer / 1000 * 0 + "," + colorizer / 1000 * 255 + "," + counter / 1000 + ")";
            txt = document.getElementById("b8d");
            txt.style.top = "610px";
            txt.style.left = 0.77 * window.innerWidth + "px";
            txt.style.width = 0.18 * window.innerWidth + "px";
            disc = document.getElementById('disctext8');
            disc.style.color = "rgba(0,0,0," + fader2 / 1000 + ")";
          }

          counter += 5;
          animator = 0.99 * animator;
          _context.next = 12;
          return regeneratorRuntime.awrap(sleep(2));

        case 12:
          _context.next = 2;
          break;

        case 14:
        case "end":
          return _context.stop();
      }
    }
  });
})();

document.addEventListener("scroll", inView);

function inView() {
  //if (window.scrollY <= 1)
  var opener = document.getElementById("opener");
  opener.style.top = window.innerHeight + 100 + "px";
  opener.style.height = window.scrollY + "px";
  var opener1 = document.getElementById("openercontent");

  if (window.scrollY > 100) {
    opener1.style.top = window.scrollY + window.innerHeight - 100 + "px";
  } else {
    opener1.style.top = window.innerHeight + "px";
  }

  var header = document.getElementById("header");
  header.style.top = window.scrollY + "px";
}