function setup() {

}


loc = window.location.href;
  
if (loc.includes('https://skparab1.github.io/search=') && (t == 0)){
query = loc.replace('https://skparab1.github.io/search=','');
openwindow = "http://skparab1.github.io/search/" +query ;
location.href = openwindow;
//window.open("http:skparab1.github.io/search","_self");
print('should have redirected');
shouldredirect = true;
} else {
  window.open("http:skparab1.github.io/","_self");
}
