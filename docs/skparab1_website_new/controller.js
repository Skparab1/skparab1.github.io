const sleep = ms => new Promise(res => setTimeout(res, ms));

var counter = 0;
var animator = 1000;
var colorizer = 0;

(async () => {
  while (counter <= 4000){
    colorizer = counter;
    if (colorizer >= 1000){
      colorizer = 1000;
    }
    if (counter >= 1){
      let disp = document.getElementById("topdiv");
      let disp2 = document.getElementById("topdiv2");
      if (counter <= 1000){
        disp.style.background = "linear-gradient(rgb("+(200*counter/1000)+", "+(75*counter/1000)+", 0),rgb("+(200*counter/1000)+", 0, 0),black)";
      }
      let tbutton = document.getElementById("top-button1");
      tbutton.style.top = (200+animator*0.5) + "px";
      tbutton.style.left = 0.04*window.innerWidth +"px";
      tbutton.style.background = "rgba("+((colorizer/1000)*255)+","+((colorizer/1000)*0)+","+((colorizer/1000)*0)+","+(counter/1000)+")";
      tbutton.style.border = "2px solid rgba("+((colorizer/1000)*255)+","+((colorizer/1000)*0)+","+((colorizer/1000)*0)+","+(counter/1000)+")";

      tbutton = document.getElementById("top-button2");
      tbutton.style.top = (200+animator) + "px";
      tbutton.style.left = 0.28*window.innerWidth +"px";
      tbutton.style.background = "rgba("+((colorizer/1000)*200)+","+((colorizer/1000)*200)+","+((colorizer/1000)*0)+","+(counter/1000)+")";
      tbutton.style.border = "2px solid rgba("+((colorizer/1000)*200)+","+((colorizer/1000)*200)+","+((colorizer/1000)*0)+","+(counter/1000)+")";

      tbutton = document.getElementById("top-button3");
      tbutton.style.top = (200+animator*2) + "px";
      tbutton.style.left = 0.52*window.innerWidth +"px";
      tbutton.style.background = "rgba("+((colorizer/1000)*0)+","+((colorizer/1000)*255)+","+((colorizer/1000)*0)+","+(counter/1000)+")";
      tbutton.style.border = "2px solid rgba("+((colorizer/1000)*0)+","+((colorizer/1000)*255)+","+((colorizer/1000)*0)+","+(counter/1000)+")";

      tbutton = document.getElementById("top-button4");
      tbutton.style.top = (200+animator*3) + "px";
      tbutton.style.left = 0.76*window.innerWidth +"px";
      tbutton.style.background = "rgba("+((colorizer/1000)*0)+","+((colorizer/1000)*0)+","+((colorizer/1000)*255)+","+(counter/1000)+")";
      tbutton.style.border = "2px solid rgba("+((colorizer/1000)*0)+","+((colorizer/1000)*0)+","+((colorizer/1000)*255)+","+(counter/1000)+")";

      // next row

      tbutton = document.getElementById("top-button5");
      tbutton.style.top = (500+(animator)*4) + "px";
      tbutton.style.left = 0.04*window.innerWidth +"px";
      tbutton.style.background = "rgba("+((colorizer/1000)*200)+","+((colorizer/1000)*100)+","+((colorizer/1000)*0)+","+(counter/1000)+")";
      tbutton.style.border = "2px solid rgba("+((colorizer/1000)*200)+","+((colorizer/1000)*100)+","+((colorizer/1000)*0)+","+(counter/1000)+")";

      tbutton = document.getElementById("top-button6");
      tbutton.style.top = (500+animator*5) + "px";
      tbutton.style.left = 0.28*window.innerWidth +"px";
      tbutton.style.background = "rgba("+((colorizer/1000)*200)+","+((colorizer/1000)*200)+","+((colorizer/1000)*0)+","+(counter/1000)+")";
      tbutton.style.border = "2px solid rgba("+((colorizer/1000)*200)+","+((colorizer/1000)*200)+","+((colorizer/1000)*0)+","+(counter/1000)+")";

      tbutton = document.getElementById("top-button7");
      tbutton.style.top = (500+animator*6) + "px";
      tbutton.style.left = 0.52*window.innerWidth +"px";
      tbutton.style.background = "rgba("+((colorizer/1000)*0)+","+((colorizer/1000)*255)+","+((colorizer/1000)*0)+","+(counter/1000)+")";
      tbutton.style.border = "2px solid rgba("+((colorizer/1000)*0)+","+((colorizer/1000)*255)+","+((colorizer/1000)*0)+","+(counter/1000)+")";

      tbutton = document.getElementById("top-button8");
      tbutton.style.top = (500+animator*7) + "px";
      tbutton.style.left = 0.76*window.innerWidth +"px";
      tbutton.style.background = "rgba("+((colorizer/1000)*0)+","+((colorizer/1000)*0)+","+((colorizer/1000)*255)+","+(counter/1000)+")";
      tbutton.style.border = "2px solid rgba("+((colorizer/1000)*0)+","+((colorizer/1000)*0)+","+((colorizer/1000)*255)+","+(counter/1000)+")";

    }
    counter += 5;
    animator = 0.99 * animator;
    await sleep(2);
  }

  counter = 0;

  animator = 1000;
  while (counter < 1000){
    tbutton = document.getElementById("top-button1");
    tbutton.style.height = ((1000-animator)/1000*150)+100+"px";
    tbutton = document.getElementById("top-button2");
    tbutton.style.height = ((1000-(animator))/1000*150)+100+"px";
    tbutton = document.getElementById("top-button3");
    tbutton.style.height = ((1000-animator)/1000*150)+100+"px";
    tbutton = document.getElementById("top-button4");
    tbutton.style.height = ((1000-animator)/1000*150)+100+"px";
    console.log('did it'+(1000-animator)/1000);
    counter += 1;
    animator = 0.99 * animator;
    await sleep(2);
  }

})();