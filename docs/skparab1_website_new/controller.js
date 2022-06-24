const sleep = ms => new Promise(res => setTimeout(res, ms));

var counter = 0;
var counter1 = 0;
var animator = 1000;
var colorizer = 0;
var fader = 0;
var fader2 = 0;
var introduced = false;
var introduced1 = false;
var introduced2 = false;
var introduced3 = false;

var scalefactor = ((window.innerHeight/482)+(window.innerWidth/2048))/2;

function makehover(id, clr){
  let test = document.getElementById(id);

  test.addEventListener("mouseenter", function( event ) {
    // highlight the mouseenter target
    event.target.style.background = "rgba(0,0,0,0)";
  }, false);

  test.addEventListener("mouseout", function( event ) {
    // highlight the mouseenter target
    event.target.style.background = clr;
  }, false);
}

function getPos(el) {
  for (var lx=0, ly=0;
       el != null;
       lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
  return ly;
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function changecolor(id,clr){
  let el = document.getElementById(id);
  el.style.color = clr;
}

(async () => {
  let it = document.getElementById('topheader')
  //it.style.left = (window.innerWidth/2)-185*scalefactor + "px";

  let bg = document.getElementById("background1");
  bg.top = "1000px";
  bg.height = (window.innerHeight+450-1000)+"px";

  let opener1 = document.getElementById("openercontent");

  let thetop;
  let cutheight = 800; // this is an estimate
  if (window.scrollY+window.innerHeight >= cutheight){ //if has scrolled past 1000 at bottom so basically absoulte scroll = scrolly+windowy
    thetop = (cutheight+(window.scrollY+window.innerHeight-cutheight)*0.30); // 0.4 changable for reveal speed
  } else {
    thetop = cutheight;
  }

  opener1.style.top = thetop+"px";

  while (counter1 <= 4000){
    colorizer = counter1;
    if (colorizer >= 1000){
      colorizer = 1000;
    }
    if (counter1 >= 2500){
      fader = counter1-2500;
    }
    if (counter1 >= 3000){
      fader2 = counter1-3000;
    }
    if (counter1 >= 1){
      let disp = document.getElementById("topdiv");
      disp.style.display = "block";
      let disp2 = document.getElementById("topdiv2");
      if (counter1 < 1000){
        disp.style.background = "linear-gradient(rgb("+(200*counter1/1000)+", "+(75*counter1/1000)+", 0),rgb("+(200*counter1/1000)+", 0, 0),black)";
      }

      //btn 1
      let tbutton = document.getElementById("top-button1");
      tbutton.style.top = (200+animator*0.5) + "px";
      tbutton.style.left = 0.04*window.innerWidth +"px";
      tbutton.style.background = "rgba("+((colorizer/1000)*255)+","+((colorizer/1000)*0)+","+((colorizer/1000)*0)+","+(counter1/1000)+")";
      tbutton.style.border = "8px solid rgba("+((colorizer/1000)*255)+","+((colorizer/1000)*0)+","+((colorizer/1000)*0)+","+(counter1/1000)+")";

      let txt = document.getElementById("b1d");
      txt.style.top = "305px";
      txt.style.left = 0.05*window.innerWidth +"px";
      txt.style.width = 0.18*window.innerWidth +"px";

      let disc = document.getElementById('disctext1');
      disc.style.color = "rgba(0,0,0,"+(fader/1000)+")";

      // btn 2
      tbutton = document.getElementById("top-button2");
      tbutton.style.top = (200+animator) + "px";
      tbutton.style.left = 0.28*window.innerWidth +"px";
      tbutton.style.background = "rgba("+((colorizer/1000)*200)+","+((colorizer/1000)*200)+","+((colorizer/1000)*0)+","+(counter1/1000)+")";
      tbutton.style.border = "8px solid rgba("+((colorizer/1000)*200)+","+((colorizer/1000)*200)+","+((colorizer/1000)*0)+","+(counter1/1000)+")";

      txt = document.getElementById("b2d");
      txt.style.top = "305px";
      txt.style.left = 0.29*window.innerWidth +"px";
      txt.style.width = 0.18*window.innerWidth +"px";

      disc = document.getElementById('disctext2');
      disc.style.color = "rgba(0,0,0,"+(fader/1000)+")";

      // btn 3
      tbutton = document.getElementById("top-button3");
      tbutton.style.top = (200+animator*2) + "px";
      tbutton.style.left = 0.52*window.innerWidth +"px";
      tbutton.style.background = "rgba("+((colorizer/1000)*0)+","+((colorizer/1000)*255)+","+((colorizer/1000)*0)+","+(counter1/1000)+")";
      tbutton.style.border = "8px solid rgba("+((colorizer/1000)*0)+","+((colorizer/1000)*255)+","+((colorizer/1000)*0)+","+(counter1/1000)+")";

      txt = document.getElementById("b3d");
      txt.style.top = "305px";
      txt.style.left = 0.53*window.innerWidth +"px";
      txt.style.width = 0.18*window.innerWidth +"px";

      disc = document.getElementById('disctext3');
      disc.style.color = "rgba(0,0,0,"+(fader/1000)+")";

      // btn 4
      tbutton = document.getElementById("top-button4");
      tbutton.style.top = (200+animator*3) + "px";
      tbutton.style.left = 0.76*window.innerWidth +"px";
      tbutton.style.background = "rgba("+((colorizer/1000)*0)+","+((colorizer/1000)*0)+","+((colorizer/1000)*255)+","+(counter1/1000)+")";
      tbutton.style.border = "8px solid rgba("+((colorizer/1000)*0)+","+((colorizer/1000)*0)+","+((colorizer/1000)*255)+","+(counter1/1000)+")";

      txt = document.getElementById("b4d");
      txt.style.top = "305px";
      txt.style.left = 0.77*window.innerWidth +"px";
      txt.style.width = 0.18*window.innerWidth +"px";

      disc = document.getElementById('disctext4');
      disc.style.color = "rgba(0,0,0,"+(fader/1000)+")";

      // next row

      // btn 5
      tbutton = document.getElementById("top-button5");
      tbutton.style.top = (500+(animator)*4) + "px";
      tbutton.style.left = 0.04*window.innerWidth +"px";
      tbutton.style.background = "rgba("+((colorizer/1000)*200)+","+((colorizer/1000)*100)+","+((colorizer/1000)*0)+","+(counter1/1000)+")";
      tbutton.style.border = "8px solid rgba("+((colorizer/1000)*200)+","+((colorizer/1000)*100)+","+((colorizer/1000)*0)+","+(counter1/1000)+")";

      txt = document.getElementById("b5d");
      txt.style.top = "610px";
      txt.style.left = 0.05*window.innerWidth +"px";
      txt.style.width = 0.18*window.innerWidth +"px";

      disc = document.getElementById('disctext5');
      disc.style.color = "rgba(0,0,0,"+(fader2/1000)+")";

      // btn 6
      tbutton = document.getElementById("top-button6");
      tbutton.style.top = (500+animator*5) + "px";
      tbutton.style.left = 0.28*window.innerWidth +"px";
      tbutton.style.background = "rgba("+((colorizer/1000)*200)+","+((colorizer/1000)*200)+","+((colorizer/1000)*0)+","+(counter1/1000)+")";
      tbutton.style.border = "8px solid rgba("+((colorizer/1000)*200)+","+((colorizer/1000)*200)+","+((colorizer/1000)*0)+","+(counter1/1000)+")";

      txt = document.getElementById("b6d");
      txt.style.top = "610px";
      txt.style.left = 0.29*window.innerWidth +"px";
      txt.style.width = 0.18*window.innerWidth +"px";

      disc = document.getElementById('disctext6');
      disc.style.color = "rgba(0,0,0,"+(fader2/1000)+")";

      // btn 7
      tbutton = document.getElementById("top-button7");
      tbutton.style.top = (500+animator*6) + "px";
      tbutton.style.left = 0.52*window.innerWidth +"px";
      tbutton.style.background = "rgba("+((colorizer/1000)*0)+","+((colorizer/1000)*255)+","+((colorizer/1000)*0)+","+(counter1/1000)+")";
      tbutton.style.border = "8px solid rgba("+((colorizer/1000)*0)+","+((colorizer/1000)*255)+","+((colorizer/1000)*0)+","+(counter1/1000)+")";

      txt = document.getElementById("b7d");
      txt.style.top = "610px";
      txt.style.left = 0.53*window.innerWidth +"px";
      txt.style.width = 0.18*window.innerWidth +"px";

      disc = document.getElementById('disctext7');
      disc.style.color = "rgba(0,0,0,"+(fader2/1000)+")";

      // btn 8
      tbutton = document.getElementById("top-button8");
      tbutton.style.top = (500+animator*7) + "px";
      tbutton.style.left = 0.76*window.innerWidth +"px";
      tbutton.style.background = "rgba("+((colorizer/1000)*0)+","+((colorizer/1000)*0)+","+((colorizer/1000)*255)+","+(counter1/1000)+")";
      tbutton.style.border = "8px solid rgba("+((colorizer/1000)*0)+","+((colorizer/1000)*0)+","+((colorizer/1000)*255)+","+(counter1/1000)+")";

      txt = document.getElementById("b8d");
      txt.style.top = "610px";
      txt.style.left = 0.77*window.innerWidth +"px";
      txt.style.width = 0.18*window.innerWidth +"px";

      disc = document.getElementById('disctext8');
      disc.style.color = "rgba(0,0,0,"+(fader2/1000)+")";
    }
    counter1 += 5;
    animator = 0.99 * animator;
    await sleep(2);
  }



  // counter = 0;

  // animator = 1000;
  // while (counter < 1000){
  //   tbutton = document.getElementById("top-button1");
  //   tbutton.style.height = ((1000-animator)/1000*150)+100+"px";
  //   tbutton = document.getElementById("top-button2");
  //   tbutton.style.height = ((1000-(animator))/1000*150)+100+"px";
  //   tbutton = document.getElementById("top-button3");
  //   tbutton.style.height = ((1000-animator)/1000*150)+100+"px";
  //   tbutton = document.getElementById("top-button4");
  //   tbutton.style.height = ((1000-animator)/1000*150)+100+"px";
  //   console.log('did it'+(1000-animator)/1000);
  //   counter += 1;
  //   animator = 0.99 * animator;
  //   await sleep(2);
  // }
  // while (true){
  //   let opener = document.getElementById("opener");
  //   opener.style.top = window.scrollY + window.innerHeight +"px";
  // }

})();


let r1 = document.getElementById('row1');
let r15 = document.getElementById('row1.5');
let r2 = document.getElementById('row2');
let r3 = document.getElementById('row2.5');

let r21 = document.getElementById('row21');
let r215 = document.getElementById('row21.5');
let r22 = document.getElementById('row22');
let r225 = document.getElementById('row22.5');
let r23 = document.getElementById('row23');
let r235 = document.getElementById('row23.5');
let r24 = document.getElementById('row24');
let r245 = document.getElementById('row24.5');
let r25 = document.getElementById('row25');
let r255 = document.getElementById('row25.5');
let r26 = document.getElementById('row26');
let r265 = document.getElementById('row26.5');
let r27 = document.getElementById('row27');
let r275 = document.getElementById('row27.5');
let r28 = document.getElementById('row28');
let r285 = document.getElementById('row28.5');
let r29 = document.getElementById('row29');
let r295 = document.getElementById('row29.5');
let r30 = document.getElementById('row30');
let r305 = document.getElementById('row30.5');
let r31 = document.getElementById('row31');
let r315 = document.getElementById('row31.5');
let r32 = document.getElementById('row32');
let r325 = document.getElementById('row32.5');
let r33 = document.getElementById('row33');
let r335 = document.getElementById('row33.5');
let r34 = document.getElementById('row34');
let r345 = document.getElementById('row34.5');
let r35 = document.getElementById('row35');
let r355 = document.getElementById('row35.5');
let r36 = document.getElementById('row36');
let r365 = document.getElementById('row36.5');
let r37 = document.getElementById('row37');
let r375 = document.getElementById('row37.5');
let r38 = document.getElementById('row38');
let r385 = document.getElementById('row38.5');
let r39 = document.getElementById('row39');
let r395 = document.getElementById('row39.5');
let r40 = document.getElementById('row40');
let r405 = document.getElementById('row40.5');
let r41 = document.getElementById('row41');
let r415 = document.getElementById('row41.5');
let r42 = document.getElementById('row42');
let r425 = document.getElementById('row42.5');
//let rend = document.getElementById('END');

document.addEventListener("scroll", inView);

function inView() {
  if (counter1 > 1000 || true){ // ignore this
    // when about me top is at 0
    // basically when scroll = opener.style.top

    let opener = document.getElementById("opener");
    opener1 = document.getElementById("openercontent");

    let thetop;
    cutheight = 800; // this is an estimate
    if (window.scrollY+window.innerHeight >= cutheight){ //if has scrolled past 1000 at bottom so basically absoulte scroll = scrolly+windowy
      thetop = (cutheight+(window.scrollY+window.innerHeight-cutheight)*0.30); // 0.4 changable for reveal speed
    } else {
      thetop = cutheight;
    }

    opener1.style.top = thetop+"px";
    let toph;

    let topper;

    console.log(opener1.style.top, window.scrollY);
    if (window.scrollY < thetop){
      // just hide it before
      console.log('hidden');
      //opener.style.display = "none";
      toph = 0;
      let header = document.getElementById("header");
      header.style.position = "sticky";
      header.style.top = "0px";
      changecolor('l1',"white");
      changecolor('l2',"white");
      changecolor('l3',"white");
      changecolor('l4',"white");
      changecolor('l5',"white");
      changecolor('l6',"white");
    } else if (window.scrollY >= thetop && window.scrollY < thetop+opener1.offsetHeight){
      // when its steady
      console.log('steady');
      opener.style.display = "block";
      opener.style.top = (window.scrollY)+"px";
      toph = window.scrollY;
      let header = document.getElementById("header");
      header.style.position = "sticky";
      header.style.top = "0px";
      changecolor('l1',"white");
      changecolor('l2',"white");
      changecolor('l3',"white");
      changecolor('l4',"white");
      changecolor('l5',"white");
      changecolor('l6',"white");
    } else if (window.scrollY >= thetop){
      // moving but like 1 window height behind
      console.log('behind',thetop);
      opener.style.display = "block";
      opener.style.top = (thetop+opener1.offsetHeight)+"px";
      toph = thetop+opener1.offsetHeight;

      let header = document.getElementById("header");
      header.style.position = "absolute";
      header.style.top = window.scrollY + "px";
      changecolor('l1',"black");
      changecolor('l2',"black");
      changecolor('l3',"black");
      changecolor('l4',"black");
      changecolor('l5',"black");
      changecolor('l6',"black");
    }

    if (opener1.offsetHeight < window.innerHeight){
      opener1.style.height = window.innerHeight+"px";
    }

    let allgproj = document.getElementById("allgprojects");
    let projbox = document.getElementById('projbox');
    let tophp = document.getElementById('toph');
    let pb = document.getElementById('projbox').getBoundingClientRect();
    console.log('hello',toph,projbox.offsetHeight);
    //allgproj.style.top = (thetop+opener1.offsetHeight)+"px"; //+projbox.offsetHeight+100
    allgproj.style.top = (projbox.offsetHeight+200)+"px";
    // thats it

    //allgproj.style.left = (50-((12*(2048/window.innerWidth))/100)*100)+"%";
    console.log((50-((15*(window.innerWidth/2048))/100)*100)+"%");

    // r22.style.top = (100 + 200) + "px";
    // r225.style.top = (100 + 200) + "px";
    // r23.style.top = (100 + 100 + 250) + "px";
    // r235.style.top = (450) + "px";
    // r24.style.top = (100 + 100 + 100 + 300) + "px";
    // r245.style.top = (600) + "px";


    console.log(window.scrollY, thetop+opener1.offsetHeight+r1.offsetHeight);
    if (window.scrollY > toph+projbox.offsetHeight-300*scalefactor && !introduced1 && window.scrollY >= thetop){
      counter = 0;
      r1.style.background = "block";
      if (counter <= 1000){
        let pc = -70;
        let pc1 = 123;
        (async () => {
          while (pc < 1.5){
            r1.style.left = (pc+"%");
            r15.style.left = (pc1+"%");
            pc += (1.5-pc)/100;
            pc1 += (52-pc1)/100;
            await sleep(2);
          }
        })();
      }
      introduced1 = true;
    }

    if (window.scrollY > toph+projbox.offsetHeight+r1.offsetHeight-300*scalefactor && !introduced2 && window.scrollY >= thetop){
      counter = 0;
      if (counter <= 1000){
        pc = -70;
        pc1 = 123;
        (async () => {
          while (pc < 1.5){
            r2.style.left = (pc+"%");
            r3.style.left = (pc1+"%");
            pc += (1.5-pc)/100;
            pc1 += (52-pc1)/100;
            await sleep(2);
          }
        })();
      }
      r2.style.display = "block";
      r3.style.display = "block";
      introduced2 = true;
    }

    let oph = document.getElementById('otherp');

    if (window.scrollY > toph+projbox.offsetHeight+r1.offsetHeight+r2.offsetHeight-50*scalefactor && !introduced3 && window.scrollY >= thetop){
      let counter1 = 0;
      console.log('triggered');
      if (counter1 <= 1000){
        pc2 = 1000;
        //pc3 = 1000;
        (async () => {
          r29.style.top = ((150*5+266)+"px");
          r295.style.top = ((150*5+266)+"px");
          r30.style.top = ((150*5.5+300)+"px");
          r305.style.top = ((150*5.5+300)+"px");
          r31.style.top = ((150*6+333)+"px");
          r315.style.top = ((150*6+333)+"px");
          r32.style.top = ((150*6.5+366)+"px");
          r325.style.top = ((150*6.5+366)+"px");
          r33.style.top = ((150*7+400)+"px");
          r335.style.top = ((150*7+400)+"px");
          r34.style.top = ((150*7.5+433)+"px");
          r345.style.top = ((150*7.5+433)+"px");
          r35.style.top = ((150*8+466)+"px");
          r355.style.top = ((150*8+466)+"px");
          r36.style.top = ((150*8.5+500)+"px");
          r365.style.top = ((150*8.5+500)+"px");
          r37.style.top = ((150*9+533)+"px");
          r375.style.top = ((150*9+533)+"px");
          r38.style.top = ((150*9.5+566)+"px");
          r385.style.top = ((150*9.5+566)+"px");
          r39.style.top = ((150*10+600)+"px");
          r395.style.top = ((150*10+600)+"px");
          r40.style.top = ((150*10.5+633)+"px");
          r405.style.top = ((150*10.5+633)+"px");
          r41.style.top = ((150*11+666)+"px");
          r415.style.top = ((150*11+666)+"px");
          r42.style.top = ((150*11.5+700)+"px");
          r425.style.top = ((150*11.5+700)+"px");
          //rend.style.top = ((150*12.5+766)+"px");

          while (pc2 > 150){
            r21.style.top = (pc2+"px");
            r215.style.top = (pc2+"px");
            r22.style.top = ((pc2*1.5+33)+"px");
            r225.style.top = ((pc2*1.5+33)+"px");
            r23.style.top = ((pc2*2+66)+"px");
            r235.style.top = ((pc2*2+66)+"px");
            r24.style.top = ((pc2*2.5+100)+"px");
            r245.style.top = ((pc2*2.5+100)+"px");
            r25.style.top = ((pc2*3+133)+"px");
            r255.style.top = ((pc2*3+133)+"px");
            r26.style.top = ((pc2*3.5+166)+"px");
            r265.style.top = ((pc2*3.5+166)+"px");
            r27.style.top = ((pc2*4+200)+"px");
            r275.style.top = ((pc2*4+200)+"px");
            r28.style.top = ((pc2*4.5+233)+"px");
            r285.style.top = ((pc2*4.5+233)+"px");
            pc2 -= (pc2-150)/50;
            await sleep(2);
          }
        })();
      }
      introduced3 = true;
    }

    // and now make other projects come up

    let otherp = document.getElementById('otherp');

    r2.style.top = (r1.offsetHeight+200)+"px";
    r3.style.top = (r1.offsetHeight+200)+"px";

    otherp.style.top = (r1.offsetHeight+r2.offsetHeight+200)+"px";

    //allgproj.style.left = window.innerWidth/2;


    // if (window.scrollY > 1000){
    //   opener1.style.top = (window.innerHeight+450)+"px";
    // } else if (window.scrollY > 100){
    //   opener1.style.top = (window.scrollY*0.5+window.innerHeight-50)+"px";
    // } else {
    //   opener1.style.top = (window.innerHeight)+"px";
    // }

    console.log(window.scrollY);

    //let header = document.getElementById("header");
    //header.style.top = (window.scrollY)+"px";
  }
}

makehover("top-button1",'red');
makehover("top-button2",'rgb(200,200,0)');
makehover("top-button3",'rgb(0,255,0)');
makehover("top-button4",'blue');
makehover("top-button5",'rgb(200,100,0');
makehover("top-button6",'rgb(200,200,0)');
makehover("top-button7",'rgb(0,255,0)');
makehover("top-button8",'blue');