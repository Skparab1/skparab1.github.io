function preload() {
  redirect = loadTable("redirects.csv","csv","header");
}

var keyword;
var url;
var tickercount = -155;

const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};

const device = getDeviceType();

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
var changingsize = 0;
var displayword = 0;
var autorefresh = 0;
var frate = 0;

function draw(){
  background(0);
  
  blue = (255-Math.abs(255-changingcolor))+100; //   0          255              
  green = (255-Math.abs(510-changingcolor))+100; // 100        100 
  red = (255-Math.abs(765-changingcolor))+100; //  255         0       
  if (changingcolor >= 765){                                                        // @765    @1020
    blue = (255-Math.abs(1020-changingcolor)) + (255 * ((changingcolor-765)/255)); //   ok        255+255
    green = 100;                                                                  //    ok       
    red = (255-Math.abs(765-changingcolor)) + (255-(changingcolor-765));           //   ok     
  }
  
  changingcolor += 10;
  if (changingcolor >= 1020){
    changingcolor = 255;
  }
  
  displayword += 10;
  fill(255);
  stroke(0);
  strokeWeight(3);
  
  window.scroll({
    left: 300,
    behavior: 'smooth',
     });
  let plus;
  if (device == 'mobile'){
    plus = 300;
    textSize(20);
    text('Redirecting to your requested webpage......',325,75);
    textSize(15);
  } else {
    textSize(40);
    text('Redirecting to your requested webpage......',100,75);
    textSize(25);
    plus = 0;
  }
  
  if (frate < frameRate()){
    frate = frameRate();
  }
  if (displayword < 1200){
    fill(1200-displayword);
    text('This shouldn\'t take too long',100+plus,110);
  } else if (displayword < 1400){
    fill(255-Math.abs(1400-displayword));
    text('It\'s taking longer than usual',100+plus,110);
  } else if (displayword < 1900){
    fill(255);
    text('It\'s taking longer than usual',100+plus,110);
  } else if (displayword < 2000){
    fill(255-Math.abs(1900-displayword));
    text('It\'s taking longer than usual',100+plus,110);
  } else if (displayword < 2200){
    if (device == 'mobile'){ plus += 35;}
    fill(255-Math.abs(2200-displayword));
    text('Auto-refreshing in',100+plus,110);
  } else {
    if (device == 'mobile'){ plus += 35;}
    fill(255);
    text('Auto-refreshing in',100+plus,110);
  }
  
  let dist;
  if (device == 'mobile'){
    dist = 222.5;
  } else {
    dist = 305;
  }
  
  if (displayword < 2000){
  } else if (displayword < 2200){
    fill(255-(Math.abs(2200-displayword)));
    text('3',dist+plus,110);
  } else if (displayword < 2200+(frate*5)){
    fill(255);
    text('3',dist+plus,110);
  } else if (displayword < 2425+(frate*5)){
    fill(255-(Math.abs(2225+(frate*5)-displayword)));
    text('3',dist+plus,110);
  } else if (displayword < 2625+(frate*5)){
    fill(255-(Math.abs(2625+(frate*5)-displayword)));
    text('2',dist+plus,110);
  } else if (displayword < 2200+(frate*12)){
    fill(255);
    text('2',dist+plus,110);
  } else if (displayword < 2425+(frate*12)){
    fill(255-(Math.abs(2225+(frate*12)-displayword)));
    text('2',dist+plus,110);
  } else if (displayword < 2625+(frate*12)){
    fill(255-(Math.abs(2625+(frate*12)-displayword)));
    text('1',dist+plus,110);
  } else if (displayword < 2200+(frate*20)){
    fill(255);
    text('1',dist+plus,110);
    if (autorefresh == 0){
      location.reload();
    }
    autorefresh += 1;
  }
    
  strokeWeight(8);
  
  if(t == 0){
    which = Math.floor(Math.random() * 4);
  }
  t += 1;
  
  if (which == 1){
  stroke(255-Math.abs(100-tickercount)+red/6,255-Math.abs(100-tickercount)+green/6,255-Math.abs(100-tickercount)+blue/6);
  fill(255-Math.abs(100-tickercount)+red/6,255-Math.abs(100-tickercount)+green/6,255-Math.abs(100-tickercount)+blue/6);
  ellipse(500,150,10,10);
  
  stroke(255-Math.abs(200-tickercount)+red/6,255-Math.abs(200-tickercount)+green/6,255-Math.abs(200-tickercount)+blue/6);
  fill(255-Math.abs(200-tickercount)+red/6,255-Math.abs(200-tickercount)+green/6,255-Math.abs(200-tickercount)+blue/6);
  ellipse(535.33,200-35.33,10,10);
  
  stroke(255-Math.abs(300-tickercount)+red/6,255-Math.abs(300-tickercount)+green/6,255-Math.abs(300-tickercount)+blue/6);
  fill(255-Math.abs(300-tickercount)+red/6,255-Math.abs(300-tickercount)+green/6,255-Math.abs(300-tickercount)+blue/6);
  ellipse(550,200,10,10);
  
  stroke(255-Math.abs(400-tickercount)+red/6,255-Math.abs(400-tickercount)+green/6,255-Math.abs(400-tickercount)+blue/6);
  fill(255-Math.abs(400-tickercount)+red/6,255-Math.abs(400-tickercount)+green/6,255-Math.abs(400-tickercount)+blue/6);
  ellipse(535.33,235.33,10,10);
  
  stroke(255-Math.abs(500-tickercount)+red/6,255-Math.abs(500-tickercount)+green/6,255-Math.abs(500-tickercount)+blue/6);
  fill(255-Math.abs(500-tickercount)+red/6,255-Math.abs(500-tickercount)+green/6,255-Math.abs(500-tickercount)+blue/6);
  ellipse(500,250,10,10);
  
  stroke(255-Math.abs(600-tickercount)+red/6,255-Math.abs(600-tickercount)+green/6,255-Math.abs(600-tickercount)+blue/6);
  fill(255-Math.abs(600-tickercount)+red/6,255-Math.abs(600-tickercount)+green/6,255-Math.abs(600-tickercount)+blue/6);
  ellipse(500-35.33,235.33,10,10);
  
  stroke(255-Math.abs(700-tickercount)+red/6,255-Math.abs(700-tickercount)+green/6,255-Math.abs(700-tickercount)+blue/6);
  fill(255-Math.abs(700-tickercount)+red/6,255-Math.abs(700-tickercount)+green/6,255-Math.abs(700-tickercount)+blue/6);
  ellipse(450,200,10,10);
  
  stroke(255-Math.abs(800-tickercount)+red/6,255-Math.abs(800-tickercount)+green/6,255-Math.abs(800-tickercount)+blue/6);
  fill(255-Math.abs(800-tickercount)+red/6,255-Math.abs(800-tickercount)+green/6,255-Math.abs(800-tickercount)+blue/6);
  ellipse(500-35.33,200-35.33,10,10);
    
  if (tickercount < 300){
    stroke(255-Math.abs(-300-tickercount)+red/6,255-Math.abs(-300-tickercount)+green/6,255-Math.abs(-300-tickercount)+blue/6);
    fill(255-Math.abs(-300-tickercount)+red/6,255-Math.abs(-300-tickercount)+green/6,255-Math.abs(-300-tickercount)+blue/6);
    ellipse(500,250,10,10);
    
    stroke(255-Math.abs(-200-tickercount)+red/6,255-Math.abs(-200-tickercount)+green/6,255-Math.abs(-200-tickercount)+blue/6);
    fill(255-Math.abs(-200-tickercount)+red/6,255-Math.abs(-200-tickercount)+green/6,255-Math.abs(-200-tickercount)+blue/6);
    ellipse(500-35.33,235.33,10,10);
  
    stroke(255-Math.abs(-100-tickercount)+red/6,255-Math.abs(-100-tickercount)+green/6,255-Math.abs(-100-tickercount)+blue/6);
    fill(255-Math.abs(-100-tickercount)+red/6,255-Math.abs(-100-tickercount)+green/6,255-Math.abs(-100-tickercount)+blue/6);
    ellipse(450,200,10,10);
    
    stroke(255-Math.abs(tickercount)+red/6,255-Math.abs(tickercount)+green/6,255-Math.abs(tickercount)+blue/6);
    fill(255-Math.abs(tickercount)+red/6,255-Math.abs(tickercount)+green/6,255-Math.abs(tickercount)+blue/6);
    ellipse(500-35.33,200-35.33,10,10);    
  }
  
  changingcolor -= 0.5;
  if (changingcolor >= 1020 && false){
    changingcolor = 255;
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
  
  changingsize += 2;
  
  if (which == 3){
  
  if (changingsize > 150){
    changingsize = 0;
  }
  
  let w = 30-Math.abs(25-changingsize);
  if (w < 0){
    w = 0;
  }
  
  fill(0,100,255);
  stroke(0,100,255);
  ellipse(440,250,w,w);
  
  w = 30-Math.abs(50-changingsize);
  if (w < 0){
    w = 0;
  }
  
  fill(255,0,0);
  stroke(255,0,0);
  ellipse(480,250,w,w);
  
  w = 30-Math.abs(75-changingsize);
  if (w < 0){
    w = 0;
  }
  
  fill(255,255,0);
  stroke(255,255,0);
  ellipse(520,250,w,w);
  
  w = 30-Math.abs(100-changingsize);
  if (w < 0){
    w = 0;
  }
  
  fill(0,225,50);
  stroke(0,225,50);
  ellipse(560,250,w,w);
  }
  
  
  changingcolor += 1;
  if (changingcolor >= 1020){
    changingcolor = 255;
  }
  
  ball2 += 10;
  if (ball2 > 300){
    ball2 = -100;
  }
}
