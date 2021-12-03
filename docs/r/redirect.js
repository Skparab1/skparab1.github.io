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
      openwindow = openwindow.replace("https://",'');
      openwindow = 'https://'+openwindow;
    }
    
    i += 1;
  }
  
  if (foundredirect){
    //location.href = openwindow;
    window.open(openwindow,"_self");
  } else {
    window.open("https://skparab1.github.io/wrongredirect","_self");
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
var red = 0;
var green = 0;
var blue = 0;
var changingcolor = 0;

function draw(){
  background(0);
  
  changingcolor += 10;
  
  red = (255-Math.abs(255-changingcolor))+100; //   0          255              
  green = (255-Math.abs(510-changingcolor))+100; // 100        100 
  blue = (255-Math.abs(765-changingcolor))+100; //  255         0       
  if (changingcolor >= 765){                                                        // @765    @1020
    red = (255-Math.abs(1020-changingcolor)) + (255 * ((changingcolor-765)/255)); //   ok        255+255
    green = 100;                                                                  //    ok       
    blue = (255-Math.abs(765-changingcolor)) + (255-(changingcolor-765));           //   ok     
  }
  
  if (changingcolor >= 1020){
    changingcolor = 255;
  }
  
  fill(255);
  stroke(0);
  strokeWeight(3);
  textSize(40);
  text('Redirecting to your requested webpage......',100,75);
  textSize(25);
  text('This shouldn\'t take too long',100,110);
  strokeWeight(8);
  
  if(t == 0){
    which = Math.floor(Math.random() * 3);
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
      fill(red,green,blue);
      stroke(red,green,blue);
      h = 325-200;
    } else {
      fill(red,green,blue);
      stroke(red,green,blue);
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
}
