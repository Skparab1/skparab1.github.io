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
  
  // the tab key
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
  
  // setting up the start position
  rectx = 100+(100*keysize);
  buttonnum = 1;
  
  // render the asdf row
  while (rectx <= 100+(1550*keysize)){
    // the light up stuff
    if (((buttonnum == 3 && key == 'a')||(buttonnum == 4 && key == 's')||(buttonnum == 5 && key == 'd')||(buttonnum == 6 && key == 'f')||(buttonnum == 7 && key == 'g')||(buttonnum == 8 && key == 'h')||(buttonnum == 9 && key == 'j')||(buttonnum == 10 && key == 'k')||(buttonnum == 11 && key == 'l')||(buttonnum == 12 && key == '.')||(buttonnum == 13 && key == ',')) && (lightup == 'on')){      fill(200,100,0);
      fill(200,100,0);
    } else {
      fill(0);
    }
    // stimulating the click for oskeyboard
    if (clickedpos[0] > rectx+xdiff && clickedpos[0] < (rectx+xdiff+(100*keysize)) && clickedpos[1] > (1060-846)*keysize+846+ydiff &&  clickedpos[1] < (1060-846)*keysize+846+ydiff+(85*keysize)){
      if (buttonnum == 3){ key = 'a'; keyPressed(); } else if (buttonnum == 4){ key = 's'; keyPressed(); } else if (buttonnum == 5){ key = 'd'; keyPressed(); } else if (buttonnum == 6){ key = 'f'; keyPressed(); } else if (buttonnum == 7){ key = 'g'; keyPressed(); } else if (buttonnum == 8){ key = 'h'; keyPressed(); } else if (buttonnum == 9){ key = 'j'; keyPressed(); } else if (buttonnum == 10){ key = 'k'; keyPressed(); } else if (buttonnum == 11){ key = 'l'; keyPressed(); } else if (buttonnum == 12){ key = '.'; keyPressed(); } else if (buttonnum == 13){ key = ','; keyPressed(); }
      keyCode = ''; 
    }
    
    buttonnum += 1;
    // render it
    rect(rectx+xdiff,(1060-846)*keysize+846+ydiff,100*keysize,85*keysize);
    rectx += 115*keysize;
  }
 
  // the capslock var setting and mod
  if (clickedpos[0] > 100+(50*keysize)+xdiff && clickedpos[0] < 100+(50*keysize)+xdiff+(270*keysize) && clickedpos[1] > (1060-846)*keysize+846+ydiff && clickedpos[1] < (1060-846)*keysize+846+ydiff+(85*keysize)){
    capslock = !capslock;
  }
  // light up effect
  if (capslock){
    keyCode = ''; // this stuff it there only for the light up effect
    key = '';
    fill(200,100,0);
  } else {
    fill(0);
  }
  // render capslock key
  rect(100+(50*keysize)+xdiff,(1060-846)*keysize+846+ydiff,270*keysize,85*keysize);
  
  // shift button logistics
  if (clickedpos[0] > 100+(50*keysize)+xdiff && clickedpos[0] < 100+(50*keysize)+xdiff+(270*keysize) && clickedpos[1] > (1160-846)*keysize+846+ydiff && clickedpos[1] < (1160-846)*keysize+846+ydiff+(85*keysize)){
    shift = !shift;
  }
  // lightup and clear other lightups
  if (shift){
    keyCode = '';
    key = '';
    fill(200,100,0);
  } else {
    fill(0);
  }
  // render
  rect(100+(50*keysize)+xdiff,(1160-846)*keysize+846+ydiff,170*keysize,85*keysize);
  
  // the enter key stuff
  // stimulate the key press
  if (clickedpos[0] > rectx+xdiff && clickedpos[0] < rectx+xdiff+(315*keysize) && clickedpos[1] > (1060-846)*keysize+846+ydiff && clickedpos[1] < (1060-846)*keysize+846+ydiff+(85*keysize)){
    keyCode = ENTER;
    keyReleased();
  }
  // lightup effect
  if (keyCode == ENTER){
    fill(200,100,0);
  } else {
    fill(0);
  }
  // render key
  rect(rectx+xdiff,(1060-846)*keysize+846+ydiff,315*keysize,85*keysize);
  
  // set starting x position
  rectx = 100+(235*keysize);
  buttonnum = 1;
  
  // render zxcvb row and space key
  while (rectx <= 100+(1490*keysize)){
    // the light up effect
    if (((buttonnum == 1 && key == 'z')||(buttonnum == 2 && key == 'x')||(buttonnum == 3 && key == 'c')||(buttonnum == 4 && key == 'v')||(buttonnum == 5 && key == 'b')||(buttonnum == 6 && key == 'n')||(buttonnum == 7 && key == 'm')||(buttonnum == 8 && key == '!')||(buttonnum == 9 && key == '?')||(buttonnum == 10 && key == '@')||(buttonnum == 11 && key == '&')) && (lightup == 'on')){      fill(200,100,0);
      fill(200,100,0);
    } else {
      fill(0);
    }
    // stimulate keypress for each key
    if (clickedpos[0] > rectx+xdiff && clickedpos[0] < (rectx+xdiff+(100*keysize)) && clickedpos[1] > (1160-846)*keysize+846+ydiff && clickedpos[1] < (1160-846)*keysize+846+ydiff+(85*keysize)){
      if (buttonnum == 1){ key = 'z'; keyPressed(); } else if (buttonnum == 2){ key = 'x'; keyPressed(); } else if (buttonnum == 3){ key = 'c'; keyPressed(); } else if (buttonnum == 4){ key = 'v'; keyPressed(); } else if (buttonnum == 5){ key = 'b'; keyPressed(); } else if (buttonnum == 6){ key = 'n'; keyPressed(); } else if (buttonnum == 7){ key = 'm'; keyPressed(); } else if (buttonnum == 8){ key = '!'; keyPressed(); } else if (buttonnum == 9){ key = '?'; keyPressed(); } else if (buttonnum == 10){ key = '@'; keyPressed(); } else if (buttonnum == 11){ key = '&'; keyPressed();}
      keyCode = '';
    }
    
    buttonnum += 1;
    //render it
    rect(rectx+xdiff,(1160-846)*keysize+846+ydiff,100*keysize,85*keysize);
    rectx += 115*keysize;
  }
  
  // wait whats this for its for the space key oh right
  if (clickedpos[0] > rectx+xdiff && clickedpos[0] < rectx+xdiff+(315*keysize) && clickedpos[1] > (1160-846)*keysize+846+ydiff && clickedpos[1] < (1160-846)*keysize+846+ydiff+(85*keysize)){
    key = ' ';
    keyPressed();
  }
  // lights up stuff
  if (key == ' '){
    fill(200,100,0);
  } else {
    fill(0);
  }
  // render key wait which key the space key oh ok
  rect(rectx+xdiff,(1160-846)*keysize+846+ydiff,400*keysize,85*keysize);
  
  //wrapping text
  let wrappedText = textWrap(50,typed, false); //theoretically making that false a true would cut the text wrap at spaces but that doesn't work right now
  // so it cuts at 50 characters now
  //print(wrappedText); just for checking ok so ill comment it out
  fill(0);
  textSize(40);
  
  // iterates though the list and prints out each line of the wrapped text
  let i = 0;
  while (i < wrappedText.length){
    text(wrappedText[i],100,50+(i*50));
    i += 1;
  }
  
  
  // render all of the letters ( these also have to be resized and repositioned based on the size and postion
  fill(255);
  textSize(70*keysize);
  text('~    1    2    3    4    5    6    7    8    9    0    (     )    Backspace',100+xdiff+(52*keysize),(925-846)*keysize+846+ydiff);
  textSize(65*keysize);
  text(' Tab  Q    W    E    R    T    Y    U    I    O    P    ;     :      Hide keys ',100+xdiff+(43*keysize),(1025-846)*keysize+846+ydiff);
  text(' CapsLok  A    S    D    F    G    H    J    K    L    .       ,      Enter ',100+xdiff+(43*keysize), (1125-846)*keysize+846+ydiff);
  text(' Shift    Z    X    C    V    B    N    M    !    ?    @    &      SPACE',100+xdiff+(43*keysize), (1225-846)*keysize+846+ydiff);
  
  // reset the clickedpos (because you don't want it to keep adding characters to the sting after its clicked
  clickedpos = [0,0];
}

