function preload() {
  redirect = loadTable("redirects.csv","csv","header");
  loading = loadImage("loading.gif");
}

var keyword;
var url;

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
  
  while (true){
    image(loading,500,200,loading.width,loading.height);
  }

  
} else {
  window.open("http:skparab1.github.io/wrongredirect","_self");
}
}
