function setup() {
  createCanvas(1023,430);  
}

function preload(){
  img404 = loadImage("404.png");
}

var counter = 0;
var univcount = 0;
var pos404 = 0;
var direction = 'left';
var speed = 50;
var limit = 50;
var allcount = 0;
var rc = [];
var t = 0;
var shouldredirect = false;
var tickercount = 0;
var typingsearch = false;
var query = '';

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

loc = window.location.href;
loc = str(loc);

if (loc.includes('https://skparab1.github.io/search=')){
  query = loc.replace('https://skparab1.github.io/search=','');
  localStorage.setItem('searchquery',query);
  openwindow = "http://skparab1.github.io/search/" +query ;
  window.open(openwindow,"_self");
  print('should have redirected');
  shouldredirect = true;
}
  
function draw() {
  
  if (!shouldredirect){
  
  t += 1;
  
  fill(0);
  rect(0,50,1023,330);
  univcount += 1;
  allcount += 1;
  
  if (counter == 0 || counter == 30){
  rc = [random(150,255),random(150,255),random(150,255)]; }
  
  fill(0);
  textSize(30);
  text('ERROR 404',10,37);
  text('ERROR 404',210,37);
  text('ERROR 404',410,37);
  text('ERROR 404',610,37);
  text('ERROR 404',810,37);
  fill(rc[1],rc[2],rc[0]);
  textSize(45);
  text('You BROKE it! I can\'t find that page!',100,100);
  textSize(30);
  text('But WAIT! Try these things!',300,140);
  
  image(img404,pos404-50,180,200,200);
    
  fill(allcount*2,allcount*2-100,0);
  rect(50,200,200,150);
  fill(0,allcount*2,allcount*2-100);
  rect(300,200,200,150);
  fill(allcount*2-100,0,allcount*2);
  rect(800,200,200,50);
  if (!typingsearch){
    fill(allcount*2-100,150,200);
  } else {
    fill(allcount*2-100,allcount*2,allcount*2);
  }
  rect(800,260,200,75);
  
  textSize(40);
  fill(0);
  text('GitHub',80,220+50);
  text('Website',80,250+60);
  
  text('GitHub',80+255,220+50);
  text('Profile',80+255,250+60);
  
  textSize(17);
  
  text('Lookup your url search',80+300+300+135,230);
  text('Lookup something else',80+300+300+135,250+30);
  text(query,80+300+300+135,250+60);
  line(80+300+300+135,325,80+300+450+135,325);
  
  if (univcount < 200){
    pos404 = pos404 + (600-pos404)/3 ;
  } else if (univcount > 300){
    pos404 = pos404 + (pos404-599)/3; }
  if (univcount > 350){
    univcount = 0;
    pos404 = 0 ;
  }
  
  if (direction == 'left'){
    //pos404 -= speed;
  } else if (direction == 'right'){
    //pos404 += speed;
  }
  
  if (pos404 <= 450-limit){
    direction = 'right';
  } else if (pos404 >= 450+limit){
    direction = 'left';
  }
  
  if (counter == 0){
  fill(random(255),random(255),random(255));
  rect(0,0,200,50); }
  if (counter == 2){
  fill(random(255),random(255),random(255));
  rect(200,0,200,50); }
  if (counter == 4){
  fill(random(255),random(255),random(255));
  rect(400,0,200,50); }
  if (counter == 6){
  fill(random(255),random(255),random(255));
  rect(600,0,200,50); }
  if (counter == 8){
  fill(random(255),random(255),random(255));
  rect(800,0,200,50); }
  if (counter == 10){
  fill(random(255),random(255),random(255));
  rect(1000,0,200,50); }
  
  if (counter == 30){
  fill(random(255),random(255),random(255));
  rect(0,380,200,50); }
  if (counter == 32){
  fill(random(255),random(255),random(255));
  rect(200,380,200,50); }
  if (counter == 34){
  fill(random(255),random(255),random(255));
  rect(400,380,200,50); }
  if (counter == 36){
  fill(random(255),random(255),random(255));
  rect(600,380,200,50); }
  if (counter == 38){
  fill(random(255),random(255),random(255));
  rect(800,380,200,50); }
  if (counter == 40){
  fill(random(255),random(255),random(255));
  rect(1000,380,200,50); }
  
  counter += 1;
  if (counter == 60){
    counter = 0;
  }  
  } else {
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
}

function mousePressed(){
  
  if (mouseX > 50 && mouseX < 250 && mouseY > 200 && mouseY < 350){
    window.open("http://skparab1.github.io","_self");
  }
  if (mouseX > 300 && mouseX < 500 && mouseY > 200 && mouseY < 350){
    window.open("http://github.com/skparab1","_self");
  }
  if (mouseX > 800 && mouseX < 1000 && mouseY > 200 && mouseY < 250){
    window.open("http://skparab1.github.io/search","_self");
  }
  if (mouseX > 800 && mouseX < 1000 && mouseY > 260 && mouseY < 260+75){
    typingsearch = true;
  }
}

function keyPressed(){
  if (typingsearch && keyCode != BACKSPACE && keyCode != DELETE && keyCode != ENTER){
    query += key;
  }
  
  keyCode = '';
}

function keyReleased(){
  if (keyCode == ENTER && typingsearch){
    window.open('http://skparab1.github.io/search/'+query,"_self");
  }
  if ((keyCode == BACKSPACE || keyCode == DELETE) && typingsearch){
    query = query.substring(0, query.length -1);
  }
}
