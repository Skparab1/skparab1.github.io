function preload(){
  var entries = loadTable("results.csv","csv","header");
}

function setup() {
  createCanvas(1023,3000);  
}

var keywords = entries.getColumn(0);
var titles = entries.getColumn(1);
var urls = entries.getColumn(2);
var descriptions = entries.getColumn(3);
var language = entries.getColumn(4);
var type = entries.getColumn(5);

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
    
    query = packedurl.replace('%20',' ');
    
  }
} else if (t == 0){
  packedurl = '';
  langfilter = [true,true,true,true,true,true];
}


//reordering keywords
var h = 0;
var scan = 0;

var numfound = 0;
var displayresults = 0;
var results = [];
var i = 0;
var searching = false;
var searchrender = query;
var liveupdate = true;
var clickpos = [];

var opennewtab = localStorage.getItem('tabopenapi');

console.log(opennewtab);

if (opennewtab == null){
  localStorage.setItem('tabopenapi',true);
  opennewtab = true;
}

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
  
  if (counter == 0){
     results = returnis(query);
  }
  
  console.log(opennewtab);
  localStorage.setItem('tabopenapi',opennewtab);
  
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
      let openurl = 'https://'+urls[i];
      if (opennewtab){
        window.open(openurl);
      } else {
        window.open(openurl,"_self");
      }
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
    rect(775,125,200,35);
    fill(0);
    text('Update results live (on)',785,150);
  } else {
    fill(150);
    rect(775,125,200,35);
    fill(255);
    text('Update results live (off)',785,150);
  }
  
  if (opennewtab){
    fill(200);
    rect(775,75,200,35);
    fill(0);
    text('Open links in new tab',785,100);
  } else {
    fill(150);
    rect(775,75,200,35);
    fill(255);
    text('Open links in this tab',785,100);
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
  } else if (mouseX > 775 && mouseX < 995 && mouseY > 125 && mouseY < 150){
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
    
  } else if (mouseX > 775 && mouseX < 995 && mouseY > 75 && mouseY < 100){
    opennewtab = !opennewtab;
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
  
  if (key == '/'){
    searching = true;
  }
  
  keyCode = '';
}

function keyReleased(){
  if (keyCode == ENTER && searching){
    searchrender = searchrender.replace(' ','%20');
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
