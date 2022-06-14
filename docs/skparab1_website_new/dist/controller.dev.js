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
var scalefactor = (window.innerHeight / 482 + window.innerwidth / 2048) / 2;

function makehover(id, clr) {
  var test = document.getElementById(id);
  test.addEventListener("mouseenter", function (event) {
    // highlight the mouseenter target
    event.target.style.background = "rgba(0,0,0,0)";
  }, false);
  test.addEventListener("mouseout", function (event) {
    // highlight the mouseenter target
    event.target.style.background = clr;
  }, false);
}

function getPos(el) {
  for (var lx = 0, ly = 0; el != null; lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent) {
    ;
  }

  return ly;
}

(function _callee() {
  var it, bg, disp, disp2, tbutton, txt, disc;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          it = document.getElementById('topheader');
          it.style.left = 2 * window.innerWidth / 5 + "px";
          bg = document.getElementById("background1");
          bg.top = "1000px";
          bg.height = window.innerHeight + 450 - 1000 + "px";

        case 5:
          if (!(counter <= 4000)) {
            _context.next = 17;
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
            disp.style.display = "block";
            disp2 = document.getElementById("topdiv2");

            if (counter <= 1000) {
              disp.style.background = "linear-gradient(rgb(" + 200 * counter / 1000 + ", " + 75 * counter / 1000 + ", 0),rgb(" + 200 * counter / 1000 + ", 0, 0),black)";
            } //btn 1


            tbutton = document.getElementById("top-button1");
            tbutton.style.top = 200 + animator * 0.5 + "px";
            tbutton.style.left = 0.04 * window.innerWidth + "px";
            tbutton.style.background = "rgba(" + colorizer / 1000 * 255 + "," + colorizer / 1000 * 0 + "," + colorizer / 1000 * 0 + "," + counter / 1000 + ")";
            tbutton.style.border = "8px solid rgba(" + colorizer / 1000 * 255 + "," + colorizer / 1000 * 0 + "," + colorizer / 1000 * 0 + "," + counter / 1000 + ")";
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
            tbutton.style.border = "8px solid rgba(" + colorizer / 1000 * 200 + "," + colorizer / 1000 * 200 + "," + colorizer / 1000 * 0 + "," + counter / 1000 + ")";
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
            tbutton.style.border = "8px solid rgba(" + colorizer / 1000 * 0 + "," + colorizer / 1000 * 255 + "," + colorizer / 1000 * 0 + "," + counter / 1000 + ")";
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
            tbutton.style.border = "8px solid rgba(" + colorizer / 1000 * 0 + "," + colorizer / 1000 * 0 + "," + colorizer / 1000 * 255 + "," + counter / 1000 + ")";
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
            tbutton.style.border = "8px solid rgba(" + colorizer / 1000 * 200 + "," + colorizer / 1000 * 100 + "," + colorizer / 1000 * 0 + "," + counter / 1000 + ")";
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
            tbutton.style.border = "8px solid rgba(" + colorizer / 1000 * 200 + "," + colorizer / 1000 * 200 + "," + colorizer / 1000 * 0 + "," + counter / 1000 + ")";
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
            tbutton.style.border = "8px solid rgba(" + colorizer / 1000 * 0 + "," + colorizer / 1000 * 255 + "," + colorizer / 1000 * 0 + "," + counter / 1000 + ")";
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
            tbutton.style.border = "8px solid rgba(" + colorizer / 1000 * 0 + "," + colorizer / 1000 * 0 + "," + colorizer / 1000 * 255 + "," + counter / 1000 + ")";
            txt = document.getElementById("b8d");
            txt.style.top = "610px";
            txt.style.left = 0.77 * window.innerWidth + "px";
            txt.style.width = 0.18 * window.innerWidth + "px";
            disc = document.getElementById('disctext8');
            disc.style.color = "rgba(0,0,0," + fader2 / 1000 + ")";
          }

          counter += 5;
          animator = 0.99 * animator;
          _context.next = 15;
          return regeneratorRuntime.awrap(sleep(2));

        case 15:
          _context.next = 5;
          break;

        case 17:
        case "end":
          return _context.stop();
      }
    }
  });
})();

document.addEventListener("scroll", inView);

function inView() {
  // when about me top is at 0
  // basically when scroll = opener.style.top
  var opener = document.getElementById("opener");
  var opener1 = document.getElementById("openercontent");
  var thetop;
  var cutheight = 800; // this is an estimate

  if (window.scrollY + window.innerHeight >= cutheight) {
    //if has scrolled past 1000 at bottom so basically absoulte scroll = scrolly+windowy
    thetop = cutheight + (window.scrollY + window.innerHeight - cutheight) * 0.30; // 0.4 changable for reveal speed
  } else {
    thetop = cutheight;
  }

  opener1.style.top = thetop + "px";
  var toph;
  console.log(opener1.style.top, window.scrollY);

  if (window.scrollY < thetop) {
    // just hide it before
    console.log('hidden');
    opener.style.display = "none";
  } else if (window.scrollY >= thetop && window.scrollY < thetop + opener1.offsetHeight) {
    // when its steady
    console.log('steady');
    opener.style.display = "block";
    opener.style.top = window.scrollY + "px";
    toph = window.scrollY;
  } else if (window.scrollY >= thetop) {
    // moving but like 1 window height behind
    console.log('behind', thetop);
    opener.style.display = "block";
    opener.style.top = thetop + opener1.offsetHeight + "px";
    toph = thetop + opener1.offsetHeight;
  } else {
    console.log('hidden1');
    opener.style.display = "none";
  }

  if (opener1.offsetHeight < window.innerHeight) {
    opener1.style.height = window.innerHeight + "px";
  }

  var allgproj = document.getElementById("allgprojects");
  var projbox = document.getElementById('projbox');
  var tophp = document.getElementById('toph');
  var pb = document.getElementById('projbox').getBoundingClientRect();
  console.log('hello', toph, projbox.offsetHeight); //allgproj.style.top = (thetop+opener1.offsetHeight)+"px"; //+projbox.offsetHeight+100

  allgproj.style.top = projbox.offsetHeight + 200 + "px";
  allgproj.style.left = 50 - 12 * (2048 / window.innerWidth) / 100 * 100 + "%";
  console.log(50 - 15 * (window.innerWidth / 2048) / 100 * 100 + "%"); //allgproj.style.left = window.innerWidth/2;
  // if (window.scrollY > 1000){
  //   opener1.style.top = (window.innerHeight+450)+"px";
  // } else if (window.scrollY > 100){
  //   opener1.style.top = (window.scrollY*0.5+window.innerHeight-50)+"px";
  // } else {
  //   opener1.style.top = (window.innerHeight)+"px";
  // }

  console.log(window.scrollY);
  var header = document.getElementById("header");
  header.style.top = window.scrollY + "px";
}

makehover("top-button1", 'red');
makehover("top-button2", 'rgb(200,200,0)');
makehover("top-button3", 'rgb(0,255,0)');
makehover("top-button4", 'blue');
makehover("top-button5", 'rgb(200,100,0');
makehover("top-button6", 'rgb(200,200,0)');
makehover("top-button7", 'rgb(0,255,0)');
makehover("top-button8", 'blue');