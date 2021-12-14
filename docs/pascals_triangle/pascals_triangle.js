function setup() {
  createCanvas(6000,4000);
}

var tri = [1,1];
var ypos = 100;
var i = 0;
var len = 1;
var xstart = 2000;
var degits = 1;
var limit = 0;
var end = 39;
var totalpush = 0;
var backcolor = 210;

function draw(){
  if (limit == 0){
    
  window.scroll({
    left: 2600,
    behavior: 'smooth',
     });

  textSize(20);
  ypos = 100;
  tri = [1];
  xstart = 3000;
  totalpush = 0;
  
  j = 0;
  while (j < end){
    
    fill(backcolor);
    rect(0,ypos-20,6000,30);
    
    if (backcolor == 210){
      backcolor = 255;
    } else {
      backcolor = 210;
    }
    i = 0;
    let xpos = xstart;
    while (i < tri.length){
      if (i == 0 || i == tri.length-1){
        fill(225,0,0);
      } else if (i == 1 || i == tri.length-2){
        fill(225,100,0);
      } else if (i == 2 || i == tri.length-3){
        fill(150,150,0);
      } else if (i == 3 || i == tri.length-4){
        fill(0,225,0);
      } else if (i == 4 || i == tri.length-5){
        fill(0,150,150);
      } else if (i == 5 || i == tri.length-6){
        fill(0,0,225);
      } else if (i == 6 || i == tri.length-7){
        fill(150,0,150);
      } else {
        if ((i % 4 == 0 && i < tri.length/2)||((tri.length-i) % 4 == 0 && i >= tri.length/2)){ // || (tri.length-i) % 2 == 0
          fill(0,0,100);
        } else if ((i % 4 == 1 && i < tri.length/2)||((tri.length-i) % 4 == 1 && i >= tri.length/2)){ // || (tri.length-i) % 2 == 0
          fill(0,100,0);
        } else if ((i % 4 == 2 && i < tri.length/2)||((tri.length-i) % 4 == 2 && i >= tri.length/2)){ // || (tri.length-i) % 2 == 0
          fill(100,100,100);
        } else {
          fill(100,0,0);
        }
      }
     
      text(tri[i],xpos,ypos);
      print(tri[i]);
      print('was in');
      xpos += 20*2/3*str(tri[i]).length+10;
      totalpush += str(tri[i]).length;
      i += 1;
    }
    
    newtri = [1];
    scan = '';
    index = 1;
    while (index < tri.length){
      scan = str(tri[index]);
      newtri.push(int(tri[index-1])+int(tri[index]));
      index += 1;
    }
    newtri.push(1);
    
    tri = newtri;
    
    degits = str(tri[round(tri.length/2)]).length;
    
    xstart -= totalpush/1.45+10;
    totalpush = 0;
    ypos += 30;
    j += 1;
  }
  
  limit += 1;
  }
}
