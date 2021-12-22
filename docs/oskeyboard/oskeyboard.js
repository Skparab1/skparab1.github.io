function setup() {
  createCanvas(3000,1200);
  //background(0);
}

import {displaykeyboard} from './oskeyboard.js';

var t = 1;
var typed = '';
var clickedpos = [0,0];
var rerender = true;
var rendertimer = 0;
var capslock = false;
var shift = false;

function draw() {
  
  if (rendertimer < 2){
    displaykeyboard(100,300,t);
    console.log('rendered');
  }
  
  rendertimer += 1;
  //t -= 0.001;
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
