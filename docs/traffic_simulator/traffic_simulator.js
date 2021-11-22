function setup() {
  createCanvas(windowWidth,windowHeight);
  var r = random(2,6);
  var r1 = random(2,6);
  var r2 = random(2,6);
  var r3 = random(2,6);
}

blinkervar = 0;
changetime = 6.0;
paused = false;
addtime = 10;
addcounter = 0;
tailgate = 100;
lightcounter = -1;
smartrelease = 0;
lastreleased = 0;
timewaiting = 0;
avgwaittime = 0;
totalvehicles = 0;
carcount = 4; // wait for 4 cars to let go
lightchange_alg = 'two straights';

//lights
light1 = 'green';
light2 = 'red';
light3 = 'red';
light4 = 'red';

var l1out = [];
var l2out = [];
var l3out = [];
var l4out = [];

var rcolors = ['orange','blue','red','green','yellow','orange','white','purple','green'];
var rblinkers = ['none','none','right','left','none','none'];

console.log(Math.round(Math.random()*9));
console.log(rcolors[Math.round(Math.random()*9)]);
console.log(rblinkers[Math.round(Math.random()*6)]);

var l1in = [700,rcolors[Math.round(Math.random()*9)],rblinkers[Math.round(Math.random()*6)],600,rcolors[Math.round(Math.random()*9)],rblinkers[Math.round(Math.random()*6)],500,rcolors[Math.round(Math.random()*9)],'right',400,rcolors[Math.round(Math.random()*9)],rblinkers[Math.round(Math.random()*6)],300,rcolors[Math.round(Math.random()*9)],rblinkers[Math.round(Math.random()*6)]];
var l2in = [800,rcolors[Math.round(Math.random()*9)],rblinkers[Math.round(Math.random()*6)],1000,rcolors[Math.round(Math.random()*9)],rblinkers[Math.round(Math.random()*6)],1150,rcolors[Math.round(Math.random()*9)],'right',1250,rcolors[Math.round(Math.random()*9)],rblinkers[Math.round(Math.random()*6)]];
var l3in = [-350,rcolors[Math.round(Math.random()*9)],rblinkers[Math.round(Math.random()*6)],-250,rcolors[Math.round(Math.random()*9)],rblinkers[Math.round(Math.random()*6)],-150,rcolors[Math.round(Math.random()*9)],'none',-50,rcolors[Math.round(Math.random()*9)],rblinkers[Math.round(Math.random()*6)],50,rcolors[Math.round(Math.random()*9)],rblinkers[Math.round(Math.random()*6)]];
var l4in = [0,rcolors[Math.round(Math.random()*9)],rblinkers[Math.round(Math.random()*6)],400,rcolors[Math.round(Math.random()*9)],rblinkers[Math.round(Math.random()*6)]];

totalvehicles = l1in.length+l2in.length+l3in.length+l4in.length;

function randcolor(){
  rc = random(1,8);
  if (rc == 1){
    rc = 'blue';
  } else if (rc == 2){
    rc = 'red';
  } else if (rc == 3){
    rc = 'green';
  } else if (rc == 4){
    rc = 'yellow';
  } else if (rc == 5){
    rc = 'orange';
  } else if (rc == 6){
    rc = 'white';
  } else {
    rc = 'purple';
  }
  return rc;
}

function randblinker(){
  rb = random(1,4);
  if (rb == 1){
    rb = 'right';
  } else if (rc == 2){
    rb = 'left';
  } else {
    rb = 'none';
  }
  return rb;
}

