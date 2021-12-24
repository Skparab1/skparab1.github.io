function setup() {
  createCanvas(windowWidth,windowHeight); //create a canvas sized to the window
  //background(0);
}

function displaykeyboard(xpos,ypos,keysize) { // the function
  clear(); // sort of unnecessary its only there for rendering the text
  
  // initialize stuff
  let lightup = 'on';
  let xdiff = xpos - 100; // these are things for the sizing and position
  let ydiff = ypos - 846;
  let rectx = 100+(50*keysize);
  let buttonnum = 1;
  
  //render the large square 
  fill(150);
  rect(100+xdiff,846+ydiff,1946*keysize,450*keysize);
  
  // render first row of keys (~12345)
  fill(0);
  while (rectx <= 100+(1500*keysize)){ // keep on going till your at the end (for the sizing)
    // the lightup logistics
    if (((buttonnum == 1 && key == '~')||(buttonnum == 2 && key == '1')||(buttonnum == 3 && key == '2')||(buttonnum == 4 && key == '3')||(buttonnum == 5 && key == '4')||(buttonnum == 6 && key == '5')||(buttonnum == 7 && key == '6')||(buttonnum == 8 && key == '7')||(buttonnum == 9 && key == '8')||(buttonnum == 10 && key == '9')||(buttonnum == 11 && key == '0')||(buttonnum == 12 && key == '(')||(buttonnum == 13 && key == ')')) && (lightup == 'on')){     
      fill(200,100,0);
    } else {
      fill(0);
    }
    
    // rendering the actual key
    rect(rectx+xdiff,(860-846)*keysize+846+ydiff,100*keysize,85*keysize);
    
    // for the click activation when you press it
    if (clickedpos[0] > rectx+xdiff && clickedpos[0] < (rectx+xdiff+(100*keysize)) && clickedpos[1] > (860-846)*keysize+846+ydiff && clickedpos[1] <(860-846)*keysize+846+ydiff+(85*keysize)){
      if (buttonnum == 1){ key = '~'; keyPressed(); } else if (buttonnum == 2){ key = '1'; keyPressed(); } else if (buttonnum == 3){ key = '2'; keyPressed(); } else if (buttonnum == 4){ key = '3'; keyPressed(); } else if (buttonnum == 5){ key = '4'; keyPressed(); } else if (buttonnum == 6){ key = '5'; keyPressed(); } else if (buttonnum == 7){ key = '6'; keyPressed(); } else if (buttonnum == 8){ key = '7'; keyPressed(); } else if (buttonnum == 9){ key = '8'; keyPressed(); } else if (buttonnum == 10){ key = '9'; keyPressed(); } else if (buttonnum == 11){ key = '0'; keyPressed(); } else if (buttonnum == 12){ key = '('; keyPressed(); } else if (buttonnum == 13){ key = ')'; keyPressed(); }
      keyCode = '';
    }
    
    // update stuff
    buttonnum += 1;
    rectx += 115*keysize;
  }
  
  buttonnum = 1;
  
  // render the backspace key
  // stimulate the click
  if (clickedpos[0] > rectx+xdiff && clickedpos[0] < rectx+xdiff+(375*keysize) && clickedpos[1] > (860-846)*keysize+846+ydiff && clickedpos[1] < (860-846)*keysize+846+ydiff+(85*keysize)){
    keyCode = BACKSPACE;
    keyReleased();
  }
  // lightup stuff
  if (keyCode == BACKSPACE){
    fill(200,100,0);
  } else {
    fill(0);
  }
  // rendering the key
  rect(rectx+xdiff,(860-846)*keysize+846+ydiff,375*keysize,85*keysize);
  
  // set the starting value
  rectx = 100+(80*keysize);
  // render the qwerty row
  while (rectx <= 100+(1550*keysize)){
    // the lightup stuff
    if (((buttonnum == 2 && key == 'q')||(buttonnum == 3 && key == 'w')||(buttonnum == 4 && key == 'e')||(buttonnum == 5 && key == 'r')||(buttonnum == 6 && key == 't')||(buttonnum == 7 && key == 'y')||(buttonnum == 8 && key == 'u')||(buttonnum == 9 && key == 'i')||(buttonnum == 10 && key == 'o')||(buttonnum == 11 && key == 'p')||(buttonnum == 12 && key == ';')||(buttonnum == 13 && key == ':')) && (lightup == 'on')){      fill(200,100,0);
      fill(200,100,0);
    } else {
      fill(0);
      
    }
    buttonnum -= 1;
    // stimulating the click
    if (clickedpos[0] > rectx+xdiff && clickedpos[0] < (rectx+xdiff+(100*keysize)) && clickedpos[1] > (960-846)*keysize+846+ydiff &&  clickedpos[1] < (960-846)*keysize+846+ydiff+(85*keysize)){
      if (buttonnum == 1){ key = 'q'; keyPressed(); } else if (buttonnum == 2){ key = 'w'; keyPressed(); } else if (buttonnum == 3){ key = 'e'; keyPressed(); } else if (buttonnum == 4){ key = 'r'; keyPressed(); } else if (buttonnum == 5){ key = 't'; keyPressed(); } else if (buttonnum == 6){ key = 'y'; keyPressed(); } else if (buttonnum == 7){ key = 'u'; keyPressed(); } else if (buttonnum == 8){ key = 'i'; keyPressed(); } else if (buttonnum == 9){ key = 'o'; keyPressed(); } else if (buttonnum == 10){ key = 'p'; keyPressed(); } else if (buttonnum == 11){ key = ';'; keyPressed(); } else if (buttonnum == 12){ key = ':'; keyPressed(); }
      keyCode = '';
    }
    
    buttonnum += 2;
    // render the key
    rect(rectx+xdiff,(960-846)*keysize+846+ydiff,100*keysize,85*keysize);
    rectx += 115*keysize;
  }
  
  if (clickedpos[0] > rectx+xdiff && clickedpos[0] < rectx+xdiff+(330*keysize) && clickedpos[1] > (960-846)*keysize+846+ydiff && clickedpos[1] < (960-846)*keysize+846+ydiff+(85*keysize)){
    // hide keys operation
  }
  rect(rectx+xdiff,(960-846)*keysize+846+ydiff,330*keysize,85*keysize);
  
  if (clickedpos[0] > 100+(50*keysize)+xdiff && clickedpos[0] < 100+(50*keysize)+xdiff+(130*keysize) && clickedpos[1] > (960-846)*keysize+846+ydiff && clickedpos[1] < (960-846)*keysize+846+ydiff+(85*keysize)){
    keyCode = TAB;
    keyReleased();
  }
  if (keyCode == TAB){
    fill(200,100,0);
  } else {
    fill(0);
  }
  rect(100+(50*keysize)+xdiff,(960-846)*keysize+846+ydiff,130*keysize,85*keysize);
  rectx = 100+(100*keysize);
  buttonnum = 1;
  while (rectx <= 100+(1550*keysize)){
    if (((buttonnum == 3 && key == 'a')||(buttonnum == 4 && key == 's')||(buttonnum == 5 && key == 'd')||(buttonnum == 6 && key == 'f')||(buttonnum == 7 && key == 'g')||(buttonnum == 8 && key == 'h')||(buttonnum == 9 && key == 'j')||(buttonnum == 10 && key == 'k')||(buttonnum == 11 && key == 'l')||(buttonnum == 12 && key == '.')||(buttonnum == 13 && key == ',')) && (lightup == 'on')){      fill(200,100,0);
      fill(200,100,0);
    } else {
      fill(0);
    }
    if (clickedpos[0] > rectx+xdiff && clickedpos[0] < (rectx+xdiff+(100*keysize)) && clickedpos[1] > (1060-846)*keysize+846+ydiff &&  clickedpos[1] < (1060-846)*keysize+846+ydiff+(85*keysize)){
      if (buttonnum == 3){ key = 'a'; keyPressed(); } else if (buttonnum == 4){ key = 's'; keyPressed(); } else if (buttonnum == 5){ key = 'd'; keyPressed(); } else if (buttonnum == 6){ key = 'f'; keyPressed(); } else if (buttonnum == 7){ key = 'g'; keyPressed(); } else if (buttonnum == 8){ key = 'h'; keyPressed(); } else if (buttonnum == 9){ key = 'j'; keyPressed(); } else if (buttonnum == 10){ key = 'k'; keyPressed(); } else if (buttonnum == 11){ key = 'l'; keyPressed(); } else if (buttonnum == 12){ key = '.'; keyPressed(); } else if (buttonnum == 13){ key = ','; keyPressed(); }
      keyCode = ''; 
    }
    
    buttonnum += 1;
    rect(rectx+xdiff,(1060-846)*keysize+846+ydiff,100*keysize,85*keysize);
    rectx += 115*keysize;
  }
 
  if (clickedpos[0] > 100+(50*keysize)+xdiff && clickedpos[0] < 100+(50*keysize)+xdiff+(270*keysize) && clickedpos[1] > (1060-846)*keysize+846+ydiff && clickedpos[1] < (1060-846)*keysize+846+ydiff+(85*keysize)){
    capslock = !capslock;
  }
  if (capslock){
    keyCode = '';
    key = '';
    fill(200,100,0);
  } else {
    fill(0);
  }
  rect(100+(50*keysize)+xdiff,(1060-846)*keysize+846+ydiff,270*keysize,85*keysize);
  
  if (clickedpos[0] > 100+(50*keysize)+xdiff && clickedpos[0] < 100+(50*keysize)+xdiff+(270*keysize) && clickedpos[1] > (1160-846)*keysize+846+ydiff && clickedpos[1] < (1160-846)*keysize+846+ydiff+(85*keysize)){
    shift = !shift;
  }
  if (shift){
    keyCode = '';
    key = '';
    fill(200,100,0);
  } else {
    fill(0);
  }
  rect(100+(50*keysize)+xdiff,(1160-846)*keysize+846+ydiff,170*keysize,85*keysize);
  
  if (clickedpos[0] > rectx+xdiff && clickedpos[0] < rectx+xdiff+(315*keysize) && clickedpos[1] > (1060-846)*keysize+846+ydiff && clickedpos[1] < (1060-846)*keysize+846+ydiff+(85*keysize)){
    keyCode = ENTER;
    keyReleased();
  }
  if (keyCode == ENTER){
    fill(200,100,0);
  } else {
    fill(0);
  }
  rect(rectx+xdiff,(1060-846)*keysize+846+ydiff,315*keysize,85*keysize);
  rectx = 100+(235*keysize);
  buttonnum = 1;
  while (rectx <= 100+(1490*keysize)){
    if (((buttonnum == 1 && key == 'z')||(buttonnum == 2 && key == 'x')||(buttonnum == 3 && key == 'c')||(buttonnum == 4 && key == 'v')||(buttonnum == 5 && key == 'b')||(buttonnum == 6 && key == 'n')||(buttonnum == 7 && key == 'm')||(buttonnum == 8 && key == '!')||(buttonnum == 9 && key == '?')||(buttonnum == 10 && key == '@')||(buttonnum == 11 && key == '&')) && (lightup == 'on')){      fill(200,100,0);
      fill(200,100,0);
    } else {
      fill(0);
    }
    
    if (clickedpos[0] > rectx+xdiff && clickedpos[0] < (rectx+xdiff+(100*keysize)) && clickedpos[1] > (1160-846)*keysize+846+ydiff && clickedpos[1] < (1160-846)*keysize+846+ydiff+(85*keysize)){
      if (buttonnum == 1){ key = 'z'; keyPressed(); } else if (buttonnum == 2){ key = 'x'; keyPressed(); } else if (buttonnum == 3){ key = 'c'; keyPressed(); } else if (buttonnum == 4){ key = 'v'; keyPressed(); } else if (buttonnum == 5){ key = 'b'; keyPressed(); } else if (buttonnum == 6){ key = 'n'; keyPressed(); } else if (buttonnum == 7){ key = 'm'; keyPressed(); } else if (buttonnum == 8){ key = '!'; keyPressed(); } else if (buttonnum == 9){ key = '?'; keyPressed(); } else if (buttonnum == 10){ key = '@'; keyPressed(); } else if (buttonnum == 11){ key = '&'; keyPressed();}
      keyCode = '';
    }
    
    buttonnum += 1;
    rect(rectx+xdiff,(1160-846)*keysize+846+ydiff,100*keysize,85*keysize);
    rectx += 115*keysize;
  }
  
  if (clickedpos[0] > rectx+xdiff && clickedpos[0] < rectx+xdiff+(315*keysize) && clickedpos[1] > (1160-846)*keysize+846+ydiff && clickedpos[1] < (1160-846)*keysize+846+ydiff+(85*keysize)){
    key = ' ';
    keyPressed();
  }
  if (key == ' '){
    fill(200,100,0);
  } else {
    fill(0);
  }
  rect(rectx+xdiff,(1160-846)*keysize+846+ydiff,400*keysize,85*keysize);
  
  let wrappedText = textWrap(50,typed, true);
  print(wrappedText);
  fill(0);
  textSize(40);
  
  let i = 0;
  while (i < wrappedText.length){
    text(wrappedText[i],100,50+(i*50));
    i += 1;
  }
    
  fill(255);
  textSize(70*keysize);
  text('~    1    2    3    4    5    6    7    8    9    0    (     )    Backspace',100+xdiff+(52*keysize),(925-846)*keysize+846+ydiff);
  textSize(65*keysize);
  text(' Tab  Q    W    E    R    T    Y    U    I    O    P    ;     :      Hide keys ',100+xdiff+(43*keysize),(1025-846)*keysize+846+ydiff);
  text(' CapsLok  A    S    D    F    G    H    J    K    L    .       ,      Enter ',100+xdiff+(43*keysize), (1125-846)*keysize+846+ydiff);
  text(' Shift    Z    X    C    V    B    N    M    !    ?    @    &      SPACE',100+xdiff+(43*keysize), (1225-846)*keysize+846+ydiff);
  
  clickedpos = [0,0];
}

