var loc = window.location.href;
kew_found = loc.replace('https://skparab1.github.io/go/','')

r('test','https://www.google.com/search?q=test');
r('clarke','https://docs.google.com/document/d/12t1be3KzO0hD-UEISfK49zdyhGyRm9AcGRyol9qg6UY/edit');
r('pascal','https://skparab1.github.io/pascals_triangle')
r('s','https://skparab1.github.io/search')
r('traffic','https://skparab1.github.io/traffic_simulator')

if (kew_found == 'test'){
    window.open('https://www.google.com/search?q=test',"_self");
}
if (kew_found == 'clarke'){
    window.open('https://docs.google.com/document/d/12t1be3KzO0hD-UEISfK49zdyhGyRm9AcGRyol9qg6UY/edit',"_self");
}
if (kew_found == 'pascal'){
    window.open('https://skparab1.github.io/pascals_triangle',"_self");
}
if (kew_found == 's'){
    window.open('https://skparab1.github.io/search',"_self");
}
if (kew_found == 'traffic'){
    window.open('https://skparab1.github.io/traffic_simulator',"_self");
}


if (!foundredirect){
    window.open('https://skparab1.github.io/wrongredirect',"_self");
}