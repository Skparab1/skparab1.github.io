function setup() {
  createCanvas(1023,430);  
}

loc = window.location.href;
var t = 0;
  
function draw() {
  
  loc = str(loc);
  
  if (loc.includes('https://skparab1.github.io/search/')){
    query = loc.replace('https://skparab1.github.io/search/','');
  } else if (t == 0){
    query = '';
  }
  
  t += 1;
  
  background(0);
  fill(255);
  
  textSize(50);
  text('Your search was '+query,200,200);
  
}
