function setup() {
  createCanvas(windowWidth, 2000);
  background(0);
}

var timer = 0;
var startbackdrop = 0;
var clr;
var rectmover = 0;
var rectmover2 = 0;
var shift = 50;

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
  if (getScroll() < 1000){
    resizeCanvas(windowWidth, 1500);
  } else {
    resizeCanvas(windowWidth, 3000);
  }
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
  
  
  shift = 50;
  drawnicerect(25+12.5,(300-rectmover)*2-200+shift,250,50,[timer*4-25,0,0]);
  drawnicerect(375+12.5,((300-rectmover)*3-200)-150+shift,250,50,[0,timer*4-25,0]);
  drawnicerect(725+12.5,((300-rectmover)*4-200)-300+shift,250,50,[0,0,timer*4-50]);
  
  drawnicerect(100,(300-rectmover2)*2-200,200,50,[timer*4-30,timer*4-30,0]);
  drawnicerect(400,((300-rectmover2)*3-200)-250,200,50,[0,timer*4-30,timer*4-30]);
  drawnicerect(700,((300-rectmover2)*4-200)-500,200,50,[timer*4-30,0,timer*4-30]);
  
  fill(0);
  if (localStorage.getItem('login') == 'logged out'){
    text('   Account                     Log in                      Something',65,185);
  } else {
    text('   Account                     Log out                      Something',65,185);
  }
  
  fill(0,255,0);
  ellipse(500,750,getScroll()/2,getScroll()/2);
  rect(100,800,getScroll()/2,10);
  
  c = 0;
  while (c <= 1300){
    let clrrect = c-round(getScroll()*600)/1000;
    fill(0,0,clrrect);
    stroke(0,0,clrrect);
    rect(0,c+400,windowWidth,1);
    c += 1;
  }
  
  fill(200,0,0);
  stroke(200,0,0);
  drawnicerect(300,600,200,50,[200,0,0]);
  text('Text float effect (initial)',100,600);
  
  c = 0;
  while (c <= 1700){
    let clrnow = c-round((getScroll()-1200)*600)/1000;
    fill(0,0,255-clrnow);
    stroke(0,0,255-clrnow);
    rect(0,c+1700,windowWidth,1);
    c += 1;
  }
  
  fill(255,0,0);
  stroke(255,0,0);
  let x = 100;
  let y = 600;
  while (y < 2500){
    text('Text float effect',x,y);
    //drawnicerect(x,y,200,50,[0,200,0]);
    x += 100;
    if (x >= 700){
      x = 100;
    }
    y += 50;
  }
  
  rectmover += (150-rectmover)/10;
  rectmover2 += (50-rectmover2)/10;
  
  timer += 1;
  
}

function mousePressed(){
  if (mouseX > 375+12.5 && mouseX < 375+12.5+250 && mouseY > ((300-rectmover)*3-200)-150+shift && mouseY < ((300-rectmover)*3-200)-150+shift+50){
    if (localStorage.getItem('login') == 'logged out'){
       window.open('https://skparab1.github.io/login/auth=false&pwdchallenge=true&goto=skparab1.github.io&s&home',"_self");
    } else {
      localStorage.setItem('login','logged out');
      signin = 'logged out';
      console.log('logged out yup');
      window.open('https://skparab1.github.io/logout',"_self");
    }
  }
}
