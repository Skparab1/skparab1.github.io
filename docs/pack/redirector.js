var loc = window.location.href; //get the url
data = loc.replace('https://skparab1.github.io/pack/',''); //extract the metadata

//?search=game&py=true&md=true
data = data.replace('?search=','/'); // reformat the search data

// now reformat the filters
if (data.includes('py=true')){     
    data = data.replace('py=true','');
} else {
    data = data + 'py=false';
}

if (data.includes('js=true')){
    data = data.replace('js=true','');
} else {
    data = data + 'js=false';
}

if (data.includes('html=true')){
    data = data.replace('html=true','');
} else {
    data = data + 'html=false';
}

if (data.includes('pas=true')){
    data = data.replace('pas=true','');
} else {
    data = data + 'pas=false';
}

if (data.includes('md=true')){
    data = data.replace('md=true','');
} else {
    data = data + 'md=false';
}

if (data.includes('sv=true')){
    data = data.replace('sv=true','');
} else {
    data = data + 'sv=false';
}

if (data.includes('software=true')){
    data = data.replace('software=true','');
} else {
    data = data + 'software=false';
}

if (data.includes('webpage=true')){
    data = data.replace('webpage=true','');
} else {
    data = data + 'webpage=false';
}

if (data.includes('article=true')){
    data = data.replace('article=true','');
} else {
    data = data + 'article=false';
}

data = 'https://skparab1.github.io/search'+data;

window.open(data,"_self");