function drawcar(x,y,direction,clr,blinker){
  let changerx = x-400;
  let changery = y-300;
  
  if (direction == 'right'){
    fill(0);
    rect(400+changerx,300+changery,66,25);
    
    if (clr == 'blue'){ fill(0,0,255);} else if (clr == 'red'){ fill(255,0,0);} else if (clr == 'green'){ fill(0,255,0);} else if (clr == 'yellow'){ fill(255,255,0);} else if (clr == 'white'){ fill(255,255,255);} else if (clr == 'orange'){ fill(255,125,0);} else if (clr == 'purple'){ fill(255,0,255);}
    rect(410+changerx,308+changery,40,10);
    rect(460+changerx,300+changery,20,25);
    
    fill(255);
    stroke(255);
    strokeWeight(1);
    line(400+changerx,300+changery,410+changerx,308+changery);
    line(400+changerx,325+changery,410+changerx,318+changery);
    line(460+changerx,300+changery,450+changerx,308+changery);
    line(460+changerx,325+changery,450+changerx,318+changery);
    
    if (blinkervar < 30 && (blinker == 'right' || paused)){
      fill(255,200,0);
      ellipse(400+changerx,325+changery,5,5);
      ellipse(475+changerx,325+changery,5,5);
    } 
    if (blinkervar < 30 && (blinker == 'left' || paused)){
      fill(255,200,0);
      ellipse(400+changerx,300+changery,5,5);
      ellipse(475+changerx,300+changery,5,5);
    }
    
  } else if (direction == 'left'){
    fill(0);
    rect(400+changerx,300+changery,66,25);
    if (clr == 'blue'){ fill(0,0,255);} else if (clr == 'red'){ fill(255,0,0);} else if (clr == 'green'){ fill(0,255,0);} else if (clr == 'yellow'){ fill(255,255,0);} else if (clr == 'white'){ fill(255,255,255);} else if (clr == 'orange'){ fill(255,125,0);} else if (clr == 'purple'){ fill(255,0,255);}
    rect(415+changerx,308+changery,40,10);
    rect(380+changerx,300+changery,20,25);
    
    fill(255);
    stroke(255);
    strokeWeight(1);
    line(400+changerx,300+changery,415+changerx,308+changery);
    line(400+changerx,325+changery,415+changerx,318+changery);
    line(465+changerx,300+changery,455+changerx,308+changery);
    line(465+changerx,325+changery,455+changerx,318+changery);
    
    if (blinkervar < 30 && (blinker == 'right' || paused)){
      fill(255,200,0);
      ellipse(400+changerx-10,300+changery,5,5);
      ellipse(475+changerx-10,300+changery,5,5);
    } 
    if (blinkervar < 30 && (blinker == 'left' || paused)){
      fill(255,200,0);
      ellipse(400+changerx-10,325+changery,5,5);
      ellipse(475+changerx-10,325+changery,5,5);
    }
  } else if (direction == 'down'){
    fill(0);
    rect(400+changerx,300+changery,25,66);
    if (clr == 'blue'){ fill(0,0,255);} else if (clr == 'red'){ fill(255,0,0);} else if (clr == 'green'){ fill(0,255,0);} else if (clr == 'yellow'){ fill(255,255,0);} else if (clr == 'white'){ fill(255,255,255);} else if (clr == 'orange'){ fill(255,125,0);} else if (clr == 'purple'){ fill(255,0,255);}
    rect(407.5+changerx,310+changery,10,40);
    rect(400+changerx,360+changery,25,20);
    fill(255);
    stroke(255);
    strokeWeight(1);
    line(400+changerx,300+changery,407.5+changerx,310+changery);
    line(425+changerx,300+changery,417.5+changerx,310+changery);
    line(400+changerx,360+changery,407.5+changerx,350+changery);
    line(425+changerx,360+changery,417.5+changerx,350+changery);
    
    if (blinkervar < 30 && (blinker == 'right' || paused)){
      fill(255,200,0);
      ellipse(400+changerx,300+changery,5,5);
      ellipse(400+changerx,375+changery,5,5);
    }
    if (blinkervar < 30 && (blinker == 'left' || paused)){
      fill(255,200,0);
      ellipse(425+changerx,300+changery,5,5);
      ellipse(425+changerx,375+changery,5,5);
    }
  } else {
    fill(0);
    rect(400+changerx,300+changery,25,60);
    if (clr == 'blue'){ fill(0,0,255);} else if (clr == 'red'){ fill(255,0,0);} else if (clr == 'green'){ fill(0,255,0);} else if (clr == 'yellow'){ fill(255,255,0);} else if (clr == 'white'){ fill(255,255,255);} else if (clr == 'orange'){ fill(255,125,0);} else if (clr == 'purple'){ fill(255,0,255);}
    rect(407.5+changerx,310+changery,10,40);
    rect(400+changerx,280+changery,25,20);
    
    fill(255);
    stroke(255);
    strokeWeight(1);
    line(400+changerx,300+changery,407.5+changerx,310+changery);
    line(425+changerx,300+changery,417.5+changerx,310+changery);
    line(400+changerx,360+changery,407.5+changerx,350+changery);
    line(425+changerx,360+changery,417.5+changerx,350+changery);
    
    if (blinkervar < 30 && (blinker == 'right' || paused)){
      fill(255,200,0);
      ellipse(425+changerx,285+changery,5,5);
      ellipse(425+changerx,360+changery,5,5);
    }
    if (blinkervar < 30 && (blinker == 'left' || paused)){
      fill(255,200,0);
      ellipse(400+changerx,285+changery,5,5);
      ellipse(400+changerx,360+changery,5,5);
    }
  }
  
}

