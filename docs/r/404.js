function preload() {
  redirect = loadTable("redirects.csv","csv","header");
}

var keyword;
var url;

function setup() {
  createCanvas(1023,430);  
  keyword = redirect.getColumn(0);
  url = redirect.getColumn(1);
} 

loc = window.location.href;

var foundredirect = false;
var tickercount = 0;

print(keyword);

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
    window.open("http:skparab1.github.io/wrongredirect","_self");
  }
  
  
  background(0);
  textSize(25);
  stroke(0);
  fill(255);
  strokeWeight(3);

  text('Redirecting to your requested webpage......',100,75);
  text('This shouldn\'t take too long',100,110);
  strokeWeight(8);

  stroke(255);
  line(500,200,500,150);
  stroke(225);
  line(500,200,525,175);
  stroke(195);
  line(500,200,550,200);
  stroke(165);
  line(500,200,525,225);
  stroke(135);
  line(500,200,500,250);
  stroke(105);
  line(500,200,475,225);
  stroke(75);
  line(500,200,450,200);
  stroke(25);
  line(500,200,475,175);

  tickercount += 200;
  if (tickercount > 1785+225+127.5){
    tickercount = 0;
  }
  
} else {
  window.open("http:skparab1.github.io/wrongredirect","_self");
}
