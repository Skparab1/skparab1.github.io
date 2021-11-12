function preload() {
  redirect = loadTable("redirects.csv","csv","header");
}

function setup() {
  createCanvas(100,100);
  keyword = redirect.getColumn(0);
  url = redirect.getColumn(1);
}

loc = window.location.href;

var foundredirect = false;
  
if (loc.includes('https://skparab1.github.io/redirect/')){
  red = loc.replace('https://skparab1.github.io/redirect/','');
  
  i = 0;
  scanner = '';
  while (i <= keyword.length && foundredirect == false){
    scanner = keyword[i];
    if (scanner == red){
      foundredirect = true;
      openwindow = url[i];
      openwindow = 'https://'+openwindow;
    }
    
    i += 1;
  }
  
  if (foundredirect){
    location.href = openwindow;
    window.open(openwindow,"_self");
  } else {
    window.open("http:skparab1.github.io/404","_self");
  }
} else {
  window.open("http:skparab1.github.io/404","_self");
}
