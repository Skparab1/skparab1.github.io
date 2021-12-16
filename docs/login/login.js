function preload() {
  login = loadTable("logins.csv","csv","header");
}

var usernames;
var password;

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
  usernames = login.getColumn(0);
  passwords = login.getColumn(1);
  
  loc = window.location.href;

  if (loc.includes('https://skparab1.github.io/login/auth=false&pwdchallenge=true&goto=')){
    tolink = loc.replace('https://skparab1.github.io/login/auth=false&pwdchallenge=true&goto=','');
    
  } else {
    if (loc.includes('https://skparab1.github.io/login/')){
      window.open('https://skparab1.github.io/login/auth=false&pwdchallenge=true&goto=https://skparab1.github.io',"_self");
    }
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
var logintimer = 0;
var dimmer = 0;
var authinterface = 'authentication';
var authenticator = 'username';
var username = '';
var password = '';
var incorrect = 100;
var backspacer = 0;

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
  
  if (keyIsDown(BACKSPACE) || keyIsDown(DELETE)){
    backspacer += 1;
    
    if (backspacer % 7 == 0){
      keyCode = BACKSPACE;
      keyReleased();
    }
  }
  
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
  text('Login to skparab1 services',100,75);
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
    fill(255,0,0);
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
  }
  
}

function keyPressed(){
  if (keyCode != BACKSPACE && keyCode != DELETE && keyCode != ENTER && key != 'Meta' && key != 'Alt' && key != 'Control' && key != 'Shift' && key != 'CapsLock' && key != 'Tab' && key != 'ArrowUp' && key != 'ArrowDown' && key != 'ArrowLeft' && key != 'ArrowRight'){
    if (authinterface == 'authentication' && authenticator == 'username'){
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
      let found = false;
      let finder = 0;
      while (finder < usernames.length){
        if (username == usernames[finder] && password == passwords[finder] && logintimer == 0){
          window.open(tolink,"_self");
          found = true;
          logintimer += 1;
        }
        finder += 1;
      }
      
      if (!found){
        incorrect = 0;
      }
    }
  }
  if (keyCode == BACKSPACE || keyCode == DELETE){
    if (authinterface == 'authentication' && authenticator == 'username'){
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
  } else if (mouseX > 380 && mouseX < 335 && mouseY > 380+240 && mouseY < 400 && authinterface == 'authentication'){    
    let found = false;
    let finder = 0;
    while (finder < usernames.length){
      if (username == usernames[finder] && password == passwords[finder] && logintimer == 0){
        window.open(tolink,"_self");
        found = true;
        logintimer += 1;
      }
      finder += 1;
    }
    
    if (!found){
      incorrect = 0;
    }
  }
}
