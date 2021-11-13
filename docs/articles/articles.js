function setup() {
  createCanvas(windowWidth, 3000);
}

mousepos = 25;
c = 0;
h = 0;
oldscroll = 0;
poschange = 0;

headerpos = 0;

displayh = 0;
stoppedscrollingtime = 60;

headerdirection = 'ok';

function donothing(){
}

function getScroll(){
    if (window.pageYOffset != undefined) {
        return [pageXOffset, pageYOffset];
    } else {
        var sx, sy, d = document,
            r = d.documentElement,
            b = d.body;
        sx = r.scrollLeft || b.scrollLeft || 0;
        sy = r.scrollTop || b.scrollTop || 0;
        return [sx, sy];
    }
}

function draw() {
  background(0,0,50);
  fill(255);
  
  h = getScroll();
  h = h[1];
  
  poschange = h-oldscroll;
  
  if (poschange == 0){
    stoppedscrollingtime += 1;
  } else {
    stoppedscrollingtime = 0;
  }
  
  if (h - displayh < 50 && displayh < h && poschange < 30){
    //displayh += 4;
  }
  
  if (stoppedscrollingtime > 60){
    headerdirection = 'down';
    if (h - displayh > 50){
      displayh = h - 50;
    }
    if (displayh < h){
      displayh += 4;
    }
    //headerpos += 2;
  } else if (poschange < 0){
    headerdirection = 'up';
    //displayh = h;
  } else {
    headerdirection = 'ok';
  }
  
  if (headerdirection == 'up' && headerpos >= 0){
    headerpos -= 3;
  } else if (headerdirection == 'down' && headerpos <= 50){
    headerpos += 3;
  }
  
  rect(0,displayh,windowWidth,headerpos);
  //mousepos += event.delta;
  requestAnimationFrame(donothing,0);
  
  oldscroll = h;
 
}

function windowResized() {
  resizeCanvas(windowWidth, 3000);
}

function mouseWheel(event) {
  
  mousepos += event.delta;
  
  c = event.delta;
  if (mousepos < 25){
    mousepos = 25;
  }
  if (mousepos > 3000){
    mousepos = 3000;
  }
}
