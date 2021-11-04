function setup() {
  createCanvas(1023,2500);
}

var changingcolor = 0;
var countervar = 0;
var hovercolors1 = [0,0,0];
var hovercolors2 = [0,0,0];
var hovercolors3 = [0,0,0];
var hovercolors4 = [0,0,0];

function getScroll(){
    if (window.pageYOffset != undefined) {
        return [pageXOffset, pageYOffset];
    } else {
        var sx, sy, d = document,
            r = d.documentElement,
            b = d.body;
        sx = r.scrollLeft || b.scrollLeft || 0;
        sy = r.scrollTop || b.scrollTop || 0;
        return [sx, sy];
    }
}


function draw() {
  red = (255-Math.abs(255-changingcolor))+100; //   0          255              
  green = (255-Math.abs(510-changingcolor))+100; // 100        100 
  blue = (255-Math.abs(765-changingcolor))+100; //  255         0       
  if (changingcolor >= 765){                                                        // @765    @1020
    red = (255-Math.abs(1020-changingcolor)) + (255 * ((changingcolor-765)/255)); //   ok        255+255
    green = 100;                                                                  //    ok       
    blue = (255-Math.abs(765-changingcolor)) + (255-(changingcolor-765));           //   ok     
  }
  background(0);
  
  changingcolor += 0.7*5;
  
  let i = countervar;
  
  if (changingcolor >= 1700){
    changingcolor = -150;
    //countervar = 0;
  }
  
  while (i > 0){
    fill((255-Math.abs(255-changingcolor+i))+200,(255-Math.abs(510-changingcolor+i))+200,(255-Math.abs(710-changingcolor+i))+200);

    stroke((255-Math.abs(255-changingcolor+i))+200,(255-Math.abs(510-changingcolor+i))+200,(255-Math.abs(710-changingcolor+i))+200);
    ellipse(512,300-40,i/1.7,i/1.7);
    i -= 1;
  }
  
  strokeWeight(1);
  
  fill(0);
  textSize(35);
  stroke(0);
  text('Skparab1',870/2+10,420/2+10+88-40);
  
  i = 700-countervar;
  
  if (countervar < 450){
    countervar += 5;
  } else if (countervar < 500){
    countervar += (500-countervar)/10;
  }
  
  textSize(70);
  fill(countervar,countervar-150,countervar-300);
  text('Skparab1\'s GitHub website', 50,75);
  
  stroke(0,countervar-50,0);
  if (mouseX > countervar/20 && mouseX < countervar/20+300 && mouseY > 125 && mouseY < 125+150 && hovercolors1[1] <= 100){
    hovercolors1 = [hovercolors1[0], hovercolors1[1]+10, hovercolors1[2]];
  } else if (mouseX > countervar/20 && mouseX < countervar/20+300 && mouseY > 125 && mouseY < 125+150){
  } else if (hovercolors1[1] > 0){
    hovercolors1 = [hovercolors1[0], hovercolors1[1]-10, hovercolors1[2]];
  }
  fill(hovercolors1[0], hovercolors1[1], hovercolors1[2]);
  rect(countervar/20,125,300,150);
  fill(0,countervar-50,0);
  stroke(0);
  textSize(35);
  text("Skparab1's",countervar/20+10,185);
  text("Website hostings",countervar/20+10,225);
  
  stroke(0,0,countervar-50);
  if (mouseX > 750-countervar/20 && mouseX < 750-countervar/20+260 && mouseY > 125 && mouseY < 125+150 && hovercolors2[2] <= 100){
    hovercolors2 = [hovercolors2[0], hovercolors2[1], hovercolors2[2]+10];
  } else if (mouseX > 750-countervar/20 && mouseX < 750-countervar/20+260 && mouseY > 125 && mouseY < 125+150){
  } else if (hovercolors2[2] > 0){
    hovercolors2 = [hovercolors2[0], hovercolors2[1], hovercolors2[2]-10];
  }
  fill(hovercolors2[0], hovercolors2[1], hovercolors2[2]);
  rect(750-countervar/20,125,260,150);
  fill(0,0,countervar-50);
  stroke(0);
  text("Skparab1's",750-countervar/20+10,185);
  text("Github Repos",750-countervar/20+10,225);
  
  stroke(countervar-150,0,0);
  if (mouseX > countervar/20 && mouseX < countervar/20+300 && mouseY > 310 && mouseY < 310+75 && hovercolors3[0] <= 100){
    hovercolors3 = [hovercolors3[0]+10, hovercolors3[1], hovercolors3[2]];
  } else if (mouseX > countervar/20 && mouseX < countervar/20+300 && mouseY > 310 && mouseY < 310+75){
  } else if (hovercolors3[0] > 0){
    hovercolors3 = [hovercolors3[0]-10, hovercolors3[1], hovercolors3[2]];
  }
  fill(hovercolors3[0], hovercolors3[1], hovercolors3[2]);
  rect(countervar/20,310,300,75);
  fill(countervar-150,0,0);
  stroke(0);
  textSize(23);
  text("Articles written by Skparab1",countervar/20+10,363);
  
  stroke(countervar-150,countervar-150,0);
  if (mouseX > 750-countervar/20 && mouseX < 750-countervar/20+260 && mouseY > 310 && mouseY < 310+75 && hovercolors4[1] <= 100){
    hovercolors4 = [hovercolors4[0]+10, hovercolors4[1]+10, hovercolors4[2]];
  } else if (mouseX > 750-countervar/20 && mouseX < 750-countervar/20+260 && mouseY > 310 && mouseY < 310+75){
  } else if (hovercolors4[1] > 0){
    hovercolors4 = [hovercolors4[0]-10, hovercolors4[1]-10, hovercolors4[2]];
  }
  fill(hovercolors4[0], hovercolors4[1], hovercolors4[2]);
  rect(750-countervar/20,310,260,75);
  fill(countervar-150,countervar-150,0);
  stroke(0);
  text("Program solutions",750-countervar/20+10,363);
  
  fill(0,245,0);
  textSize(70);
  text('________________________________________________________________________________________________________________________________________________________________________________________________________________________________________',0,620);
  text('Website hostings',200,700);
  text('________________________________________________________________________________________________________________________________________________________________________________________________________________________________________',0,730);

  fill(200,0,200);
  rect(75,775,400,100);
  fill(0,200,200);
  rect(550,775,400,100);
  fill(200,100,0);
  rect(75,900,400,100);
  fill(0,200,100);
  rect(550,900,400,100);
  
  fill(0);
  textSize(50);
  text('Expixel Pro',100,825);
  text('Binary converter',560,825);
  textSize(40);
  text('Encryption code GUI',95,950);
  text('Graphics Website',560,950);
  textSize(20);
  fill(255);
  text('Free and open source image editor',95,860);
  text('Binary <--> Decimal calculator',560,860);
  text('GUI of Encryption code',95,985);
  text('Graphics website of Encryption code',560,985);


  fill(0,0,245);
  textSize(70);
  text('________________________________________________________________________________________________________________________________________________________________________________________________________________________________________',0,1120);
  text('Popular github repos',175,1200);
  text('________________________________________________________________________________________________________________________________________________________________________________________________________________________________________',0,1230);

  fill(200,0,200);
  rect(75,775+500,400,100);
  fill(0,200,200);
  rect(550,775+500,400,100);
  fill(200,100,0);
  rect(75,900+500,400,100);
  fill(0,200,100);
  rect(550,900+500,400,100);
  fill(200,0,100);
  rect(75,1025+500,400,100);
  fill(0,100,200);
  rect(550,1025+500,400,100);
  fill(100,0,200);
  rect(75,1025+125+500,400,100);
  fill(100,200,0);
  rect(550,1025+125+500,400,100);
  fill(100,0,200);
  rect(75,1025+125+500,400,100);
  fill(100,200,0);
  rect(550,1025+125+500,400,100);  
  fill(200,100,200);
  rect(75,1025+125+125+500,400,100);
  fill(0,0,200);
  rect(550,1025+125+125+500,400,100);
  fill(200,0,0);
  rect(75,1025+125+125+125+500,400,100);
  fill(0,200,0);
  rect(550,1025+125+125+125+500,400,100);
  
  
  fill(0);
  textSize(50);
  text('Pong',100,825+500);
  text('Inkball',560,825+500);
  textSize(40);
  text('Encryption code',95,950+500);
  text('Randomize Algorithm',560,950+500);
  text('Ezpixel Pro',95,1025+500+40);
  text('Battleship',560,1025+500+40);
  text('Binary converter',95,1025+500+125+40);
  text('Flappy bird',560,1025+500+125+40);
  text('Js interactives',95,1025+500+125+125+40);
  text('Math programs',560,1025+500+125+125+40);
  text('Encryption code GUI',95,1025+500+125+125+125+40);
  text('Data Organizers',560,1025+500+125+125+125+40);
  textSize(20);
  fill(255);
  text('One of the first video games in Python',95,860+500);
  text('A Microsoft Video game is JavaScript',560,860+500);
  text('An Encryption Program in Python',95,985+500);
  text('A randomizing algorithm in Python',560,985+500);
  text('An Image editor in JavaScript',95,1025+75+500);
  text('The Board game Battleship in Python',560,1025+75+500);
  text('A Binary <--> Decimal Calculator in Js',95,1025+75+500+125);
  text('The Video game Flappy Bird in Python',560,1025+75+500+125);
  text('Javascript interactive programs',95,1025+75+500+125+125);
  text('Mathematical calculator programs',560,1025+75+500+125+125);
  text('GUI of Encryption code',95,1025+75+500+125+125+125);
  text('Data analyzing and sorting programs',560,1025+75+500+125+125+125);
  
  textSize(40);
  fill(100,200,0);
  text('That\'s it! You\'ve reached the end of this webpage!',100,2200);
  fill(0,200,100);
  text('Couldn\'t find what you\'re looking for? ',100,2300);
  fill(0);
  stroke(200,0,100);  
  rect(375,2350,275,70);
  fill(100,0,200);
  text('Try Skparab1\'s GitHub Profile. ',100,2400);
  
  fill(0,100,200);
  rect(0,2445,1200,100);
  fill(0);
  text('Back to top',350,2480);
  
}

