function preload() {
  redirect = loadTable("redirects.csv","csv","header");
}

var keyword;
var url;
var tickercount = -155;
var pwdchallenge = false;
var foundpwd = '';
var openwindow = '';

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
  if (device != 'mobile'){
    createCanvas(windowWidth,windowHeight);
  } else {
    createCanvas(1023,420);
  }
  keyword = redirect.getColumn(0);
  url = redirect.getColumn(1);
  pswd = redirect.getColumn(2);
  
  loc = window.location.href;
  
  var foundredirect = false;
  var tickercount = 0;
  
  print(keyword);
  
  if (loc.includes('https://skparab1.github.io/p/')){
    red = loc.replace('https://skparab1.github.io/p/','');
    
    console.log('was in and should have gotten password');
    
    i = 1;
    scanner = '';
    while (i <= keyword.length && foundredirect == false){
      scanner = keyword[i];
      if (scanner == red){
        foundredirect = true;
        foundpwd = pswd[i];
        openwindow = url[i];
        openwindow = openwindow.replace("https://",'');
        openwindow = 'https://'+openwindow;
      }
      
      i += 1;
    }
    
    if (foundpwd == ''){
      pwdchallenge = true;
    } else {
      pwdchallenge = false;
    }
    
    if (foundredirect && pwdchallenge){
      //location.href = openwindow;
      window.open(openwindow,"_self");
    } else if (!foundredirect){
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

console.log('done with setup');

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
var code = '';
var redirecttimer = 0;
var dimmer = 0;
var authinterface = 'default';
var authenticator = 'username';
var username = '';
var password = '';
var incorrect = 100;
var backspacer = 0;

console.log(foundpwd);

function drawnicerect(x,y,xsize,ysize,incolor,outcolor){
  let xchange = x-250;
  let ychange = y-15;
  let xsizechange = xsize-200;
  let ysizechange = ysize-60;
  
  fill(incolor);
  stroke(outcolor);
  rect(250+xchange,15+ychange,xsize,ysize);
  fill(outcolor);
  stroke(outcolor);
  rect(250+xchange,15+ychange,15,15);
  rect(250+xchange,60+ychange+ysizechange,15,15);
  rect(435+xchange+xsizechange,15+ychange,15,15);
  rect(435+xchange+xsizechange,60+ychange+ysizechange,15,15);
  fill(incolor);
  stroke(incolor);
  ellipse(265+xchange,30+ychange,24.5,24.5);
  ellipse(435+xchange+xsizechange,30+ychange,24.5,24.5);
  ellipse(265+xchange,60+ychange+ysizechange,24.5,24.5);
  ellipse(435+xchange+xsizechange,60+ychange+ysizechange,24.5,24.5);
}

function draw(){
  
  console.log('in draw');
  resizeCanvas(windowWidth, windowHeight);
  
  if (!pwdchallenge){
    if (keyIsDown(BACKSPACE) || keyIsDown(DELETE)){
      backspacer += 1;
      
      if (backspace % 20 == 0){
        keyCode = BACKSPACE;
        keyReleased();
      }
    }
    
    if (authinterface == 'default'){
      background(0);
      
      drawnicerect(250,150,500,65,200-dimmer,0);
      fill(0,255-dimmer,100-dimmer);
      stroke(0,0,0);
      textSize(50);
      text('This Webpage has restricted access',100,75);
      textSize(35);
      text('Enter access code to continue',250,120);
      fill(255-dimmer,0,0);
      stroke(200-dimmer);
      text(code,260,195);
      
      if (mouseX > 250 && mouseX < 750 && mouseY > 300 && mouseY < 365){
        drawnicerect(250,300,500,65,75,0);
      } else {
        drawnicerect(250,300,500,65,0,0);
      }
      fill(0);
      text('Alternate universal login',300,345);
      
      if (code == foundpwd){
        dimmer += 10;
      }
      if (code == foundpwd && redirecttimer == 0 && dimmer == 150){
        window.open(openwindow,"_self"); 
        pwdchallenge = true;
        redirecttimer += 1;
      }
    } else {
      background(0);
      
      if (authenticator == 'username'){
        drawnicerect(250,150,500,65,225,0);
        drawnicerect(250,235,500,65,150,0);
      } else {
        drawnicerect(250,150,500,65,150,0);
        drawnicerect(250,235,500,65,225,0);
      }
      fill(0,255-dimmer,100-dimmer);
      stroke(0,0,0);
      textSize(50);
      text('This Webpage has restricted access',100,75);
      textSize(35);
      text('Please Authenticate',300,120);
      text('Username        ',75,190);
      text('Password        ',75,280);
      fill(255-dimmer,0,0);
      stroke(200-dimmer);
      text(username,260,195);
      
      incorrect += 1;
      if (incorrect < 100){
        stroke(0);
        textSize(20);
        text('Username or password incorrect',260,320);
      }
      
      stroke(255);
      textSize(35);
      let displaypass = '';
      let y = 0;
      while (y < password.length){
        displaypass += '•';
        y += 1;
      }
      text(displaypass,260,195+90);
      
      if (username != '' && password != ''){
        drawnicerect(380,335,240,65,[255,200,0],0);
        fill(0);
        stroke(255,200,0);
        text('Authenticate',405,380);
      } else if (mouseX > 400 && mouseX < 600 && mouseY > 335 && mouseY < 400){
        drawnicerect(400,335,200,65,150,0);
        fill(0);
        stroke(0);
        text('Go back',430,380);
      } else {
        drawnicerect(400,335,200,65,100,0);
        fill(0);
        stroke(0);
        text('Go back',430,380);
      }
      
    }
  } else {
  if (device != 'mobile'){
    resizeCanvas(windowWidth, windowHeight);
  }

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
  print(frameRate());
  tickercount += (Math.floor(600/frameRate()));
  if (tickercount > 600){
    tickercount = -155;
  }
  ballbouncer += (Math.floor(420/frameRate()));
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
  
  changingsize += (Math.floor(120/frameRate()));
  
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
}

function keyPressed(){
  if (keyCode != BACKSPACE && keyCode != DELETE && keyCode != ENTER && key != 'Meta' && key != 'Alt' && key != 'Control' && key != 'Shift' && key != 'CapsLock' && key != 'Tab' && key != 'ArrowUp' && key != 'ArrowDown' && key != 'ArrowLeft' && key != 'ArrowRight'){
    if (authinterface == 'default'){
      code += key;
    } else if (authinterface == 'authentication' && authenticator == 'username'){
      username += key;
    } else if (authinterface == 'authentication' && authenticator == 'password'){
      password += key;
    }
  }
  if (key == 'ArrowUp' || key == 'ArrowDown' || key == 'ArrowLeft' || key == 'ArrowRight'){
    authinterface = 'authentication';
  }
}

function keyReleased(){
  if (keyCode == ENTER){
    // go
    if (authinterface == 'authentication' && authenticator == 'username'){
      authenticator = 'password';
      keyCode = '';
    } else if (authinterface == 'authentication' && authenticator == 'password'){
      if (username == keyword[0] && password == pswd[0]){
        pwdchallenge = true;
        window.open(openwindow,"_self"); 
      } else {
        incorrect = 0;
      }
    }
  }
  if (keyCode == BACKSPACE || keyCode == DELETE){
    if (authinterface == 'default'){
      code = code.substring(0, code.length -1);
    } else if (authinterface == 'authentication' && authenticator == 'username'){
      username = username.substring(0, username.length -1);
    } else if (authinterface == 'authentication' && authenticator == 'password'){
      password = password.substring(0, password.length -1);
    }

  }
}

function mousePressed(){
  if (mouseX > 250 && mouseX < 750 && mouseY > 300 && mouseY < 365 && authinterface == 'default'){    
    authinterface = 'authentication';
  } else if (mouseX > 400 && mouseX < 600 && mouseY > 335 && mouseY < 400 && authinterface == 'authentication'){
    authinterface = 'default';
  } else if (mouseX > 250 && mouseX < 750 && mouseY > 150 && mouseY < 150+65 && authinterface == 'authentication'){    
    authenticator = 'username';
  } else if (mouseX > 250 && mouseX < 750 && mouseY > 235 && mouseY < 300 && authinterface == 'authentication'){    
    authenticator = 'password';
  }
}
