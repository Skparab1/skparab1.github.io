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
var screen2 = document.getElementById('screen2');
var leftbutton = document.getElementById('leftbutton');
var rightbutton = document.getElementById('rightbutton');
var thelogo = document.getElementById('logo-image');
var setlogosrc = false;
var vidpaused = false;
var videodimmed = false;
var begin = "      <div class=\"s2backdrop\" id=\"s2backdrop\">\n<div class=\"title-holder\">\n  <div id=\"s2largeletters\"><h1 class=\"largeletters\">Projects</h1></div>\n  <div id='all' class='catagory' style=\"left: 60%\" onclick=\"changesort('all');\">All</div>\n  <div id='games' class='catagory' style=\"left: 73.3%\" onclick=\"changesort('games');\">Games</div>\n  <div id='educational' class='catagory' style=\"left: 86.6%\" onclick=\"changesort('education');\">Education</div>\n</div>";
var opener = "      <div class=\"project-holder\">\n";
var inkball = "<div id='ink' class=\"project-tile\" onclick=\"openelement('inkball')\">\n<div class=\"project-title\">\n  Inkball\n</div>\n<div class=\"project-image\">\n  <img src=\"images/inkball.png\" alt=\"Image of an inkball game\" width=\"100%\" style=\"border-radius: 10px;\">\n</div>\n<div class=\"project-description\">A modern feature-rich graphics based game of Inkball </div>\n<div class=\"project-description\">Javascript, HTML, and CSS</div>\n</div>";
var pacman = "          <div id='pac' class=\"project-tile\" onclick=\"openelement('pacman')\">\n<div class=\"project-title\">\n  Pacman\n</div>\n<div class=\"project-image\">\n  <img src=\"images/pacman.png\" alt=\"Image of a pacman game\" width=\"100%\" style=\"border-radius: 10px;\">\n</div>\n<div class=\"project-description\">A modern graphics-based game of Pacman </div>\n<div class=\"project-description\">Javascript, HTML, and CSS</div>\n</div>";
var agpbeats = "          <div id='agp' class=\"project-tile\" onclick=\"openelement('agpbeats')\">\n<div class=\"project-title\">\n  Agpbeats\n</div>\n<div class=\"project-image\">\n  <img src=\"images/agpbeats.png\" alt=\"Image of music player website\" width=\"100%\" style=\"border-radius: 10px;\">\n</div>\n<div class=\"project-description\">A feature rich music player website</div>\n<div class=\"project-description\">Javascript, HTML, and CSS</div>\n</div>";
var snake = "<div id='sna' class=\"project-tile\" onclick=\"openelement('snake')\">\n<div class=\"project-title\">\n  Snake\n</div>\n<div class=\"project-image\">\n  <img src=\"images/snake.png\" alt=\"Image of a snake game\" width=\"70%\" style=\"border-radius: 10px;\">\n</div>\n<div class=\"project-description\">A modern graphics based game of snake</div>\n<div class=\"project-description\">Javascript, HTML, and CSS</div>\n</div>\n";
var forum = "          <div id='for' class=\"project-tile\" onclick=\"openelement('forum')\">\n<div class=\"project-title\">\n  Forum messager\n</div>\n<div class=\"project-image\">\n  <img src=\"images/forum.png\" alt=\"Image of a forum\" width=\"100%\" style=\"border-radius: 10px;\">\n</div>\n<div class=\"project-description\">A serverless forum built with a Github database</div>\n<div class=\"project-description\">Javascript, HTML, CSS, Yaml</div>\n</div>";
var traffic = "          <div id='tra' class=\"project-tile\" onclick=\"openelement('traffic')\">\n<div class=\"project-title\">\n  Traffic simulator\n</div>\n<div class=\"project-image\">\n  <img src=\"images/traffic.png\" alt=\"Image of a traffic simulator website\" width=\"100%\" style=\"border-radius: 10px;\">\n</div>\n<div class=\"project-description\">A hackathon winning traffic simulator</div>\n<div class=\"project-description\">Javascript, HTML, CSS</div>\n</div>";
var dashboard = "<div id='das' class=\"project-tile\" onclick=\"openelement('dashboard')\">\n<div class=\"project-title\">\n  New tab page\n</div>\n<div class=\"project-image\">\n  <img src=\"images/dashboard.png\" alt=\"Image of a custom new tab page\" width=\"100%\" style=\"border-radius: 10px;\">\n</div>\n<div class=\"project-description\">A customizable new tab page</div>\n<div class=\"project-description\">Javascript, HTML, and CSS</div>\n</div>";
var portfolio = "<div class=\"project-tile\" onclick=\"openelement('portfolio')\">\n<div class=\"project-title\">\n  Project Portfolio\n</div>\n<div class=\"project-image\">\n  <img src=\"images/portfolio.png\" alt=\"Image of a project portfolio website\" width=\"100%\" style=\"border-radius: 10px;\">\n</div>\n<div class=\"project-description\">A project portfolio website</div>\n<div class=\"project-description\">Javascript, HTML, CSS</div>\n</div>";
var euler = "<div class=\"project-tile\" onclick=\"openelement('euler')\">\n<div class=\"project-title\">\n  Euler calculator\n</div>\n<div class=\"project-image\">\n  <img src=\"images/eulers.png\" alt=\"Image of a euler's method calculator\" width=\"100%\" style=\"border-radius: 10px;\">\n</div>\n<div class=\"project-description\">A calculator for Euler's method</div>\n<div class=\"project-description\">Javascript, HTML, CSS</div>\n</div>";
var binary = " <div class=\"project-tile\" onclick=\"openelement('binarytree')\">\n<div class=\"project-title\">\n  Binary tree maker\n</div>\n<div class=\"project-image\">\n  <img src=\"images/binarytree.png\" alt=\"Image of a binary tree maker\" width=\"100%\" style=\"border-radius: 10px;\">\n</div>\n<div class=\"project-description\">Interactive binary tree maker that displays traversal solutions</div>\n<div class=\"project-description\">Javascript, HTML, and CSS</div>\n</div>";
var sfx = "<div class=\"project-tile\" onclick=\"openelement('sfx')\">\n<div class=\"project-title\">\n  Special effects\n</div>\n<div class=\"project-image\">\n  <img src=\"images/sfx.png\" alt=\"Image of a special effects website\" width=\"100%\" style=\"border-radius: 10px;\">\n</div>\n<div class=\"project-description\">A special effects website featuring parallelax scrolling, 2d animations, and background video.</div>\n<div class=\"project-description\">Javascript, HTML, CSS</div>\n</div>";
var dybdahl = "        <div class=\"project-tile\" onclick=\"openelement('dybdahl')\">\n<div class=\"project-title\">\n  Calc BC site\n</div>\n<div class=\"project-image\">\n  <img src=\"images/dybdahl.png\" alt=\"Image of a math problem site\" width=\"100%\" style=\"border-radius: 10px;\">\n</div>\n<div class=\"project-description\">A website featuring 298 Calc BC problems with instantly accessible solutions.</div>\n<div class=\"project-description\">Javascript, HTML, CSS</div>\n</div>";
var sat = "        <div class=\"project-tile\" onclick=\"openelement('sat')\">\n<div class=\"project-title\">\n  SAT\n</div>\n<div class=\"project-image\">\n  <img src=\"images/sat.png\" alt=\"Image of a live chat website\" width=\"100%\" style=\"border-radius: 10px;\">\n</div>\n<div class=\"project-description\">An anti stress website featuring chat, music, and p2p games</div>\n<div class=\"project-description\">Javascript, HTML, CSS</div>\n</div>";
var urlshortener = "<div class=\"project-tile\" onclick=\"openelement('url')\">\n<div class=\"project-title\">\n  Url shortener\n</div>\n<div class=\"project-image\">\n  <img src=\"images/url.png\" alt=\"Image of a url shortener\" width=\"100%\" style=\"border-radius: 10px;\">\n</div>\n<div class=\"project-description\">A website that shortens long Urls to smaller github.io urls.</div>\n<div class=\"project-description\">Javascript, HTML, CSS</div>\n</div>";
var images = "        <div class=\"project-tile\" onclick=\"openelement('images')\">\n<div class=\"project-title\">\n  Images\n</div>\n<div class=\"project-image\">\n  <img src=\"images/images.png\" alt=\"Image of an image display website\" width=\"100%\" style=\"border-radius: 10px;\">\n</div>\n<div class=\"project-description\">An image showcase website featuring locations and downloadables.</div>\n<div class=\"project-description\">Javascript, HTML, and CSS</div>\n</div>";
var end = "      </div>";

