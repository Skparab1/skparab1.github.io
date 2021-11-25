function preload() {
  redirect = loadTable("redirects.csv","csv","header");
}

var keyword;
var url;
var tickercount = -155;

function setup() {
  createCanvas(1023,430);  
  keyword = redirect.getColumn(0);
  url = redirect.getColumn(1);
  
loc = window.location.href;

var foundredirect = false;
var tickercount = 0;

print(keyword);

if (loc.includes('https://skparab1.github.io/r/')){
  red = loc.replace('https://skparab1.github.io/r/','');
  
  i = 0;
  scanner = '';
  while (i <= keyword.length && foundredirect == false){
    scanner = keyword[i];
    if (scanner == red){
      foundredirect = true;
      openwindow = url[i];
      openwindow = 'https://'+openwindow;
    }
    
    i += 1;
  }
  
  if (foundredirect){
    //location.href = openwindow;
    window.open(openwindow,"_self");
  } else {
    window.open("http:skparab1.github.io/wrongredirect","_self");
  }
  
  
  background(0);
  textSize(25);
  stroke(0);
  fill(255);
  strokeWeight(3);
  
  text('Redirecting to your requested webpage......',100,75);
  text('This shouldn\'t take too long',100,110);

  
} else {
  //window.open("http:skparab1.github.io/wrongredirect","_self");
}
}

var t = 0;
var which;
x = 0;
var ball2 = -100;
var ballbouncer = -100;
var frames = -400;
var size = 50;

const center = [500,250];

var ballx = 0;
var bally = 200;
var xdirection = 'right';

var bx1;
var by1 = 226;
var bx2;
var by2 = 250;
var bx3;
var by3 = 276;
var bx4;
var by4 = 300;
var bx5;
var by5 = 276;
var bx6;
var by6 = 250;
var bx7;
var by7 = 226;

var d1 = 'right';
var d2 = 'right';
var d3 = 'right';
var d4 = 'left';
var d5 = 'left';
var d6 = 'left';
var d7 = 'left';

var cyclecount = 0;
var disabledots = [1,1,1,1,1,1,1];

