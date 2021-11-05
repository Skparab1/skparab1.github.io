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

loc = window.location.href;
loc = str(loc);

if (loc.includes('https://skparab1.github.io/search=') && (t == 0)){
  query = loc.replace('https://skparab1.github.io/search=','');
  localStorage.setItem('searchquery',query);
  window.open("http:skparab1.github.io/search","_self");
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
  rect(800,200,200,150);
  
  textSize(40);
  fill(0);
  text('GitHub',80,220+50);
  text('Website',80,250+60);
  
  text('GitHub',80+255,220+50);
  text('Profile',80+255,250+60);
  
  textSize(32);
  
  text('Lookup',80+300+300+135,220+50);
  text('your search',80+300+300+135,250+60);
  
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
  }
}

function mouseClicked(){
  
  if (mouseX > 50 && mouseX < 250 && mouseY > 200 && mouseY < 350){
    window.open("http://skparab1.github.io","_self");
  }
  if (mouseX > 300 && mouseX < 500 && mouseY > 200 && mouseY < 350){
    window.open("http://github.com/skparab1","_self");
  }
  if (mouseX > 800 && mouseX < 1000 && mouseY > 200 && mouseY < 350){
    window.open("http:skparab1.github.io/search","_self");
  }
}
