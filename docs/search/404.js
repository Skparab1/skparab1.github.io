function setup() {
  createCanvas(1023,3000);  
}

loc = window.location.href;
var t = 0;

if (loc.includes('https://skparab1.github.io/search/')){
  query = loc.replace('https://skparab1.github.io/search/','');
} else if (t == 0){
  query = '';
}


var keywords = ['encryption code text encrypting program in python','skparab1.github.io skparab1\'s github website written in javascript js','runestone solutions problem set 8 eight','gui of encryption code graphical user interface encrypt written in javascript js','skparab1 skparab1\'s github profile with links to projects','ezpixel pro high quality image editor in javascript js','python samples codes made in cs class runestone academy','javascript inkball microsoft video game made in javascript js','skparab animation for profile javascript js','binary converter decimal javascript js gui python script for cs class','ml word engine reconstructs words autocomplete','graphics website of encryption code','randomizing algorithm written in python random number generator','encryption code website','smart calculator perform various calculations','video game pong in python','game codes set of interactive','dynamic spanish english translator learn new entries command line interface','crossy road video game in python','board game battleship against computer artificial inteligence ai python','game animation algorithms use to animate objects free python','age calculator calculates in minutes hours seconds days weeks months years python','data organizers set of codes alphabetizer randomizer paragraph analyzer python','dino game google chorme no internet game python','space shooter game shoot objects python','html animation','math codes series command line interface','flappy bird video game in python','old pascal program','ai virtual assistant powered by typing python','snake game python','virtual assistant builder python'];
var titles = ['Encryption code','Skparab1\'s GitHub website','Runestone solutions Ps8','Encryption code GUI','Skparab1\'s GitHub profile','EzPixel Pro','Python samples','Javascript inkball','Skparab1 animation','Binary converter','Ml word engine','Encryption code graphics website','Randomizing algorithm','Encryption code website','Smart calculator','Pong','Game codes','Spanish English translator','Crossy road','Battleship','Game animation algorithms','Age calculator','Data organizers','Dino game','Space shooter game','HTML animation','Math codes','Flappy bird','Old Pascal program','AI virtual assistant','Snake game','Virtual assistant builder'];
var descriptions = ['Text encrypting program','Javascript GitHub website','Solutions to Runestone problem set 8 ','GUI of Encryption code','Skparab1\'s GitHub profile','High quality image editor','Sample python codes','The video game InkBall','Animation for Skparab1 profile','Binary <--> Decimal converter','Autocomplete word engine','Graphics website of Encryption code','Pseudo Random number generator','Website of Encryption code','Smart calculator','The Video game pong','Game codes','Dynamic Spanish English translator','Video game Crossy road','Board game Battleship','Game animation algorithms','Age calculator','Data organizing codes','Google chrome\'s no internet Dino game','Space shooter game','HTML animation','Math codes','The video game Flappy bird','Old Pascal program','AI virtual assistant','Snake game','Virtual assistant builder'];
var language = ['Python','JavaScript','Python','JavaScript','Markdown','JavaScript','Python','JavaScript','JavaScript','JavaScript','Python','JavaScript','Python','JavaScript','Python','Python','Python','Python','Python','Python','Python','Python','Python','Python','Python','HTML','Python','Python','Pascal','Python','Python','Python'];

var numfound = 0;
var displayresults = 0;
var results = [];
var i = 0;

while (i < language.length){
    if (query.includes(keywords[i]) || (keywords[i]).includes(query)){
      results.push(i);
    }
    i += 1;
}
  
function draw() {
  
  loc = str(loc);
  
  background(0);
  numfound = 0;
  ypos = 125;
  j = 0;
  numfound = results.length;
  
  while (j <= results.length && j < displayresults){
    i = results[j];
    fill((results.length-j)*((33/results.length)*displayresults));
    textSize(30);
    text(titles[i],100,ypos);
    textSize(20);
    if (language[i] == 'Python'){
      fill(0,50,150);
      ellipse(600,ypos,15,15);
      fill((results.length-j)*((33/results.length)*displayresults));
      text('Python',620,ypos);
    } else if (language[i] == 'JavaScript'){
      fill(200,200,0);
      ellipse(600,ypos,15,15);
      fill((results.length-j)*((33/results.length)*displayresults));
      text('JavaScript',620,ypos);
    } else if (language[i] == 'HTML'){
      fill(200,50,0);
      ellipse(600,ypos,15,15);
      fill((results.length-j)*((33/results.length)*displayresults));
      text('HTML',620,ypos);
    } else if (language[i] == 'Pascal'){
      fill(0,150,50);
      ellipse(600,ypos,15,15);
      fill((results.length-j)*((33/results.length)*displayresults));
      text('Pascal',620,ypos);
    } else if (language[i] == 'Markdown'){
      fill(100);
      ellipse(600,ypos,15,15);
      fill((results.length-j)*((33/results.length)*displayresults));
      text('Markdown',620,ypos);
    }
    textSize(15);
    fill((results.length-j)*((33/results.length)*displayresults));
    text(descriptions[i],100,ypos+20);
    ypos += 75;
    
    j += 1;
  }
  
  fill(255);
  
  textSize(50);
  
  if (displayresults < numfound){
    displayresults += 1;
  }
  
  if (numfound > 0){
    text('Your search ,'+query+', got '+displayresults+' search results',10,60);
  } else {
    text('Your search ,'+query+', got 0 results. Try something else',10,60);
  }
}
