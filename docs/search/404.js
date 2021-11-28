function setup() {
  createCanvas(1023,3000);  
}

function sortbase(array,base,max){
  let newarray = [];
  let h = 0;
  let scan;
  let arrayn = array;
  console.log('max'+max);
  // i think i know what the bug is. its running out of elements in the source list
  //                    0                             1                    2                              3                         4               5                              0              0            0                    0                      0
  //var titles = ['Encryption code GUI Webpage','Encryption code','Skparab1\'s GitHub website','Runestone solutions Ps8','Encryption code GUI','Skparab1\'s GitHub profile','EzPixel Pro','Python samples','Javascript inkball','Skparab1 animation','Binary converter','Ml word engine','Encryption code graphics website','Randomizing algorithm','Encryption code website','Smart calculator','Pong','Game codes','Spanish English translator','Crossy road','Battleship','Game animation algorithms','Age calculator','Data organizers','Dino game','Space shooter game','HTML animation','Math codes','Flappy bird','Old Pascal program','AI virtual assistant','Snake game','Virtual assistant builder','JS url shortener','Loading animations','Game server','Traffic simulator'];
  while (newarray.length != arrayn.length){
    scan = parseInt(base[h]); // what is the corresponding value in the clicked array
    if (scan == max){ newarray.push(arrayn[h/2]); console.log('pushed '+arrayn[h]);} 
    if (h >= arrayn.length*2-1){ h = 0; max = max-1;}
    console.log(scan,max,h); if (max < 0){ break; } 
    h += 2;
    // in every other looping time, scan is a ',' so nan
  }
  return newarray;
}

loc = window.location.href;
var t = 0;

if (loc.includes('https://skparab1.github.io/search/')){
  packedurl = loc.replace('https://skparab1.github.io/search/','');
  packedurl = packedurl.replace('&',' ');
  unpackedurl = packedurl.split();
  langfilter = [true,true,true,true,true,true];
  
  i = 0;
  while (i < unpackedurl.length){
    if (unpackedurl[i].includes('py=false')){
      langfilter[0] = false;
    }
    if (unpackedurl[i].includes('js=false')){
      langfilter[1] = false;
    }
    if (unpackedurl[i].includes('html=false')){
      langfilter[2] = false;
    }
    if (unpackedurl[i].includes('pas=false')){
      langfilter[3] = false;
    }
    if (unpackedurl[i].includes('md=false')){
      langfilter[4] = false;
    }
    if (unpackedurl[i].includes('sv=false')){
      langfilter[5] = false;
    }
    i += 1;
    
    packedurl = packedurl.replace(' ','');
    packedurl = packedurl.replace('py=false','');
    packedurl = packedurl.replace('js=false','');
    packedurl = packedurl.replace('html=false','');
    packedurl = packedurl.replace('pas=false','');
    packedurl = packedurl.replace('md=false','');
    packedurl = packedurl.replace('sv=false','');
    
    while (packedurl.includes('&')){
      packedurl = packedurl.replace('&','');
    }
    
    query = packedurl;
    
  }
} else if (t == 0){
  packedurl = '';
  langfilter = [true,true,true,true,true,true];
}

