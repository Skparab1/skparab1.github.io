function setup() {
  createCanvas(windowWidth, 1500);
  background(0);
}

var timer = 0;
var startbackdrop = 0;
var clr;
var rectmover = 0;
var rectmover2 = 0;

function drawnicerect(x,y,xsize,ysize,incolor){
  let xchange = x-250;
  let ychange = y-15;
  let xsizechange = xsize-200;
  let ysizechange = ysize-60;
  
  fill(incolor);
  stroke(incolor);
  rect(250+xchange+12.25,15+ychange+12.25,xsize-24.5,ysize-24.5);
  rect(250+xchange+12.25,15+ychange+3,xsize-24.5,15);
  rect(250+xchange+12.25,ychange+ysize-3,xsize-24.5,15);
  rect(250+xchange+3,15+ychange+12.5,15,ysize-24.5);
  rect(250+xchange+xsize-12.5-5.5,15+ychange+12.5,15,ysize-24.5);
  ellipse(265+xchange,30+ychange,24.5,24.5);
  ellipse(435+xchange+xsizechange,30+ychange,24.5,24.5);
  ellipse(265+xchange,60+ychange+ysizechange,24.5,24.5);
  ellipse(435+xchange+xsizechange,60+ychange+ysizechange,24.5,24.5);
}

function getScroll(){
    if (window.pageYOffset != undefined) {
        return pageYOffset;
    } else {
        var sx, sy, d = document,
            r = d.documentElement,
            b = d.body;
        sx = r.scrollLeft || b.scrollLeft || 0;
        sy = r.scrollTop || b.scrollTop || 0;
        return sy;
    }
}

function draw() {
  resizeCanvas(windowWidth, 1500);
  background(0);
  
  let c;

  c = startbackdrop;
  
  while (c >= 0){
    fill(c,c-255,c-510);
    stroke(c,c-255,c-510);
    rect(0,startbackdrop-c,windowWidth,1);
    c -= 1;
  }
  
  if (startbackdrop <= 255){
    startbackdrop += 5;
  }
  if (clr <= 765){
    clr += 3;
  }
  
  fill(timer*4);
  stroke(timer*4);
  textSize(75);
  text('Skparab1 Software',200,225-rectmover);
  textSize(35);
  fill(timer*4-20);
  stroke(timer*4-20);
  text('Free and open source software for everyone',200,275-rectmover);
  
  let shift = 50;
  drawnicerect(25+12.5,(300-rectmover)*2-200+shift,250,50,[timer*4-25,0,0]);
  drawnicerect(375+12.5,((300-rectmover)*3-200)-150+shift,250,50,[0,timer*4-25,0]);
  drawnicerect(725+12.5,((300-rectmover)*4-200)-300+shift,250,50,[0,0,timer*4-50]);
  
  drawnicerect(100,(300-rectmover2)*2-200,200,50,[timer*4-30,timer*4-30,0]);
  drawnicerect(400,((300-rectmover2)*3-200)-250,200,50,[0,timer*4-30,timer*4-30]);
  drawnicerect(700,((300-rectmover2)*4-200)-500,200,50,[timer*4-30,0,timer*4-30]);
  
  fill(0,255,0);
  ellipse(500,750,getScroll()/2,getScroll()/2);
  rect(100,800,getScroll()/2,10);
  
  c = 0;
  while (c <= 1000){
    fill(c-round(getScroll()*500)/1000);
    stroke(c-round(getScroll()*500)/1000);
    rect(0,c+500,windowWidth,1);
    c += 1;
  }
  
  fill(200,0,0);
  stroke(200,0,0);
  drawnicerect(300,600,200,50,[200,0,0]);
  text('Underlying text',100,600);
  text('Underlying text',200,650);
  text('Underlying text',300,700);
  text('Underlying text',400,750);
  text('Underlying text',200,800);
  text('Underlying text',300,850);
  text('Underlying text',400,900);
  text('Underlying text',200,950);
  text('Underlying text',300,1000);
  text('Underlying text',400,1050);
  
  rectmover += (150-rectmover)/10;
  rectmover2 += (50-rectmover2)/10;
  
  timer += 1;
  
}
