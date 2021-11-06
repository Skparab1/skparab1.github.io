function setup() {

}

loc = window.location.href;
loc = str(loc);
  
function draw() {
  
  if (loc.includes('https://skparab1.github.io/search/') && (t == 0)){
  query = loc.replace('https://skparab1.github.io/search=','');
  }
  
  background(0);
  fill(255);
  
  textSize(50);
  text('Your search was '+query,200,200);
  
}
