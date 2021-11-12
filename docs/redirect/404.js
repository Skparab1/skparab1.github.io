function preload() {
  redirect = loadTable("redirects.csv","csv","header");
}

var keyword;
var url;

function setup() {
  createCanvas(100,100);
  keyword = redirect.getColumn(0);
  url = redirect.getColumn(1);
}

loc = window.location.href;

var foundredirect = false;
var tickercount = 0;

function draw(){
  
if (loc.includes('https://skparab1.github.io/redirect/')){
  red = loc.replace('https://skparab1.github.io/redirect/','');
  
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
    location.href = openwindow;
    window.open(openwindow,"_self");
  } else {
    window.open("http:skparab1.github.io/404","_self");
  }
  
  
  background(0);
  textSize(25);
  stroke(0);
  fill(255);
  strokeWeight(3);
  
  text('Redirecting',500,75);
  strokeWeight(8);
  
  stroke(255-Math.abs(0-tickercount));
  line(500,200,500,150);
  stroke(255-Math.abs(255-tickercount));
  line(500,200,525,175);
  stroke(255-Math.abs(510-tickercount));
  line(500,200,550,200);
  stroke(255-Math.abs(765-tickercount));
  line(500,200,525,225);
  stroke(255-Math.abs(1020-tickercount));
  line(500,200,500,250);
  stroke(255-Math.abs(1275-tickercount));
  line(500,200,475,225);
  stroke(255-Math.abs(1530-tickercount));
  line(500,200,450,200);
  
  if (tickercount > 0){
    stroke(255-Math.abs(1785-tickercount));
    line(500,200,475,175);
  } else {
    stroke(255-Math.abs(-255-tickercount));
    line(500,200,475,175);
  }
  
  tickercount += 50;
  if (tickercount > 1785+225+127.5){
    tickercount = 0;
  }
  
} else {
  window.open("http:skparab1.github.io/404","_self");
}
}