function textWrap(eachlength,text,cutwords){
  // var cutwords will cut the text at the end of the word

  wrapped = [];
  index = 0;
  if (cutwords){
    scanner = '';
    line = '';
    while (index < text.length){
      scanner = text[index];
      line += scanner;
      print(((wrapped.length+1)*eachlength),index);
      if (scanner == ' ' || index > ((wrapped.length+1)*eachlength)){ // && index > (wrapped.length*eachlength)
        wrapped.push(line);
        line = '';
      }
      index += 1;
    }
    if (text.length < eachlength){
      wrapped.push(text);
    }
  } else {
    while (index < text.length){
      wrapped.push(text.substring(index,index+eachlength));
      index += eachlength;
    }
  }
  
  return wrapped;
}

var t = 0.01;
var typed = '';
var clickedpos = [0,0];
var rerender = true;
var rendertimer = 0;
var capslock = false;
var shift = false;

function draw() {
  
  if (rendertimer < 2){
    displaykeyboard(100,200,0.40);
    console.log('rendered');
  }
  
  rendertimer += 1;
  t += 0.001;
}

function mousePressed(){
  clickedpos = [mouseX,mouseY];
  rendertimer = 0;
}

function keyPressed(){
  if (keyCode != BACKSPACE && keyCode != DELETE && keyCode != ENTER && key != 'Meta' && key != 'Alt' && key != 'Control' && key != 'Shift' && key != 'CapsLock' && key != 'Tab' && key != 'ArrowUp' && key != 'ArrowDown' && key != 'ArrowLeft' && key != 'ArrowRight'){
    if (capslock || shift){
      typed += key.toUpperCase();
      shift = false;
    } else {
      typed += key;
    }
    keyCode = '';
  }
  rendertimer = 0;
}

function keyReleased(){
  if (keyCode == BACKSPACE || keyCode == DELETE){
    typed = typed.substring(0, typed.length -1);
    key = '';
  }
  if (keyCode == ENTER){
    // idk do whatever you want
    key = '';
  }
  if (keyCode == TAB){
    // idk do whatever you want
    // probably wont be that useful unless you confugure the browser
    key = '';
  }
  rendertimer = 0;
}