if (window.scrollY > 400) {
  dimvideo();
}

window.scroll({
  top: 0,
  left: 0,
  behavior: "smooth"
});

function openelement(el) {
  var fullblock, pb, gh, i, ps;
  return regeneratorRuntime.async(function openelement$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          el = document.getElementById(el);
          el.style.display = 'block';
          fullblock = document.getElementById('fullblock');
          fullblock.style.display = 'block';
          pb = document.getElementById('pb');
          gh = document.getElementById('gh');
          i = 0;
          ps = 100;

        case 8:
          if (!(i < 100)) {
            _context.next = 18;
            break;
          }

          el.style.opacity = i / 100;
          el.style.marginTop = ps + 'px';
          fullblock.style.opacity = i / 100 * 0.6;
          i += 1;
          ps = ps * 0.95;
          _context.next = 16;
          return regeneratorRuntime.awrap(sleep());

        case 16:
          _context.next = 8;
          break;

        case 18:
        case "end":
          return _context.stop();
      }
    }
  });
}

function dimvideo() {
  var ps;
  return regeneratorRuntime.async(function dimvideo$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          ps = 100;

        case 1:
          if (!(ps > 0.2)) {
            _context2.next = 8;
            break;
          }

          bgvid.style.opacity = ps / 100;
          ps = ps * 0.95;
          _context2.next = 6;
          return regeneratorRuntime.awrap(sleep());

        case 6:
          _context2.next = 1;
          break;

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function closeelement(el) {
  var fullblock, ps, i;
  return regeneratorRuntime.async(function closeelement$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          el = document.getElementById(el);
          fullblock = document.getElementById('fullblock');
          ps = 0.7;
          i = 0;

        case 4:
          if (!(i < 100)) {
            _context3.next = 14;
            break;
          }

          el.style.opacity = 1 - i / 100;
          fullblock.style.opacity = 0.6 - i / 100 * 0.6;
          el.style.marginTop = ps + 'px';
          i += 1;
          ps = ps * 1.05;
          _context3.next = 12;
          return regeneratorRuntime.awrap(sleep());

        case 12:
          _context3.next = 4;
          break;

        case 14:
          el.style.display = 'none';
          fullblock.style.display = 'none';

        case 16:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function fadeslow() {
  var bd, i;
  return regeneratorRuntime.async(function fadeslow$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          bd = document.getElementById('s2backdrop');
          i = 0;

        case 2:
          if (!(i < 100)) {
            _context4.next = 9;
            break;
          }

          bd.style.opacity = (100 - i) / 100;
          i += 1;
          _context4.next = 7;
          return regeneratorRuntime.awrap(sleep());

        case 7:
          _context4.next = 2;
          break;

        case 9:
        case "end":
          return _context4.stop();
      }
    }
  });
}

function appear(el) {
  el.style.display = 'block';
}

function disappear(el) {
  el.style.display = 'none';
}

function highlight(id) {
  var style = getComputedStyle(document.body);
  document.getElementById(id).style.backgroundColor = style.getPropertyValue('--main-bg-dark');
}

function muteall() {
  var style = getComputedStyle(document.body);
  style.getPropertyValue('--main-bg-dark');
  document.getElementById('all').style.backgroundColor = 'black';
  document.getElementById('games').style.backgroundColor = 'black';
  document.getElementById('educational').style.backgroundColor = 'black';
}

function changesort(catagory) {
  console.log('started' + catagory); //await fadeslow();

  var all = [inkball, pacman, agpbeats, snake, forum, traffic, dashboard, portfolio, euler, binary, sfx, dybdahl, sat, urlshortener, images];
  var games = [inkball, pacman, snake, traffic, binary, sat];
  var edu = [euler, binary, dybdahl];
  screen2.innerHTML = '';
  screen2.innerHTML += begin;
  var lst = [];

  if (catagory == 'all') {
    lst = all;
  } else if (catagory == 'games') {
    lst = games;
  } else if (catagory == 'education') {
    lst = edu;
  }

  console.log(catagory);
  var i = 0;

  while (i < lst.length) {
    var dv = document.createElement("div");
    dv.innerHTML = '';
    dv.className = 'project-holder';
    var e = i;

    while (e < i + 3 && e < lst.length) {
      console.log('added ', lst[e]);
      dv.innerHTML += lst[e];
      e += 1;
    }

    i += 3;
    screen2.appendChild(dv);
  }

  screen2.innerHTML += end;
  muteall();

  if (catagory == 'all') {
    highlight('all');
  } else if (catagory == 'games') {
    highlight('games');
  } else if (catagory == 'education') {
    highlight('educational');
  }

  console.log('ended');
}

(function _callee() {
  var ctr, mhpush, buttonpush;
  return regeneratorRuntime.async(function _callee$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          ctr = 0;
          mhpush = 300;
          buttonpush = 400;

        case 3:
          if (!true) {
            _context5.next = 16;
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
              vidpaused = true;
            }

            if (!setlogosrc) {
              thelogo.src = 'images/logo.gif';
              setlogosrc = true;
            }
          } else {
            if (vidpaused) {
              bgvid.play();
              vidpaused = false;
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

          _context5.next = 13;
          return regeneratorRuntime.awrap(sleep(2));

        case 13:
          ctr += 1;
          _context5.next = 3;
          break;

        case 16:
        case "end":
          return _context5.stop();
      }
    }
  });
})();