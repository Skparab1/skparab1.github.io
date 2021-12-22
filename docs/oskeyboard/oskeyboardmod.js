export function displaykeyboard(xpos,ypos,keysize) {
  clear();
  let lightup = 'on';
  let xdiff = xpos - 100;
  let ydiff = ypos - 846;
  fill(150);
  rect(100+xdiff,846+ydiff,1946*keysize,450*keysize);
  fill(0);
  let rectx = 100+(50*keysize);
  let buttonnum = 1;
  while (rectx <= 1600*keysize){
    if (((buttonnum == 1 && key == '~')||(buttonnum == 2 && key == '1')||(buttonnum == 3 && key == '2')||(buttonnum == 4 && key == '3')||(buttonnum == 5 && key == '4')||(buttonnum == 6 && key == '5')||(buttonnum == 7 && key == '6')||(buttonnum == 8 && key == '7')||(buttonnum == 9 && key == '8')||(buttonnum == 10 && key == '9')||(buttonnum == 11 && key == '0')||(buttonnum == 12 && key == '(')||(buttonnum == 13 && key == ')')) && (lightup == 'on')){     
      fill(200,100,0);
    } else {
      fill(0);
    }
    rect(rectx+xdiff,(860-846)*keysize+846+ydiff,100*keysize,85*keysize);
    
    if (clickedpos[0] > rectx+xdiff && clickedpos[0] < (rectx+xdiff+(100*keysize)) && clickedpos[1] > (860-846)*keysize+846+ydiff && clickedpos[1] <(860-846)*keysize+846+ydiff+(85*keysize)){
      if (buttonnum == 1){ key = '~'; keyPressed(); } else if (buttonnum == 2){ key = '1'; keyPressed(); } else if (buttonnum == 3){ key = '2'; keyPressed(); } else if (buttonnum == 4){ key = '3'; keyPressed(); } else if (buttonnum == 5){ key = '4'; keyPressed(); } else if (buttonnum == 6){ key = '5'; keyPressed(); } else if (buttonnum == 7){ key = '6'; keyPressed(); } else if (buttonnum == 8){ key = '7'; keyPressed(); } else if (buttonnum == 9){ key = '8'; keyPressed(); } else if (buttonnum == 10){ key = '9'; keyPressed(); } else if (buttonnum == 11){ key = '0'; keyPressed(); } else if (buttonnum == 12){ key = '('; keyPressed(); } else if (buttonnum == 13){ key = ')'; keyPressed(); }
      keyCode = '';
    }
    buttonnum += 1;
    rectx += 115*keysize;
  }
  
  buttonnum = 1;
  
  if (clickedpos[0] > rectx+xdiff && clickedpos[0] < rectx+xdiff+(375*keysize) && clickedpos[1] > (860-846)*keysize+846+ydiff && clickedpos[1] < (860-846)*keysize+846+ydiff+(85*keysize)){
    keyCode = BACKSPACE;
    keyReleased();
  }
  if (keyCode == BACKSPACE){
    fill(200,100,0);
  } else {
    fill(0);
  }
  rect(rectx+xdiff,(860-846)*keysize+846+ydiff,375*keysize,85*keysize);
  rectx = 100+(80*keysize);
  while (rectx <= 1650*keysize){
    if (((buttonnum == 2 && key == 'q')||(buttonnum == 3 && key == 'w')||(buttonnum == 4 && key == 'e')||(buttonnum == 5 && key == 'r')||(buttonnum == 6 && key == 't')||(buttonnum == 7 && key == 'y')||(buttonnum == 8 && key == 'u')||(buttonnum == 9 && key == 'i')||(buttonnum == 10 && key == 'o')||(buttonnum == 11 && key == 'p')||(buttonnum == 12 && key == ';')||(buttonnum == 13 && key == ':')) && (lightup == 'on')){      fill(200,100,0);
      fill(200,100,0);
    } else {
      fill(0);
      
    }
    buttonnum -= 1;
    if (clickedpos[0] > rectx+xdiff && clickedpos[0] < (rectx+xdiff+(100*keysize)) && clickedpos[1] > (960-846)*keysize+846+ydiff &&  clickedpos[1] < (960-846)*keysize+846+ydiff+(85*keysize)){
      if (buttonnum == 1){ key = 'q'; keyPressed(); } else if (buttonnum == 2){ key = 'w'; keyPressed(); } else if (buttonnum == 3){ key = 'e'; keyPressed(); } else if (buttonnum == 4){ key = 'r'; keyPressed(); } else if (buttonnum == 5){ key = 't'; keyPressed(); } else if (buttonnum == 6){ key = 'y'; keyPressed(); } else if (buttonnum == 7){ key = 'u'; keyPressed(); } else if (buttonnum == 8){ key = 'i'; keyPressed(); } else if (buttonnum == 9){ key = 'o'; keyPressed(); } else if (buttonnum == 10){ key = 'p'; keyPressed(); } else if (buttonnum == 11){ key = ';'; keyPressed(); } else if (buttonnum == 12){ key = ':'; keyPressed(); }
      keyCode = '';
    }
    
    buttonnum += 2;
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
  while (rectx <= 1650*keysize){
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
  while (rectx <= 1590*keysize){
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
  
  fill(0);
  textSize(40);
  text(typed,300,300);
    
  fill(255);
  textSize(70*keysize);
  text('~    1    2    3    4    5    6    7    8    9    0    (     )    Backspace',152+xdiff,(925-846)*keysize+846+ydiff);
  textSize(65*keysize);
  text(' Tab  Q    W    E    R    T    Y    U    I    O    P    ;     :      Hide keys ',143+xdiff,(1025-846)*keysize+846+ydiff);
  text(' CapsLok  A    S    D    F    G    H    J    K    L    .       ,      Enter ',143+xdiff, (1125-846)*keysize+846+ydiff);
  text(' Shift    Z    X    C    V    B    N    M    !    ?    @    &      SPACE',143+xdiff, (1225-846)*keysize+846+ydiff);
  
  clickedpos = [0,0];
}