var keywords = ['','webhost webpage encryption code gui js javascript','encryption code text encrypting program in python','skparab1.github.io skparab1\'s github website written in javascript js','runestone solutions problem set 8 eight','gui of encryption code graphical user interface encrypt written in javascript js','skparab1 skparab1\'s github profile with links to projects','ezpixel pro high quality image editor in javascript js','python samples codes made in cs class runestone academy','javascript inkball microsoft video game made in javascript js','skparab animation for profile javascript js','binary converter decimal javascript js gui python script for cs class','ml word engine reconstructs words autocomplete','graphics website of encryption code','randomizing algorithm written in python random number generator','encryption code website','smart calculator perform various calculations','video game pong in python','game codes set of interactive','dynamic spanish english translator learn new entries command line interface','crossy road video game in python','board game battleship against computer artificial inteligence ai python','game animation algorithms use to animate objects free python','age calculator calculates in minutes hours seconds days weeks months years python','data organizers set of codes alphabetizer randomizer paragraph analyzer python','dino game google chorme no internet game python','space shooter game shoot objects python','html animation','math codes series command line interface','flappy bird video game in python','old pascal program','ai virtual assistant powered by typing python','snake game python','virtual assistant builder python','js javascript url shortener website redirect','loading animation animations js javascript','game server test testing game server peer p2p svelte','traffic simulator model win won hackathon 3rd third place js javascript graphics'];
var titles = ['','Encryption code GUI Webpage','Encryption code','Skparab1\'s GitHub website','Runestone solutions Ps8','Encryption code GUI','Skparab1\'s GitHub profile','EzPixel Pro','Python samples','Javascript inkball','Skparab1 animation','Binary converter','Ml word engine','Encryption code graphics website','Randomizing algorithm','Encryption code website','Smart calculator','Pong','Game codes','Spanish English translator','Crossy road','Battleship','Game animation algorithms','Age calculator','Data organizers','Dino game','Space shooter game','HTML animation','Math codes','Flappy bird','Old Pascal program','AI virtual assistant','Snake game','Virtual assistant builder','JS url shortener','Loading animations','Game server','Traffic simulator'];
var urls = ['','skparab1.github.io/encryption-code-gui','github.com/skparab1/encryption-code','github.com/skparab1/skparab1.github.io','github.com/skparab1/runestone-solutions-ps8','github.com/skparab1/encryption-code-gui','github.com/skparab1','github.com/skparab1/ezpixel-pro','github.com/skparab1/python-samples','github.com/skparab1/javascript-inkball','github.com/skparab1/skparab1-animation','github.com/skparab1/binary-converter','github.com/skparab1/ml-word-engine','github.com/Encryptioncode/graphic-website','github.com/skparab1/randomizing-algorithm','github.com/skparab1/encryption-code-website','github.com/skparab1/master-math-calculator','github.com/skparab1/pong','github.com/skparab1/game-codes','github.com/skparab1/dynamic-spanish-english-translator','github.com/skparab1/corssy-road','github.com/skparab1/battleship','github.com/skparab1/game-animation-algorithms','github.com/skparab1/age-calculator','github.com/skparab1/data-organizers','github.com/skparab1/dino0-game','github.com/skparab1/space-shooter-game','github.com/skparab1/html-animation','github.com/skparab1/math-codes','github.com/skparab1/flappy-bird','github.com/skparab1/old-pascal-program','github.com/skparab1/ai-virtual-assistant','github.com/skparab1/snake-game','github.com/skparab1/virtual-assistant-builder','github.com/skparab1/js-url-shortener','github.com/skparab1/loading-animations','github.com/skparab1/game-server','github.com/skparab1/traffic-simulator'];
var descriptions = ['','Live webpage of Encryption code GUI','Text encrypting program','Javascript GitHub website','Solutions to Runestone problem set 8 ','GUI of Encryption code','Skparab1\'s GitHub profile','High quality image editor','Sample python codes','The video game InkBall','Animation for Skparab1 profile','Binary <--> Decimal converter','Autocomplete word engine','Graphics website of Encryption code','Pseudo Random number generator','Website of Encryption code','Smart calculator','The Video game pong','Game codes','Dynamic Spanish English translator','Video game Crossy road','Board game Battleship','Game animation algorithms','Age calculator','Data organizing codes','Google chrome\'s no internet Dino game','Space shooter game','HTML animation','Math codes','The video game Flappy bird','Old Pascal program','AI virtual assistant','Snake game','Virtual assistant builder','JavaScript URL shortener, GitHub pages hostable','Loading animations for redirector','Testing game server with peerjs and svelte','3rd place hackathon winning Javascript traffic simulator'];
var language = ['','JavaScript','Python','JavaScript','Python','JavaScript','Markdown','JavaScript','Python','JavaScript','JavaScript','JavaScript+Python','Python','JavaScript','Python','JavaScript','Python','Python','Python','Python','Python','Python','Python','Python','Python','Python','Python','HTML','Python','Python','Pascal','Python','Python','Python','JavaScript','JavaScript','JavaScript+Svelte','JavaScript'];
var type = ['','Webpage','Software','Software','Software','Software','Software','Software','Software','Software','Software','Software','Software','Software','Software','Software','Software','Software','Software','Software','Software','Software','Software','Software','Software','Software','Software','Software','Software','Software','Software','Software','Software','Software','Software','Software','Software','Software'];