function draw(){
  background(0);
  
  fill(255);
  stroke(0);
  strokeWeight(3);
  textSize(40);
  text('Redirecting to your requested webpage......',100,75);
  textSize(25);
  text('This shouldn\'t take too long',100,110);
  strokeWeight(8);
  
  if(t == 0){
    which = round(random(3));
  }
  t += 1;
  
  if (which == 1){
  stroke(255-Math.abs(100-tickercount));
  fill(255-Math.abs(100-tickercount));
  ellipse(500,150,10,10);
  
  stroke(255-Math.abs(200-tickercount));
  fill(255-Math.abs(200-tickercount));
  ellipse(535.33,200-35.33,10,10);
  
  stroke(255-Math.abs(300-tickercount));
  fill(255-Math.abs(300-tickercount));
  ellipse(550,200,10,10);
  
  stroke(255-Math.abs(400-tickercount));
  fill(255-Math.abs(400-tickercount));
  ellipse(535.33,235.33,10,10);
  
  stroke(255-Math.abs(500-tickercount));
  fill(255-Math.abs(500-tickercount));
  ellipse(500,250,10,10);
  
  stroke(255-Math.abs(600-tickercount));
  fill(255-Math.abs(600-tickercount));
  ellipse(500-35.33,235.33,10,10);
  
  stroke(255-Math.abs(700-tickercount));
  fill(255-Math.abs(700-tickercount));
  ellipse(450,200,10,10);
  
  stroke(255-Math.abs(800-tickercount));
  fill(255-Math.abs(800-tickercount));
  ellipse(500-35.33,200-35.33,10,10);
    
  if (tickercount < 300){
     stroke(255-Math.abs(-300-tickercount));
    fill(255-Math.abs(-300-tickercount));
    ellipse(500,250,10,10);
    
    stroke(255-Math.abs(-200-tickercount));
    fill(255-Math.abs(-200-tickercount));
    ellipse(500-35.33,235.33,10,10);
  
    stroke(255-Math.abs(-100-tickercount));
    fill(255-Math.abs(-100-tickercount));
    ellipse(450,200,10,10);
    
    stroke(255-Math.abs(0-tickercount));
    fill(255-Math.abs(0-tickercount));
    ellipse(500-35.33,200-35.33,10,10);    
  }
  }
  print(which);
  
  tickercount += 10;
  if (tickercount > 600){
    tickercount = -155;
  }
  ballbouncer += 7;
  if (ballbouncer > 1500){
    ballbouncer = -100;
  }
  
  i = 0;
  while (i < 3){
    let h = 400-Math.abs((i*50)-ball2)-200;
    if (h < 325-200){
      fill(255);
      stroke(255);
      h = 325-200;
    } else {
      fill(255);
      stroke(255);
    }
    
    if (which == 2){
    ellipse(i*50+450,h+150,10,10);
    }
    
    h = 300 - h;
    if (which == 0){
    ellipse(i*50+450,h+95,10,10);
    }
    i += 1;
  }
  
  ball2 += 10;
  if (ball2 > 300){
    ball2 = -100;
  }
  
  if (which == 3){
    strokeWeight(3);
    fill(50,200,255);
    stroke(50,200,255);
    
    ellipse(bx6,by6,10,10);
    ellipse(bx7,by7,10,10);
    ellipse(ballx,bally,10,10);
    ellipse(bx1,by1,10,10);
    ellipse(bx2,by2,10,10);
    ellipse(bx3,by3,10,10);
    ellipse(bx4,by4,10,10);
    ellipse(bx5,by5,10,10);
    
    //
    
    fill(0);
    
    if (bx5 == 500 && by5 == 200){
      //cyclecount += 1;
    }
  
    if (xdirection == 'right'){bally += 2; ballx = Math.sqrt(2500 - (bally-250)*(bally-250))+500;} else {bally -= 2; ballx = 500-Math.sqrt(2500 - (bally-250)*(bally-250));}
    if (d1 == 'right'){by1 += 2; bx1 = Math.sqrt(2500 - (by1-250)*(by1-250))+500;} else {by1 -= 2; bx1 = 500-Math.sqrt(2500 - (by1-250)*(by1-250));}
    if (d2 == 'right'){by2 += 2; bx2 = Math.sqrt(2500 - (by2-250)*(by2-250))+500;} else {by2 -= 2; bx2 = 500-Math.sqrt(2500 - (by2-250)*(by2-250));}
    if (d3 == 'right'){by3 += 2; bx3 = Math.sqrt(2500 - (by3-250)*(by3-250))+500;} else {by3 -= 2; bx3 = 500-Math.sqrt(2500 - (by3-250)*(by3-250));}
    if (d4 == 'right'){by4 += 2; bx4 = Math.sqrt(2500 - (by4-250)*(by4-250))+500;} else {by4 -= 2; bx4 = 500-Math.sqrt(2500 - (by4-250)*(by4-250));}
    if (d5 == 'right'){by5 += 2; bx5 = Math.sqrt(2500 - (by5-250)*(by5-250))+500;} else {by5 -= 2; bx5 = 500-Math.sqrt(2500 - (by5-250)*(by5-250));}
    if (d6 == 'right'){by6 += 2; bx6 = Math.sqrt(2500 - (by6-250)*(by6-250))+500;} else {by6 -= 2; bx6 = 500-Math.sqrt(2500 - (by6-250)*(by6-250));}
    if (d7 == 'right'){by7 += 2; bx7 = Math.sqrt(2500 - (by7-250)*(by7-250))+500;} else {by7 -= 2; bx7 = 500-Math.sqrt(2500 - (by7-250)*(by7-250));}
    
    if (bally < 200){ xdirection = 'right';} else if (bally > 300){ xdirection = 'left'; if (cyclecount % 3 == 0){disabledots = [0,disabledots[1],disabledots[2],disabledots[3],disabledots[4],disabledots[5],disabledots[6]];} else {disabledots = [1,disabledots[1],disabledots[2],disabledots[3],disabledots[4],disabledots[5],disabledots[6]];}}
    if (by1 < 200){d1 = 'right';} else if (by1 > 300){d1 = 'left'; if (cyclecount % 3 == 0){disabledots = [disabledots[0],0,disabledots[2],disabledots[3],disabledots[4],disabledots[5],disabledots[6]];} else {disabledots = [disabledots[0],1,disabledots[2],disabledots[3],disabledots[4],disabledots[5],disabledots[6]];}}
    if (by2 < 200){d2 = 'right';} else if (by2 > 300){d2 = 'left'; if (cyclecount % 3 == 0){disabledots = [disabledots[0],disabledots[1],0,disabledots[3],disabledots[4],disabledots[5],disabledots[6]];} else {disabledots = [disabledots[0],disabledots[1],1,disabledots[3],disabledots[4],disabledots[5],disabledots[6]];}}
    if (by3 < 200){d3 = 'right';} else if (by3 > 300){d3 = 'left'; if (cyclecount % 3 == 0){disabledots = [disabledots[0],disabledots[1],disabledots[2],0,disabledots[4],disabledots[5],disabledots[6]];} else {disabledots = [disabledots[0],disabledots[1],disabledots[2],1,disabledots[4],disabledots[5],disabledots[6]];}}
    if (by4 < 200){d4 = 'right';} else if (by4 > 300){d4 = 'left'; cyclecount += 1; if (cyclecount % 3 == 0){disabledots = [disabledots[0],disabledots[1],disabledots[2],disabledots[3],0,disabledots[5],disabledots[6]];} else {disabledots = [disabledots[0],disabledots[1],disabledots[2],disabledots[3],1,disabledots[5],disabledots[6]];}}
    if (by5 < 200){d5 = 'right';} else if (by5 > 300){d5 = 'left';}
    if (by6 < 200){d6 = 'right';} else if (by6 > 300){d6 = 'left'; if (cyclecount % 3 == 0){disabledots = [disabledots[0],disabledots[1],disabledots[2],disabledots[3],disabledots[4],0,disabledots[6]];} else {disabledots = [disabledots[0],disabledots[1],disabledots[2],disabledots[3],disabledots[4],1,disabledots[6]];}}
    if (by7 < 200){d7 = 'right';} else if (by7 > 300){d7 = 'left'; if (cyclecount % 3 == 0){disabledots = [disabledots[0],disabledots[1],disabledots[2],disabledots[3],disabledots[4],disabledots[5],0];} else {disabledots = [disabledots[0],disabledots[1],disabledots[2],disabledots[3],disabledots[4],disabledots[5],1];}}
   
  }
}
