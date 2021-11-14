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

x = 0;

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
  
  tickercount += 10;
  if (tickercount > 600){
    tickercount = -155;
  }
}