var otherwise = ['0','1','2','3','4','5'];
while (otherwise.length < language.length){
  otherwise.push('0');
}

console.log(titles);
console.log(otherwise);

//var viewed = localstorage.getitem('viewlog') || otherwise; unnecassary for now
var clicked = localStorage.getItem('clicklog') || otherwise;

console.log(clicked);

//finding max
var r = 0;
var max = 0;
while (r < clicked.length){
  if (clicked[r] > max){
    max = clicked[r];
  }
  r += 1;
}
//reordering keywords
var h = 0;
var scan = 0;
var sortedkeywords = [];
var sortedtitles = [];
var sortedurls = [];
var sorteddescriptions = [];
var sortedlanguage = [];
var sortedtype = [];

sortedkeywords = sortbase(keywords,clicked,max);
sortedtitles = sortbase(titles,clicked,max);
sortedurls = sortbase(urls,clicked,max);
sorteddescriptions = sortbase(descriptions,clicked,max);
sortedlanguage = sortbase(language,clicked,max);
sortedtype = sortbase(type,clicked,max);

console.log(titles);

keywords = sortedkeywords;
titles = sortedtitles;
urls = sortedurls;
descriptions = sorteddescriptions;
language = sortedlanguage;
type = sortedtype;

console.log('reordered');
console.log(keywords);
console.log(titles);
console.log(urls);
console.log(descriptions);
console.log(language);
console.log(type);

var numfound = 0;
var displayresults = 0;
var results = [];
var i = 0;
var searching = false;
var searchrender = query;
var liveupdate = true;
var clickpos = [];

function returnis(q){
  
  let i = 0;
  let results = [];
  //var keyw;
  unfilteredresults = [];
  
  console.log(keywords);
  
  while (i < titles.length){
    console.log('went through');
    //print(keywords[i]);
    keyw = keywords[i];
    //print('keyw',keyw);
    if (keyw == undefined){
      break;
    }
    
    if (query.includes(keyw) || (keyw).includes(query)){
      let l = language[i];
      if ((l.includes('Python') && langfilter[0]) || (l.includes('JavaScript') && langfilter[1]) || (l.includes('HTML') && langfilter[2]) || (l.includes('Pascal') && langfilter[3]) || (l.includes('Markdown') && langfilter[4]) || (l.includes('Svelte') && langfilter[5])){
        results.push(i);
      }
      unfilteredresults.push(i);
    }
    i += 1;
  }
  
  return results;
}

var unfilteredresults = [];
var counter = 0;
  