function draw() {
  
  //setting up the Screen
  createCanvas(windowWidth,windowHeight);
  background(0);
  strokeWeight(1);
   
  //updating variables
  blinkervar += 1;
  if (blinkervar > 45){
    blinkervar = 0;
  }
  if (!paused){
    lightcounter += 1;
  }
  
  lastreleased = smartrelease;
  
  avgwaittime = timewaiting/(l1in.length+l2in.length+l3in.length+l4in.length);
  
  addcounter += 1;
  if (addcounter == addtime*60){
    print('pushed');
    let randadd = random(1,6);
    if (randadd == 2){
      l1in.push(500);
      l1in.push('red');
      l1in.push(randblinker());
      totalvehicles += 1;
    } else if (randadd == 3){
      l2in.push(1200);
      l2in.push('blue');
      l2in.push(randblinker());
      totalvehicles += 1;
    } else if (randadd == 4){
      l3in.push(-50);
      l3in.push('green');
      l3in.push(randblinker());
      totalvehicles += 1;
    } else if (randadd == 5){
      l4in.push(200);
      l4in.push('yellow');
      l4in.push(randblinker());
      totalvehicles += 1;
    }
    addcounter = 0;
  }
  
  let framediff = changetime*60;
  
  if (lightchange_alg == 'one side'){
    if (lightcounter < framediff){
      light1 = 'green';
      light2 = 'red';
      light3 = 'red';
      light4 = 'red';
    } else if (lightcounter < framediff+120){
      light1 = 'yellow';
      light2 = 'red';
      light3 = 'red';
      light4 = 'red';
    } else if (lightcounter < framediff+150){
      light1 = 'red';
      light2 = 'red';
      light3 = 'red';
      light4 = 'red';  
    } else if (lightcounter < framediff+150+framediff){
      light1 = 'red';
      light2 = 'green';
      light3 = 'red';
      light4 = 'red';  
    } else if (lightcounter < framediff+150+framediff+120){
      light1 = 'red';
      light2 = 'yellow';
      light3 = 'red';
      light4 = 'red';  
    } else if (lightcounter < framediff+150+framediff+150){
      light1 = 'red';
      light2 = 'red';
      light3 = 'red';
      light4 = 'red';  
    } else if (lightcounter < framediff+150+framediff+180+framediff){
      light1 = 'red';
      light2 = 'red';
      light3 = 'green';
      light4 = 'red';  
    } else if (lightcounter < framediff+150+framediff+180+framediff+120){
      light1 = 'red';
      light2 = 'red';
      light3 = 'yellow';
      light4 = 'red';  
    } else if (lightcounter < framediff+150+framediff+150+framediff+150){
      light1 = 'red';
      light2 = 'red';
      light3 = 'red';
      light4 = 'red';  
    } else if (lightcounter < framediff+150+framediff+150+framediff+150+framediff){
      light1 = 'red';
      light2 = 'red';
      light3 = 'red';
      light4 = 'green';  
    } else if  (lightcounter < framediff+150+framediff+150+framediff+150+framediff+120){
      light1 = 'red';
      light2 = 'red';
      light3 = 'red';
      light4 = 'yellow';  
    } else if  (lightcounter < framediff+150+framediff+150+framediff+150+framediff+150){
      light1 = 'red';
      light2 = 'red';
      light3 = 'red';
      light4 = 'red';  
    } else if  (lightcounter < framediff+150+framediff+150+framediff+150+framediff+180){
      light1 = 'green';
      light2 = 'red';
      light3 = 'red';
      light4 = 'red';  
      lightcounter = 0;
    } 
  } else if (lightchange_alg == 'stop and go'){
    if (lightcounter < 80){
      light1 = 'green';
      light2 = 'red';
      light3 = 'red';
      light4 = 'red';  
    } else if (lightcounter < 180){
      light1 = 'red';
      light2 = 'red';
      light3 = 'red';
      light4 = 'red';  
    } else if (lightcounter < 300){
      light1 = 'red';
      light2 = 'green';
      light3 = 'red';
      light4 = 'red'; 
    } else if (lightcounter < 360){
      light1 = 'red';
      light2 = 'red';
      light3 = 'red';
      light4 = 'red';   
    } else if (lightcounter < 480){
      light1 = 'red';
      light2 = 'red';
      light3 = 'green';
      light4 = 'red'; 
    } else if (lightcounter < 540){
      light1 = 'red';
      light2 = 'red';
      light3 = 'red';
      light4 = 'red';  
    } else if (lightcounter < 660){
      light1 = 'red';
      light2 = 'red';
      light3 = 'red';
      light4 = 'green'; 
    } else {
      lightcounter = 0;
    } 
  } else if (lightchange_alg == 'two straights'){
    if (lightcounter < framediff){
      light1 = 'green';
      light2 = 'red';
      light3 = 'green';
      light4 = 'red'; 
    } else if (lightcounter < framediff+120){
      light1 = 'yellow';
      light2 = 'red';
      light3 = 'yellow';
      light4 = 'red'; 
    } else if (lightcounter < framediff+150){
      light1 = 'red';
      light2 = 'red';
      light3 = 'red';
      light4 = 'red'; 
    } else if (lightcounter < framediff*3){
      light1 = 'red';
      light2 = 'green';
      light3 = 'red';
      light4 = 'green'; 
    } else if (lightcounter < framediff*3+120){
      light1 = 'red';
      light2 = 'yellow';
      light3 = 'red';
      light4 = 'yellow'; 
    } else if (lightcounter < framediff*3+150){
      light1 = 'red';
      light2 = 'red';
      light3 = 'red';
      light4 = 'red'; 
    } else {
      lightcounter = 0;
    } 
  } else if (lightchange_alg == 'smart sensor' && lightcounter == 0){
    if (Math.max(l1in.length,l2in.length,l3in.length,l4in.length) == l1in.length && lastreleased != 1){
      smartrelease = 1;
    } else if (Math.max(l1in.length,l2in.length,l3in.length,l4in.length) == l2in.length && lastreleased != 2){
      smartrelease = 2;
    } else if (Math.max(l1in.length,l2in.length,l3in.length,l4in.length) == l3in.length && lastreleased != 3){
      smartrelease = 3;
    } else if (Math.max(l1in.length,l2in.length,l3in.length,l4in.length) == l4in.length && lastreleased != 4){
      smartrelease = 4;
    }
  }
  
  if (lightchange_alg == 'smart sensor' && lightcounter < framediff){
    if (smartrelease == 1){ light1 = 'green';} else {light1 = 'red';}
    if (smartrelease == 2){ light2 = 'green';} else {light2 = 'red';}
    if (smartrelease == 3){ light3 = 'green';} else {light3 = 'red';}
    if (smartrelease == 4){ light4 = 'green';} else {light4 = 'red';}
  } else if (lightchange_alg == 'smart sensor' && lightcounter < framediff+120){
    if (smartrelease == 1){ light1 = 'yellow';} else {light1 = 'red';}
    if (smartrelease == 2){ light2 = 'yellow';} else {light2 = 'red';}
    if (smartrelease == 3){ light3 = 'yellow';} else {light3 = 'red';}
    if (smartrelease == 4){ light4 = 'yellow';} else {light4 = 'red';}
  } else if (lightchange_alg == 'smart sensor' && lightcounter < framediff+150){
    light1 = 'red';
    light2 = 'red';
    light3 = 'red';
    light4 = 'red';
  } else if (lightchange_alg == 'smart sensor'){
    lightcounter = -1;
  }
    
  // Drawing the graphics
  fill(200);
  rect(375,0,750,windowHeight);
  fill(0,150,0);
  stroke(0);
  rect(375,0,300,175);
  rect(775,0,300,175);
  rect(375,275,300,200);
  rect(775,275,300,200);
  
  fill(0);
  let i = 10;
  while (i < 500){
    if (i != 190 && i != 250){
      rect(723,i,4,30);
    }
    i += 60;
  }
  
  i = 380;
  while (i < 1023){
    if (i != 680 && i != 740){
      rect(i,225,30,4);
    }
    i += 60;
  }
  
  // templates
  //drawcar(carx,50,'right','red','left');
  //drawcar(carx,100,'left','green','left');
  //drawcar(500,carx-300,'down','green','left');
  //drawcar(700,carx-300,'up','orange','right');
  
  i = 0;
  while (i < l1in.length){
    if (l1in[i] != ''){
      drawcar(740,l1in[i],'up',l1in[i+1],l1in[i+2]);
    }
    
    if (l1in[i] < 210 && l1in[i] != ''){
      if (l1in[i+2] == 'right' && lightchange_alg != 'two straights'){
        l2out.push(l1in[i]+500);
        l2out.push(l1in[i+1]);
        l2out.push('none');
      } else if (l1in[i+2] == 'left' && lightchange_alg != 'two straights'){
        l4out.push(l1in[i]+500);
        l4out.push(l1in[i+1]);
        l4out.push('none');
      } else {
        l3out.push(l1in[i]);
        l3out.push(l1in[i+1]);
        l3out.push('none');
      }
      l1in.splice(i,1);
      l1in.splice(i+1,1);
      l1in.splice(i+2,1);
    } else if ((light1 == 'green' || (Math.abs(l1in[i]-l1in[i-3]) > tailgate && l1in[i] > 300) || l1in[i] < 300) && !paused){
      l1in[i] = l1in[i]-1;
    } else {
      timewaiting += 1;
    }
    i += 3;
  }
  
  i = 0;
  while (i < l2in.length){
    if (l2in[i] != ''){
      drawcar(l2in[i],190,'left',l2in[i+1],l2in[i+2]);
    }
    
    if (l2in[i] < 750 && l2in[i] != ''){
      if (l2in[i+2] == 'right' && lightchange_alg != 'two straights'){
        l3out.push(l2in[i]-550);
        l3out.push(l2in[i+1]);
        l3out.push('none');
      } else if (l2in[i+2] == 'left' && lightchange_alg != 'two straights'){
        l1out.push(l2in[i]-550);
        l1out.push(l2in[i+1]);
        l1out.push('none');
      } else {
        l4out.push(l2in[i]);
        l4out.push(l2in[i+1]);
        l4out.push('none');
      }
      l2in.splice(i,1);
      l2in.splice(i+1,1);
      l2in.splice(i+2,1);
    } else if ((light2 == 'green' || (Math.abs(l2in[i]-l2in[i-3]) > tailgate && l2in[i] > 800) || l2in[i] < 800) && !paused){
      l2in[i] = l2in[i]-1;
    } else {
      timewaiting += 1;
    }
    i += 3;
  }
  
  i = 0;
  while (i < l3in.length){
    if (l3in[i] != ''){
      drawcar(690,l3in[i],'down',l3in[i+1],l3in[i+2]);
    }
    
    if (l3in[i] > 150 && l3in[i] != ''){
      if (l3in[i+2] == 'right'  && lightchange_alg != 'two straights'){
        l4out.push(l3in[i]+525);
        l4out.push(l3in[i+1]);
        l4out.push('none');
      } else if (l3in[i+2] == 'left'  && lightchange_alg != 'two straights'){
        l2out.push(l3in[i]+525);
        l2out.push(l3in[i+1]);
        l2out.push('none');
      } else {
        l1out.push(l3in[i]);
        l1out.push(l3in[i+1]);
        l1out.push('none');
      }
      l3in.splice(i,1);
      l3in.splice(i+1,1);
      l3in.splice(i+2,1);
   // } else if ((light2 == 'green' || (l2in[i]-l2in[i-3] > tailgate && l2in[i] > 800) || l2in[i] < 800) && !paused){
    } else if ((light3 == 'green' || (Math.abs(l3in[i-3]-l3in[i]) > tailgate && l3in[i] < 100) || l3in[i] > 100) && !paused){
      l3in[i] = l3in[i]+1;
    } else {
      timewaiting += 1;
    }
    i += 3;
  }
  
  i = 0;
  while (i < l4in.length){
    if (l4in[i] != ''){
      drawcar(l4in[i],240,'right',l4in[i+1],l4in[i+2]);
    }
    
    if (l4in[i] > 610 && l4in[i] != ''){
      if (l4in[i+2] == 'right'  && lightchange_alg != 'two straights'){
        l1out.push(l4in[i]-410);
        l1out.push(l4in[i+1]);
        l1out.push('none');
      } else if (l4in[i+2] == 'left'  && lightchange_alg != 'two straights'){
        l3out.push(l4in[i]-410);
        l3out.push(l4in[i+1]);
        l3out.push('none');
      } else {
        l2out.push(l4in[i]);
        l2out.push(l4in[i+1]);
        l2out.push('none');
      }
      l4in.splice(i,1);
      l4in.splice(i+1,1);
      l4in.splice(i+2,1);
  //} else if ((light2 == 'green' || (l2in[i]-l2in[i-3] > tailgate && l2in[i] > 800) || l2in[i] < 800) && !paused){
    } else if ((light4 == 'green' || (Math.abs(l4in[i-3]-l4in[i]) > 100 && l4in[i] < 575) || l4in[i] > 575) && !paused){
      l4in[i] = l4in[i]+1;
    } else {
      timewaiting += 1;
    }
    i += 3;
  }
  
  i = 0;
  while (i < l1out.length){
    drawcar(690,l1out[i],'down',l1out[i+1],l1out[i+2]);
    if (!paused){
      l1out[i] = l1out[i]+1;
    }
    i += 3;
  }
  i = 0;
  while (i < l2out.length){
    drawcar(l2out[i],240,'right',l2out[i+1],l2out[i+2]);
    if (!paused){
      l2out[i] = l2out[i]+1;
    }
    i += 3;
  }
  i = 0;
  while (i < l3out.length){
    drawcar(740,l3out[i],'up',l3out[i+1],l3out[i+2]);
    if (!paused){
      l3out[i] = l3out[i]-1;
    }
    i += 3;
  }
  i = 0;
  while (i < l4out.length){
    drawcar(l4out[i],190,'left',l4out[i+1],l4out[i+2]);
    if (!paused){
      l4out[i] = l4out[i]-1;
    }
    i += 3;
  }
  
  // drawing light graphics
  strokeWeight(6);
  fill(0);
  stroke(225);
  line(720,160,800,160);
  line(800,300,800,220); 
  line(740,300,660,300);
  line(660,240,660,160);
  
  strokeWeight(1);
  if (light1 == 'green'){
    fill(0,255,0);
    ellipse(760,160,20,20);
  } else if (light1 == 'yellow'){
    fill(255,255,0);
    ellipse(750,160,20,20);
  } else {
    fill(255,0,0);
    ellipse(740,160,20,20);
  }
  if (light4 == 'green'){
    fill(0,255,0);
    ellipse(800,260,20,20);
  } else if (light4 == 'yellow'){
    fill(255,255,0);
    ellipse(800,250,20,20);
  } else {
    fill(255,0,0);
    ellipse(800,240,20,20);
  }
  if (light3 == 'green'){
    fill(0,255,0);
    ellipse(710,300,20,20);
  } else if (light3 == 'yellow'){
    fill(255,255,0);
    ellipse(700,300,20,20);
  } else {
    fill(255,0,0);
    ellipse(690,300,20,20);
  }
  if (light2 == 'green'){
    fill(0,255,0);
    ellipse(660,185,20,20);
  } else if (light2 == 'yellow'){
    fill(255,255,0);
    ellipse(660,190,20,20);
  } else {
    fill(255,0,0);
    ellipse(660,195,20,20);
  }
  
  // display controls  
  fill(0);
  rect(0,0,375,windowHeight);
  
  if (paused){
    fill(200,100,0);
  } else {
    fill(0,200,0);
  }
  rect(25,50,150,50);
  fill(200,200,0);
  rect(200,50,150,50);
  rect(425,320,200,75);
  fill(255);
  textSize(35);
  text('Simulation Controls',50,35);
  textSize(25);
  text('Run/Pause          Reset',40,80);
  text('Re-Run',470,365);
  fill(0,150,200);
  text('Traffic light algorithm',10,150);
  text('Results:',380,50);
  
  if (lightchange_alg == 'two straights' || lightchange_alg == 'one side'){
    text('Change light after '+str(changetime)+ ' seconds',10,240);
    fill(255);
    rect(10,260,300,10);
    rect(changetime*25+10,250,10,30);
  }
  
  fill(0,150,200);
  text('Allow '+tailgate+ ' pixels tailgate',10,320);
  fill(255);
  rect(10,340,300,10);
  rect((tailgate-90)*2.5,330,10,30);
  
  fill(0,150,200);
  textSize(22);
  text('Randomly add vehicle every '+round(addtime)+ ' sec',10,390);
  fill(255);
  rect(10,410,300,10);
  rect(addtime*25+10,400,10,30);

  textSize(15);
  fill(255);
  if (lightchange_alg == 'one side'){
      text('Lets each side\'s vehicles travel,',10,180);
      text('and then switches to the other sides',10,200);
  }
  if (lightchange_alg == 'two straights'){
      text('Lets two opposite sides of traffic travel at the',10,180);
      text('same time, and then switches to the opposite sides',10,200);
  }
  if (lightchange_alg == 'two straights'){
      text('Lets two opposite sides of traffic travel at the',10,180);
      text('same time, and then switches to the opposite sides',10,200);
  }
  if (lightchange_alg == 'stop and go'){
      text('Replicates a stop sign. One (or more, based on time)',10,180);
      text('vehicle from each side is allowed to go.',10,200);
  }
  if (lightchange_alg == 'smart sensor'){
      text('Replicates a smart sensor system. Lets the side with',10,180);
      text('most vehicles go, and then switches another side',10,200);
  }
  text(lightchange_alg,245,150);
  
  stroke(0);
  fill(0);
  text('Average waiting time '+round(timewaiting/60,2),380,75);
  text('Number of vehicles waiting at, apporaching',380,100);
  text('or have been through intersection '+totalvehicles,380,125);
  text('Results: average waiting time '+round((timewaiting/totalvehicles)/60,2)+' seconds',380,150);
 
}