function mouseClicked(){
  if (mouseX > countervar/20 && mouseX < countervar/20+300 && mouseY > 125 && mouseY < 125+150){
    window.scroll({
    top: 600,
    behavior: 'smooth',
     });
  } else if (mouseX > 750-countervar/20 && mouseX < 750-countervar/20+260 && mouseY > 125 && mouseY < 125+150){
    window.scroll({
    top: 1100,
    behavior: 'smooth',
     });
  } else if (mouseY > 2445){
    window.scroll({
    top: 0,
    behavior: 'smooth',
     });
  } else if (mouseX > 75 && mouseX < 475 && mouseY > 775 && mouseY < 875){
    window.open('http://skparab1.github.io/ezpixel-pro');
  } else if (mouseX > 550 && mouseX < 950 && mouseY > 775 && mouseY < 875){
    window.open('http://skparab1.github.io/binary-converter');
  } else if (mouseX > 75 && mouseX < 475 && mouseY > 900 && mouseY < 1000){
    window.open('http://skparab1.github.io/encryption-code-gui');
  } else if (mouseX > 550 && mouseX < 950 && mouseY > 900 && mouseY < 1000){
    window.open('http://encryptioncode.github.io/graphic-website');
  } else if (mouseX > 750-countervar/20 && mouseX < 750-countervar/20+260 && mouseY > 310 && mouseY < 310+75){
    window.open('http://github.com/skparab1/python-samples');
  } else if (mouseX > 75 && mouseX < 475 && mouseY > 775+500 && mouseY < 775+600){
    window.open('http://github.com/skparab1/pong');
  } else if (mouseX > 550 && mouseX < 950 && mouseY > 775+500 && mouseY < 775+600){
    window.open('http://github.com/skparab1/inkball');
  } else if (mouseX > 75 && mouseX < 475 && mouseY > 900+500 && mouseY < 900+600){
    window.open('http://github.com/skparab1/encryption-code');
  } else if (mouseX > 550 && mouseX < 950 && mouseY > 900+500 && mouseY < 900+600){
    window.open('http://github.com/skparab1/randomizing-algorithm');
  } else if (mouseX > 75 && mouseX < 475 && mouseY > 1025+500 && mouseY < 1025+600){
    window.open('http://github.com/skparab1/ezpixel-pro');
  } else if (mouseX > 550 && mouseX < 950 && mouseY > 1025+500 && mouseY < 1025+600){
    window.open('http://github.com/skparab1/battleship');
  } else if (mouseX > 75 && mouseX < 475 && mouseY > 1025+500+125 && mouseY < 1025+600+125){
    window.open('http://github.com/skparab1/binary-converter');
  } else if (mouseX > 550 && mouseX < 950 && mouseY > 1025+500+125 && mouseY < 1025+600+125){
    window.open('http://github.com/skparab1/flappy-bird');
  } else if (mouseX > 75 && mouseX < 475 && mouseY > 1025+500+125+125 && mouseY < 1025+125+125+600){
    window.open('http://github.com/skparab1/javascript-interactives');
  } else if (mouseX > 550 && mouseX < 950 && mouseY > 1025+500+125+125 && mouseY < 1025+600+125+125){
    window.open('http://github.com/skparab1/math-codes');
  } else if (mouseX > 75 && mouseX < 475 && mouseY > 1025+500+125+125+125 && mouseY < 1025+600+125+125+125){
    window.open('http://github.com/skparab1/encryption-code-gui');
  } else if (mouseX > 550 && mouseX < 950 && mouseY > 1025+500+125+125+125 && mouseY < 1025+600+125+125+125){
    window.open('http://github.com/skparab1/data-organizers');
  } else if (mouseX > 375 && mouseX < 375+275 && mouseY > 2350 && mouseY < 2370+70){
    window.open('http://github.com/skparab1');
  }
}