function draw() {
  
  localStorage.setItem('clicklog',clicked);
  loc = str(loc);
  
  if (counter == 0){
     results = returnis(query);
  }
  
  background(0);
  numfound = 0;
  ypos = 125;
  j = 0;
  numfound = results.length;
  counter += 10;  

  fill(50);
  rect(0,mouseY-37.5,1023,75);
  
  fill(0);
  rect(0,0,1023,85);
  
  while (j <= results.length && j < displayresults){
    fillcolor = (((results.length-j)*((33/results.length)*displayresults))+(counter/2));
    i = results[j];
    
    if (fillcolor < 195){
      fill(fillcolor);
    } else if (mouseY > ypos-33 && mouseY < ypos+33){
      fill(255);
    } else {
      fill(195);
    }
    
    if (clickpos[1] > ypos-33 && clickpos[1] < ypos+33 && clickpos[0] > 100 && clickpos[0] < 750){
      let index = i*2;
      let newval = int(clicked[index]) + 1;
      clicked[index] = newval;
      console.log('newval '+newval+' but, val is '+clicked[index]);
      console.log('i '+i);
      console.log('should have changed'+clicked);
      localStorage.setItem('clicklog',clicked);
      let openurl = 'https://'+urls[i];
      window.open(openurl);
    }
    
    textSize(30);
    text(titles[i],100,ypos);
    textSize(15);
    text(descriptions[i],100,ypos+20);
      
    textSize(20);
    if (language[i] == 'Python'){
      fill(0,50,150);
      ellipse(600,ypos,15,15);
      fill(fillcolor);
      text('Python',620,ypos);
    } else if (language[i] == 'JavaScript'){
      fill(200,200,0);
      ellipse(600,ypos,15,15);
      fill(fillcolor);
      text('JavaScript',620,ypos);
    } else if (language[i] == 'HTML'){
      fill(200,50,0);
      ellipse(600,ypos,15,15);
      fill(fillcolor);
      text('HTML',620,ypos);
    } else if (language[i] == 'Pascal'){
      fill(0,150,50);
      ellipse(600,ypos,15,15);
      fill(fillcolor);
      text('Pascal',620,ypos);
    } else if (language[i] == 'Markdown'){
      fill(100);
      ellipse(600,ypos,15,15);
      fill(fillcolor);
      text('Markdown',620,ypos);
    } else if (language[i] == 'JavaScript+Svelte'){
      fill(200,200,0);
      ellipse(600,ypos-10,15,15);
      fill(225,0,0);
      ellipse(600,ypos+20,15,15);
      fill(fillcolor);
      text('JavaScript',620,ypos-5);
      text('Svelte',620,ypos+25);
    } else if (language[i] == 'JavaScript+Python'){
      fill(200,200,0);
      ellipse(600,ypos-10,15,15);
      fill(0,50,150);
      ellipse(600,ypos+20,15,15);
      fill(fillcolor);
      text('JavaScript',620,ypos-5);
      text('Python',620,ypos+25);
    }
    
    textSize(15);
    if (type[i] == 'Software'){
      fill(0,100,200);
      ellipse(18.5,ypos-15,25,25);
      fill(0,fillcolor,0);
      text('<>',10,ypos-10);
      text('Software',10,ypos+20);
    } else if (type[i] == 'Article'){
      fill(200,100,0);
      ellipse(18.5,ypos-15,25,25);
      fill(fillcolor,0,0);
      text(' T',10,ypos-10);
      text('Article',10,ypos+20);
    } else if (type[i] == 'Webpage'){
      fill(200,0,0);
      ellipse(18.5,ypos-15,25,25);
      fill(fillcolor,fillcolor,0);
      text('W',10,ypos-10);
      text('Webpage',10,ypos+20);
    }
    
    textSize(15);
    fill(fillcolor);
    text(descriptions[i],100,ypos+20);
    ypos += 75;
    
    j += 1;
  }
  
  fill(255);
  
  textSize(50);
  
  if (displayresults < numfound){
    displayresults += 1;
  }
  
  if (!searching){
    fill(150);
  } else {
    fill(255);
  }
  rect(250,15,200,60);
  fill(0);
  stroke(0);
  rect(250,15,15,15);
  rect(250,60,15,15);
  rect(435,15,15,15);
  rect(435,60,15,15);
  if (!searching){
    fill(150);
    stroke(150);
  } else {
    fill(255);
    stroke(255);
  }
  ellipse(265,30,27.5,27.5);
  ellipse(435,30,27.5,27.5);
  ellipse(265,60,27.5,27.5);
  ellipse(435,60,27.5,27.5);
  
  stroke(0);
  fill(255);
  if (numfound > 0){
    text('    Search:                     '+displayresults+' search results',10,60);
  } else {
    text('    Search:                      0 results',10,60);
  }
  
  textSize(35);
  if (searching){
    fill(0,150,255);
    stroke(0,150,255);
  } else {
    fill(255);
    stroke(255);
  }
  text(searchrender,265,60);
  stroke(0);
  
  textSize(18);
  if (liveupdate){
    fill(200);
    rect(775,100,200,50);
    fill(0);
    text('Update results live (on)',785,130);
  } else {
    fill(150);
    rect(775,100,200,50);
    fill(255);
    text('Update results live (off)',785,130);
  }
  
  let pycount = 0;
  let jscount = 0;
  let htmlcount = 0;
  let pascount = 0;
  let mdcount = 0;
  let svcount = 0;
  
  let k = 0;
  while (k < unfilteredresults.length){
    let index = unfilteredresults[k];
    if (language[index].includes('Python')){
      pycount += 1;
    }
    if (language[index].includes('JavaScript')){
      jscount += 1;
    }
    if (language[index].includes('HTML')){
      htmlcount += 1;
    }
    if (language[index].includes('Pascal')){
      pascount += 1;
    }
    if (language[index].includes('Markdown')){
      mdcount += 1;
    }
    if (language[index].includes('Svelte')){
      svcount += 1;
    }
    k += 1;
  }
  
  textSize(30);
  fill(0,200,0);
  text('Filter results',785,200);
  textSize(25);
  fill(0,200,200);
  text('Language',785,230);
  textSize(18);
  fill(255);
  fill(0,150,255);
  text('Python ('+pycount+')',820,260);
  fill(200,200,0);
  text('JavaScript ('+jscount+')',820,290);
  fill(200,100,0);
  text('HTML ('+htmlcount+')',820,320);
  fill(0,200,0);
  text('Pascal ('+pascount+')',820,350);
  fill(200);
  text('Markdown ('+mdcount+')',820,380);
  fill(255,0,0);
  text('Svelte ('+svcount+')',820,410);
  
  textSize(13);
  fill(0,150,255);
  text('only',950,260);
  text('only',950,290);
  text('only',950,320);
  text('only',950,350);
  text('only',950,380);
  text('only',950,410);
  
  fill(150);
  rect(785,245,20,20);
  rect(785,275,20,20);
  rect(785,305,20,20);
  rect(785,335,20,20);
  rect(785,365,20,20);
  rect(785,395,20,20);
  
  strokeWeight(5);
  stroke(0,255,0);
  fill(0,255,0);
  if (langfilter[0]){
    line(790,250,795,255);
    line(810,240,795,255);
  }
  if (langfilter[1]){
    line(790,280,795,285);
    line(810,270,795,285);
  }
  if (langfilter[2]){
    line(790,310,795,315);
    line(810,300,795,315);
  }
  if (langfilter[3]){
    line(790,340,795,345);
    line(810,330,795,345);
  }
  if (langfilter[4]){
    line(790,370,795,375);
    line(810,360,795,375);
  }
  if (langfilter[5]){
    line(790,400,795,405);
    line(810,390,795,405);
  }
  strokeWeight(1);
  stroke(0);
  
  textSize(25);
  fill(0,200,200);
  text('Entry type',785,500);
  textSize(18);
  fill(255);
  fill(200);
  rect(785,515,20,20);
  rect(785,545,20,20);
  fill(0,200,0);
  text('Software',820,530);
  fill(255,0,0);
  text('Article',820,560);
  
  clickpos = [];
  
}