function textWrap(eachlength,text,cutwords){ // the text wrapper
  // var cutwords will cut the text at the end of the word

  wrapped = [];
  index = 0;
  if (cutwords){  // ignore this 
  // its a prototype that doesnt work
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
  } else { // this is the one the works and is used
    while (index < text.length){ // its pretty simple just push substings to the list and return it
      wrapped.push(text.substring(index,index+eachlength));
      index += eachlength;
    }
  }
  
  return wrapped;
}

// intitalize everything
var t = 0.01;
var typed = '';
var clickedpos = [0,0];
var rerender = true;
var rendertimer = 0;
var capslock = false;
var shift = false;
var backspacer = 0;

// this one is the recursive one
function draw() {
  
  if (rendertimer < 2){ // it basically doesn't render it you hav't pressed anything and nothing has been changed
    displaykeyboard(100,200,0.40); // it improves performance
    console.log('rendered'); // sort of unnecessary but ill keep it
  }
  
  // update things
  rendertimer += 1;
  t += 0.001; // this was used to shrink the keyboard so that i can see that it maintains its proportion
  // its practically useless now, except for demos
  
  if (keyIsDown(BACKSPACE) || keyIsDown(DELETE)){ // stimulates sticky keys for backspace
    backspacer += 1;
    if (backspacer % 10 == 0){ // has a wait time of 1/6 sec
      keyCode = BACKSPACE;
      keyReleased();
    }
  }
}

function mousePressed(){ // makes it rerender and hands off the coordinates to the keypress stimulator
  clickedpos = [mouseX,mouseY];
  rendertimer = 0; 
}

function keyPressed(){ // the stimulator calls this
  // this part overrides any command keys from getting appended
  if (keyCode != BACKSPACE && keyCode != DELETE && keyCode != ENTER && key != 'Meta' && key != 'Alt' && key != 'Control' && key != 'Shift' && key != 'CapsLock' && key != 'Tab' && key != 'ArrowUp' && key != 'ArrowDown' && key != 'ArrowLeft' && key != 'ArrowRight'){
    if (capslock || shift){ // makes it uppercase if either setting is enabled
      typed += key.toUpperCase();
      shift = false; // shift is canceled so that it doesnt repeat
    } else {
      typed += key; // appends the key
    }
    keyCode = ''; // resets the keycode to prevent stale lightup
  }
  rendertimer = 0; // makes it rerender
}

function keyReleased(){ // only used for command keys this is mainly a template
  if (keyCode == BACKSPACE || keyCode == DELETE){ //removes last character
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
  rendertimer = 0; // rerenders
}