function mousePressed(){
  if (mouseX > 200 && mouseX < 350 && mouseY > 50 && mouseY < 100){
    location.reload();
  }
  if (mouseX > 25 && mouseX < 175 && mouseY > 50 && mouseY < 100){
    paused = !paused;
  }
  if (mouseX > 425 && mouseX < 625 && mouseY > 320 && mouseY < 395){
    l1out = [];
    l2out = [];
    l3out = [];
    l4out = [];
    l1in = [700,rcolors[Math.round(Math.random()*9)],rblinkers[Math.round(Math.random()*6)],600,rcolors[Math.round(Math.random()*9)],rblinkers[Math.round(Math.random()*6)],500,rcolors[Math.round(Math.random()*9)],'right',400,rcolors[Math.round(Math.random()*9)],rblinkers[Math.round(Math.random()*6)],300,rcolors[Math.round(Math.random()*9)],rblinkers[Math.round(Math.random()*6)]];
    l2in = [800,rcolors[Math.round(Math.random()*9)],rblinkers[Math.round(Math.random()*6)],1000,rcolors[Math.round(Math.random()*9)],rblinkers[Math.round(Math.random()*6)],1150,rcolors[Math.round(Math.random()*9)],'right',1250,rcolors[Math.round(Math.random()*9)],rblinkers[Math.round(Math.random()*6)]];
    l3in = [-350,rcolors[Math.round(Math.random()*9)],rblinkers[Math.round(Math.random()*6)],-250,rcolors[Math.round(Math.random()*9)],rblinkers[Math.round(Math.random()*6)],-150,rcolors[Math.round(Math.random()*9)],'none',-50,rcolors[Math.round(Math.random()*9)],rblinkers[Math.round(Math.random()*6)],50,rcolors[Math.round(Math.random()*9)],rblinkers[Math.round(Math.random()*6)]];
    l4in = [0,rcolors[Math.round(Math.random()*9)],rblinkers[Math.round(Math.random()*6)],400,rcolors[Math.round(Math.random()*9)],rblinkers[Math.round(Math.random()*6)]];

    
    totalvehicles = l1in.length+l2in.length+l3in.length+l4in.length;
    lightcounter = -1;
    smartrelease = 0;
    lastreleased = 0;
    timewaiting = 0;
    avgwaittime = 0;
  }
  if (mouseX < 375 && mouseY > 130 && mouseY < 175){
    if (lightchange_alg == 'two straights'){
      lightchange_alg = 'one side';
    } else if (lightchange_alg == 'one side'){
      lightchange_alg = 'stop and go';
    } else if (lightchange_alg == 'stop and go'){
      lightchange_alg = 'smart sensor';
    } else if (lightchange_alg == 'smart sensor'){
      lightchange_alg = 'two straights';
    }
  }
}

function mouseDragged(){
  if (mouseX > 10 && mouseX < 310 && mouseY > 250 && mouseY < 280){
    changetime = (mouseX-10)/25;
  }
  if (mouseX > 10 && mouseX < 310 && mouseY > 330 && mouseY < 360){
    tailgate = (mouseX)/2.5+90;
  }
  if (mouseX > 10 && mouseX < 310 && mouseY > 400 && mouseY < 430){
    addtime = (mouseX-10)/25;
  }
}