function mousePressed(){
  if (mouseX > 250 && mouseX < 450 && mouseY > 15 && mouseY < 70){
    searching = true;
  } else if (mouseX > 775 && mouseX < 995 && mouseY > 100 && mouseY < 150){
    liveupdate = !liveupdate; 
    if (liveupdate){
      query = searchrender;
      results = [];
      unfilteredresults = [];
      numfound = 0;
      displayresults = 0;
      results = returnis(query);
    }
    
  loc = window.location.href;
  } else if (mouseX > 785 && mouseX < 805 && mouseY > 245 && mouseY < 265 && langfilter[0]){
    window.open(loc+'&py=false',"_self");
  } else if (mouseX > 785 && mouseX < 805 && mouseY > 245 && mouseY < 265 && !langfilter[0]){
    loc = loc.replace('&py=false','');
    window.open(loc,"_self");
    
  } else if (mouseX > 785 && mouseX < 805 && mouseY > 275 && mouseY < 295 && langfilter[1]){
    window.open(loc+'&js=false',"_self");
  } else if (mouseX > 785 && mouseX < 805 && mouseY > 275 && mouseY < 295 && !langfilter[1]){
    loc = loc.replace('&js=false','');
    window.open(loc,"_self");
    
  } else if (mouseX > 785 && mouseX < 805 && mouseY > 305 && mouseY < 325 && langfilter[2]){
    window.open(loc+'&html=false',"_self");
  } else if (mouseX > 785 && mouseX < 805 && mouseY > 305 && mouseY < 325 && !langfilter[2]){
    loc = loc.replace('&html=false','');
    window.open(loc,"_self");
    
  } else if (mouseX > 785 && mouseX < 805 && mouseY > 335 && mouseY < 355 && langfilter[3]){
    window.open(loc+'&pas=false',"_self");
  } else if (mouseX > 785 && mouseX < 805 && mouseY > 335 && mouseY < 355 && !langfilter[3]){
    loc = loc.replace('&pas=false','');
    window.open(loc,"_self");
    
  } else if (mouseX > 785 && mouseX < 805 && mouseY > 365 && mouseY < 385 && langfilter[4]){
    window.open(loc+'&md=false',"_self");
  } else if (mouseX > 785 && mouseX < 805 && mouseY > 365 && mouseY < 385 && !langfilter[4]){
    loc = loc.replace('&md=false','');
    window.open(loc,"_self");
    
  } else if (mouseX > 785 && mouseX < 805 && mouseY > 395 && mouseY < 405 && langfilter[5]){
    window.open(loc+'&sv=false',"_self");
  } else if (mouseX > 785 && mouseX < 805 && mouseY > 395 && mouseY < 405 && !langfilter[5]){
    loc = loc.replace('&sv=false','');
    window.open(loc,"_self");
    
  } else if (mouseX > 940 && mouseY > 250 && mouseY < 270){
    window.open('https://skparab1.github.io/search/'+query+'&js=false&html=false&pas=false&md=false&sv=false',"_self");
  } else if (mouseX > 940 && mouseY > 280 && mouseY < 300){
    window.open('https://skparab1.github.io/search/'+query+'&py=false&html=false&pas=false&md=false&sv=false',"_self");
  } else if (mouseX > 940 && mouseY > 310 && mouseY < 330){
    window.open('https://skparab1.github.io/search/'+query+'&py=false&js=false&pas=false&md=false&sv=false',"_self");
  } else if (mouseX > 940 && mouseY > 340 && mouseY < 360){
    window.open('https://skparab1.github.io/search/'+query+'&py=false&js=false&html=false&md=false&sv=false',"_self");
  } else if (mouseX > 940 && mouseY > 370 && mouseY < 390){
    window.open('https://skparab1.github.io/search/'+query+'&py=false&js=false&html=false&pas=false&sv=false',"_self");
  } else if (mouseX > 940 && mouseY > 400 && mouseY < 420){
    window.open('https://skparab1.github.io/search/'+query+'&py=false&js=false&html=false&pas=false&md=false',"_self");
    
  } else {
    searching = false;
  }
  clickpos = [mouseX,mouseY];
}

function keyPressed(){
  if (searching && keyCode != BACKSPACE && keyCode != DELETE && keyCode != ENTER){
    searchrender += key;
  }
  
  if (liveupdate){
    query = searchrender;
    results = [];
    unfilteredresults = [];
    numfound = 0;
    displayresults = 0;
    results = returnis(query);
  }
  
  keyCode = '';
}

function keyReleased(){
  if (keyCode == ENTER && searching){
    window.open('http://skparab1.github.io/search/'+searchrender,"_self");
  }
  if ((keyCode == BACKSPACE || keyCode == DELETE) && searching){
    searchrender = searchrender.substring(0, searchrender.length -1);
      if (liveupdate){
        query = searchrender;
        results = [];
        unfilteredresults = [];
        numfound = 0;
        displayresults = 0;
        results = returnis(query);
      }
  }
}
