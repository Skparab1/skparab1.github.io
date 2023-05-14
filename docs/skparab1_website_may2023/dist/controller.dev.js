"use strict";

var sleep = function sleep(ms) {
  return new Promise(function (res) {
    return setTimeout(res, ms);
  });
}; // i need this lmao


var bgvid = document.getElementById('bgvid');
var mainheading = document.getElementById('mainheading');
var header = document.getElementById('header');
bgvid.play();
var screen1 = document.getElementById('screen1');
var leftbutton = document.getElementById('leftbutton');
var rightbutton = document.getElementById('rightbutton');
var thelogo = document.getElementById('logo-image');
var setlogosrc = false;
var vidpaused = false;
window.scroll({
  top: 0,
  left: 0,
  behavior: "smooth"
});

function openelement(el) {
  var fullblock, i;
  return regeneratorRuntime.async(function openelement$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          el = document.getElementById(el);
          el.style.display = 'block';
          fullblock = document.getElementById('fullblock');
          fullblock.style.display = 'block';
          i = 0;

        case 5:
          if (!(i < 100)) {
            _context.next = 13;
            break;
          }

          el.style.opacity = i / 100;
          fullblock.style.opacity = i / 100 * 0.6;
          i += 1;
          _context.next = 11;
          return regeneratorRuntime.awrap(sleep());

        case 11:
          _context.next = 5;
          break;

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
}

function closeelement(el) {
  var fullblock, i;
  return regeneratorRuntime.async(function closeelement$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          el = document.getElementById(el);
          fullblock = document.getElementById('fullblock');
          i = 0;

        case 3:
          if (!(i < 100)) {
            _context2.next = 11;
            break;
          }

          el.style.opacity = 1 - i / 100;
          fullblock.style.opacity = 0.6 - i / 100 * 0.6;
          i += 1;
          _context2.next = 9;
          return regeneratorRuntime.awrap(sleep());

        case 9:
          _context2.next = 3;
          break;

        case 11:
          el.style.display = 'none';
          fullblock.style.display = 'none';

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  });
}

(function _callee() {
  var ctr, mhpush, buttonpush;
  return regeneratorRuntime.async(function _callee$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          ctr = 0;
          mhpush = 300;
          buttonpush = 400;

        case 3:
          if (!true) {
            _context3.next = 16;
            break;
          }

          if (ctr > 700 && ctr < 1050) {
            bgvid.style.filter = 'blur(' + (ctr - 700) / 25 + 'px)';
          }

          if (ctr < 450) {
            mainheading.style.opacity = ctr / 200 - 0.5;
            mainheading.style.marginTop = mhpush + 'px';
            leftbutton.style.opacity = ctr / 300 - 0.5;
            rightbutton.style.opacity = ctr / 300 - 0.5;
            leftbutton.style.marginTop = buttonpush * 0.7 + 'px';
            rightbutton.style.marginTop = buttonpush + 'px';
          }

          if (ctr < 250) {
            bgvid.style.opacity = ctr / 100 - 0.5;
            header.style.opacity = ctr / 100 - 0.5;
          } else if (window.scrollY < 400) {
            bgvid.style.opacity = (500 - window.scrollY) / 500;
          }

          if (window.scrollY > 500) {
            if (!vidpaused) {
              bgvid.pause();
            }

            if (!setlogosrc) {
              thelogo.src = 'images/logo.gif';
              setlogosrc = true;
            }
          } else {
            if (vidpaused) {
              bgvid.play();
            }
          }

          if (ctr > 450) {
            mainheading.style.opacity = (600 - window.scrollY) / 600;
            leftbutton.style.opacity = (700 - window.scrollY) / 700;
            rightbutton.style.opacity = (700 - window.scrollY) / 700;
          }

          if (mhpush > 0.05) {
            mhpush = 0.99 * mhpush;
          }

          if (mhpush < 50 && buttonpush > 0.05) {
            buttonpush = buttonpush * 0.99;
          }

          _context3.next = 13;
          return regeneratorRuntime.awrap(sleep(2));

        case 13:
          ctr += 1;
          _context3.next = 3;
          break;

        case 16:
        case "end":
          return _context3.stop();
      }
    }
  });
})();