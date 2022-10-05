"use strict";

// hehe
(function _callee2() {
  var counter, sleep, canvas, cvss, el, ctx, width, height, drawline, drawcircle, positify, setoverlay, revealmore, h1, h2, h3, h4, fav, title, nav, head, head1, mainimg, ol3, hc, hol, hol2, htop, ovl1, ovl2, ovl3, ovl4, ovl5, line1, line2, line3, line4, line5, cl, cl2, dimclr, dimclr2, mutelineclr, brightlineclr, scrl, passed, _passed, _passed2, _passed3, _passed4;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          revealmore = function _ref5(x) {
            var l = document.getElementById('more');
            l.style.display = 'block';
            l.style.opacity = 0; // nvm ignore the opacity stuff

            var c = 0;

            (function _callee() {
              return regeneratorRuntime.async(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(c < 100)) {
                        _context.next = 7;
                        break;
                      }

                      l.style.opacity = 0;
                      _context.next = 4;
                      return regeneratorRuntime.awrap(sleep(2));

                    case 4:
                      c += 1;
                      _context.next = 0;
                      break;

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              });
            })();
          };

          setoverlay = function _ref4(ovl, dv) {
            ovl.style.top = dv.offsetTop + 'px';
            ovl.style.left = dv.offsetLeft + 'px';
            ovl.style.height = dv.offsetHeight + 'px';
            ovl.style.width = dv.offsetWidth + 'px';
          };

          positify = function _ref3(x) {
            if (x >= 0) {
              return x;
            } else {
              return 0;
            }
          };

          drawcircle = function _ref2(x, y, rad, circlr) {
            ctx.beginPath();
            ctx.strokeStyle = circlr;
            ctx.arc(x, y, rad, 0, 2 * Math.PI); //-((height)/(boardSize+2)/2)

            ctx.stroke();
          };

          drawline = function _ref(x, y, x1, y1, clr) {
            ctx.beginPath();
            ctx.lineWidth = 4;
            ctx.strokeStyle = clr;
            ctx.fillStyle = clr;
            ctx.moveTo(x, y);
            ctx.lineTo(x1, y1);
            ctx.stroke();
          };

          counter = -50;

          sleep = function sleep(ms) {
            return new Promise(function (res) {
              return setTimeout(res, ms);
            });
          }; // canvas stuff


          canvas = document.querySelector('canvas');
          cvss = document.getElementById('canvas');
          el = document.getElementById('canvas');
          ctx = canvas.getContext('2d');
          width = canvas.width = window.innerWidth * 0.99;
          height = canvas.height = window.innerHeight * 2;
          // def all teh consts
          h1 = document.getElementById('header1');
          h2 = document.getElementById('header2');
          h3 = document.getElementById('header3');
          h4 = document.getElementById('header4');
          fav = document.getElementById('fav');
          title = document.getElementById('title');
          nav = document.getElementById('nav1');
          head = document.getElementById('head');
          head1 = document.getElementById('head1');
          mainimg = document.getElementById('mainimg');
          ol3 = document.getElementById('overlay3');
          hc = document.getElementById('hcontainer');
          hol = document.getElementById('headoverlay');
          hol.style.top = head.offsetTop + 'px';
          hol.style.left = head.offsetLeft + 'px';
          hol.style.height = head.offsetHeight + 'px';
          hol.style.width = head.offsetWidth + 'px';
          hol2 = document.getElementById('headoverlay2');
          hol2.style.top = head.offsetTop + 'px';
          hol2.style.left = head.offsetLeft + 'px';
          hol2.style.height = head.offsetHeight + 'px';
          hol2.style.width = head.offsetWidth + 'px';
          htop = head.offsetTop; // for cool effect

          ovl1 = document.getElementById('ovl1');
          ovl2 = document.getElementById('ovl2');
          ovl3 = document.getElementById('ovl3');
          ovl4 = document.getElementById('ovl4');
          ovl5 = document.getElementById('ovl5');
          line1 = document.getElementById('line1');
          line2 = document.getElementById('line2');
          line3 = document.getElementById('line3');
          line4 = document.getElementById('line4');
          line5 = document.getElementById('line5'); // setup

          setoverlay(ovl1, line1);
          setoverlay(ovl2, line2);
          setoverlay(ovl3, line3);
          setoverlay(ovl4, line4);
          setoverlay(ovl5, line5); // canvas

          ctx.fillStyle = 'white'; // this is the base
          //ctx.fillRect(ps.offsetLeft,ps.offsetTop,ps.offsetWidth,ps.offsetHeight);

          buttonglower = 0;
          linemaker = 0;
          linemaker2 = 0;
          savelmaker1 = 0;
          brightner1 = 0;
          brightner2 = 0;
          brightner3 = 0;
          brightner4 = 0;
          brightner5 = 0;
          brightner6 = 0;
          brightner7 = 0;
          brightner8 = 0;

        case 64:
          if (!true) {
            _context2.next = 110;
            break;
          }

          if (!(counter <= 100)) {
            _context2.next = 89;
            break;
          }

          cl = counter / 100 * 255;
          cl2 = cl * 2 - 255 / 2;
          dimclr = 'rgb(' + cl + ',' + cl + ',' + cl + ')';
          dimclr2 = 'rgb(' + cl2 + ',' + cl2 + ',' + cl2 + ')'; // header fade

          h1.style.color = dimclr;
          h2.style.color = dimclr;
          h3.style.color = dimclr;
          h4.style.color = dimclr;
          fav.style.opacity = cl / 255;
          title.style.color = dimclr;
          nav.style.borderColor = dimclr;
          mainimg.style.opacity = 0;
          head.style.color = 'rgb(' + cl + ',' + cl + ',' + cl + ')';
          ol3.style.opacity = 1 - cl / 255;
          head1.style.color = dimclr2;
          hol.style.width = head.offsetWidth * (counter / 100) + 'px';
          hol2.style.width = head.offsetWidth * (1 - counter / 100) + 'px';
          hol2.style.left = head.offsetWidth * (counter / 100) + 'px'; //hol.style.backgroundImage = 'linear-gradient(to right,rgba(0,0,0,'+(1-(counter/100))+'),rgba(0,0,0,'+(1-(counter/1000))+'))';

          _context2.next = 86;
          return regeneratorRuntime.awrap(sleep(2));

        case 86:
          if (counter <= 100) {
            counter = counter + (105 - counter) / 100;
          }

          _context2.next = 92;
          break;

        case 89:
          counter += 1;
          _context2.next = 92;
          return regeneratorRuntime.awrap(sleep(2));

        case 92:
          hol2.style.left = head.offsetWidth * (counter / 100) + 'px';
          hol2.style.width = head.offsetWidth - head.offsetWidth * (counter / 100) + 'px';
          mutelineclr = 'rgb(50,50,50)';
          brightlineclr = 'rgb(100,100,100)'; // basically glow the buttons sequentially
          // so we have the button
          // bt1
          // the intensity is distance from mid = 50
          // upgrade the button stuff

          buttonglower += 0.5;

          if (buttonglower >= 500) {
            buttonglower = 0;
          } // ok this is the cool effect


          scrl = window.scrollY + 6 * window.innerHeight / 7; // the starting point for this
          //console.log(window.scrollY);

          if (scrl > line1.offsetTop) {
            passed = (scrl - line1.offsetTop) * 5;
            ovl1.style.height = line1.offsetHeight + 'px';
            ovl1.style.left = passed + line1.offsetLeft + 'px';
            ovl1.style.width = line1.offsetWidth - (passed + line1.offsetLeft) + 'px';
          }

          scrl = window.scrollY + 5 * window.innerHeight / 7;

          if (scrl > line2.offsetTop) {
            _passed = (scrl - line2.offsetTop) * 5;
            ovl2.style.height = line2.offsetHeight + 'px';
            ovl2.style.left = _passed + line2.offsetLeft + 'px';
            ovl2.style.width = line2.offsetWidth - (_passed + line2.offsetLeft) + 'px';
          }

          scrl = window.scrollY + 4 * window.innerHeight / 7;

          if (scrl > line3.offsetTop) {
            _passed2 = (scrl - line3.offsetTop) * 5;
            ovl3.style.height = line3.offsetHeight + 'px';
            ovl3.style.left = _passed2 + line3.offsetLeft + 'px';
            ovl3.style.width = line3.offsetWidth - (_passed2 + line3.offsetLeft) + 'px';
          }

          scrl = window.scrollY + 3 * window.innerHeight / 7;

          if (scrl > line4.offsetTop) {
            _passed3 = (scrl - line4.offsetTop) * 5;
            ovl4.style.height = line4.offsetHeight + 'px';
            ovl4.style.left = _passed3 + line4.offsetLeft + 'px';
            ovl4.style.width = line4.offsetWidth - (_passed3 + line4.offsetLeft) + 'px';
          }

          scrl = window.scrollY + 2 * window.innerHeight / 7;

          if (scrl > line5.offsetTop) {
            _passed4 = (scrl - line5.offsetTop) * 5;
            ovl5.style.height = line5.offsetHeight + 'px';
            ovl5.style.left = _passed4 + line5.offsetLeft + 'px';
            ovl5.style.width = line5.offsetWidth - (_passed4 + line5.offsetLeft) + 'px';
          } // window.scrollTo(0,window.scrollY+1.5);


          _context2.next = 64;
          break;

        case 110:
        case "end":
          return _context2.stop();
      }
    }
  });
})();