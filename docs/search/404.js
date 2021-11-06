function setup() {

}

loc = window.location.href;
loc = str(loc);
var t = 0;
  
function draw() {
  
  if (loc.includes('https://skparab1.github.io/search/') && (t == 0)){
  query = loc.replace('https://skparab1.github.io/search=','');
  }
  
  t += 1;
  
  background(0);
  fill(255);
  
  textSize(50);
  text('Your search was '+query,200,200);
  
}
