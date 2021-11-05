function setup() {
  createCanvas(1023,430);  
}


var query = localStorage.getItem('searchquery') || '';
var loc;

function draw() {

  background(0);
  fill(255);
  
  textSize(50);
  text('Your search was '+query,200,200);
}
