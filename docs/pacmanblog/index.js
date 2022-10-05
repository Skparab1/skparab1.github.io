// hehe

(async () => {
  let counter = -50;
  const sleep = ms => new Promise(res => setTimeout(res, ms));


  // canvas stuff
  const canvas = document.querySelector('canvas');
  const cvss = document.getElementById('canvas');
  const el = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const width = canvas.width = window.innerWidth*0.99; 
  const height = canvas.height = window.innerHeight*2;

  function drawline(x,y,x1,y1,clr){
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = clr;
    ctx.fillStyle = clr;
    ctx.moveTo(x,y);
    ctx.lineTo(x1,y1)
    ctx.stroke();
  }

  function drawcircle(x,y,rad,circlr){
    ctx.beginPath();
    ctx.strokeStyle = circlr;
    ctx.arc(x, y, rad, 0, 2 * Math.PI); //-((height)/(boardSize+2)/2)
    ctx.stroke(); 
  }

  function positify(x){
    if (x >= 0){ 
      return x 
    } else {
      return 0
    }
  }

  function setoverlay(ovl,dv){
    ovl.style.top = dv.offsetTop +'px';
    ovl.style.left = dv.offsetLeft +'px';
    ovl.style.height = dv.offsetHeight +'px';
    ovl.style.width = dv.offsetWidth +'px';
  }

  function revealmore(x){
    let l = document.getElementById('more');
    l.style.display = 'block';
    l.style.opacity = 0;
    // nvm ignore the opacity stuff
    let c = 0;
    (async () => {
      while (c < 100){
        l.style.opacity = 0;
        await sleep(2);
        c += 1;
      }
    })();
  }

  // def all teh consts
  let h1 = document.getElementById('header1');
  let h2 = document.getElementById('header2');
  let h3 = document.getElementById('header3');
  let h4 = document.getElementById('header4');
  let fav = document.getElementById('fav');
  let title = document.getElementById('title');
  let nav = document.getElementById('nav1');
  let head = document.getElementById('head');
  let head1 = document.getElementById('head1');
  let mainimg = document.getElementById('mainimg');
  let ol3 = document.getElementById('overlay3');


  let hc = document.getElementById('hcontainer');
  let hol = document.getElementById('headoverlay');
  hol.style.top = head.offsetTop +'px';
  hol.style.left = head.offsetLeft +'px';
  hol.style.height = head.offsetHeight +'px';
  hol.style.width = head.offsetWidth +'px';
  let hol2 = document.getElementById('headoverlay2');
  hol2.style.top = head.offsetTop +'px';
  hol2.style.left = head.offsetLeft +'px';
  hol2.style.height = head.offsetHeight +'px';
  hol2.style.width = head.offsetWidth +'px';

  let htop = head.offsetTop;


  // for cool effect
  let ovl1 = document.getElementById('ovl1');
  let ovl2 = document.getElementById('ovl2');
  let ovl3 = document.getElementById('ovl3');
  let ovl4 = document.getElementById('ovl4');
  let ovl5 = document.getElementById('ovl5');
  let line1 = document.getElementById('line1');
  let line2 = document.getElementById('line2');
  let line3 = document.getElementById('line3');
  let line4 = document.getElementById('line4');
  let line5 = document.getElementById('line5');

  // setup
  setoverlay(ovl1,line1);
  setoverlay(ovl2,line2);
  setoverlay(ovl3,line3);
  setoverlay(ovl4,line4);
  setoverlay(ovl5,line5);

  // canvas
  ctx.fillStyle = 'white';

  // this is the base
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


  while (true){
    if (counter <= 100){
      let cl = (counter/100)*255;
      let cl2 = cl*2-255/2;
      let dimclr = 'rgb('+cl+','+cl+','+cl+')';
      let dimclr2 = 'rgb('+cl2+','+cl2+','+cl2+')';

      // header fade
      h1.style.color = dimclr;
      h2.style.color = dimclr;
      h3.style.color = dimclr;
      h4.style.color = dimclr;
      fav.style.opacity = cl/255;
      title.style.color = dimclr;
      nav.style.borderColor = dimclr;
      mainimg.style.opacity = 0;
      head.style.color = 'rgb('+cl+','+cl+','+cl+')';
      ol3.style.opacity = (1-cl/255);
      head1.style.color = dimclr2;

      hol.style.width = head.offsetWidth*(counter/100) +'px';
      hol2.style.width = head.offsetWidth*(1-(counter/100)) +'px';
      hol2.style.left = head.offsetWidth*(counter/100) +'px';

      //hol.style.backgroundImage = 'linear-gradient(to right,rgba(0,0,0,'+(1-(counter/100))+'),rgba(0,0,0,'+(1-(counter/1000))+'))';

    
      await sleep(2);
      if (counter <= 100){
        counter = counter + (105-counter)/100;
      }
    } else {
      counter += 1;
      await sleep(2);
    }

      hol2.style.left = head.offsetWidth*(counter/100) +'px';
      hol2.style.width = head.offsetWidth-head.offsetWidth*(counter/100) +'px';


    var mutelineclr = 'rgb(50,50,50)';
    var brightlineclr = 'rgb(100,100,100)';

    // basically glow the buttons sequentially
    // so we have the button
    // bt1
    // the intensity is distance from mid = 50

    // upgrade the button stuff
    buttonglower += 0.5;
    if (buttonglower >= 500){
      buttonglower = 0;
    }

    // ok this is the cool effect
    let scrl = window.scrollY+6*window.innerHeight/7; // the starting point for this
    //console.log(window.scrollY);
    if (scrl > line1.offsetTop){
      let passed = (scrl-line1.offsetTop)*5;
      ovl1.style.height = line1.offsetHeight +'px';
      ovl1.style.left = passed+line1.offsetLeft+'px';
      ovl1.style.width = line1.offsetWidth-(passed+line1.offsetLeft)+'px'
    } 
    scrl = window.scrollY+5*window.innerHeight/7;
    if (scrl > line2.offsetTop){
      let passed = (scrl-line2.offsetTop)*5;
      ovl2.style.height = line2.offsetHeight +'px';
      ovl2.style.left = passed+line2.offsetLeft+'px';
      ovl2.style.width = line2.offsetWidth-(passed+line2.offsetLeft)+'px'
    }
    scrl = window.scrollY+4*window.innerHeight/7;
    if (scrl > line3.offsetTop){
      let passed = (scrl-line3.offsetTop)*5;
      ovl3.style.height = line3.offsetHeight +'px';
      ovl3.style.left = passed+line3.offsetLeft+'px';
      ovl3.style.width = line3.offsetWidth-(passed+line3.offsetLeft)+'px'
    }
    scrl = window.scrollY+3*window.innerHeight/7;
    if (scrl > line4.offsetTop){
      let passed = (scrl-line4.offsetTop)*5;
      ovl4.style.height = line4.offsetHeight +'px';
      ovl4.style.left = passed+line4.offsetLeft+'px';
      ovl4.style.width = line4.offsetWidth-(passed+line4.offsetLeft)+'px'
    }
    scrl = window.scrollY+2*window.innerHeight/7;
    if (scrl > line5.offsetTop){
      let passed = (scrl-line5.offsetTop)*5;
      ovl5.style.height = line5.offsetHeight +'px';
      ovl5.style.left = passed+line5.offsetLeft+'px';
      ovl5.style.width = line5.offsetWidth-(passed+line5.offsetLeft)+'px'
    }

    // window.scrollTo(0,window.scrollY+1.5);

  }
})();
