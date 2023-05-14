const sleep = ms => new Promise(res => setTimeout(res, ms)); // i need this lmao

let bgvid = document.getElementById('bgvid');
let mainheading = document.getElementById('mainheading');
let header = document.getElementById('header');
bgvid.play();

let screen1 = document.getElementById('screen1');
let screen2 = document.getElementById('screen2');
let leftbutton = document.getElementById('leftbutton');
let rightbutton = document.getElementById('rightbutton');
let thelogo = document.getElementById('logo-image');
let setlogosrc = false;
let vidpaused = false;
let videodimmed = false;

let begin = `      <div class="s2backdrop" id="s2backdrop">
<div class="title-holder">
  <div id="s2largeletters"><h1 class="largeletters">Projects</h1></div>
  <div id='all' class='catagory' style="left: 60%" onclick="changesort('all');">All</div>
  <div id='games' class='catagory' style="left: 73.3%" onclick="changesort('games');">Games</div>
  <div id='educational' class='catagory' style="left: 86.6%" onclick="changesort('education');">Education</div>
</div>`;

let opener = `      <div class="project-holder">
`;

let inkball = `<div id='ink' class="project-tile" onclick="openelement('inkball')">
<div class="project-title">
  Inkball
</div>
<div class="project-image">
  <img src="assets/inkball.png" alt="Image of an inkball game" width="100%" style="border-radius: 10px;">
</div>
<div class="project-description">A modern feature-rich graphics based game of Inkball </div>
<div class="project-description">Javascript, HTML, and CSS</div>
</div>`;

let pacman = `          <div id='pac' class="project-tile" onclick="openelement('pacman')">
<div class="project-title">
  Pacman
</div>
<div class="project-image">
  <img src="assets/pacman.png" alt="Image of a pacman game" width="100%" style="border-radius: 10px;">
</div>
<div class="project-description">A modern graphics-based game of Pacman </div>
<div class="project-description">Javascript, HTML, and CSS</div>
</div>`;

let agpbeats = `          <div id='agp' class="project-tile" onclick="openelement('agpbeats')">
<div class="project-title">
  Agpbeats
</div>
<div class="project-image">
  <img src="assets/agpbeats.png" alt="Image of music player website" width="100%" style="border-radius: 10px;">
</div>
<div class="project-description">A feature rich music player website</div>
<div class="project-description">Javascript, HTML, and CSS</div>
</div>`;

let snake = `<div id='sna' class="project-tile" onclick="openelement('snake')">
<div class="project-title">
  Snake
</div>
<div class="project-image">
  <img src="assets/snake.png" alt="Image of a snake game" width="70%" style="border-radius: 10px;">
</div>
<div class="project-description">A modern graphics based game of snake</div>
<div class="project-description">Javascript, HTML, and CSS</div>
</div>
`;

let forum = `          <div id='for' class="project-tile" onclick="openelement('forum')">
<div class="project-title">
  Forum messager
</div>
<div class="project-image">
  <img src="assets/forum.png" alt="Image of a forum" width="100%" style="border-radius: 10px;">
</div>
<div class="project-description">A serverless forum built with a Github database</div>
<div class="project-description">Javascript, HTML, CSS, Yaml</div>
</div>`;

let traffic = `          <div id='tra' class="project-tile" onclick="openelement('traffic')">
<div class="project-title">
  Traffic simulator
</div>
<div class="project-image">
  <img src="assets/traffic.png" alt="Image of a traffic simulator website" width="100%" style="border-radius: 10px;">
</div>
<div class="project-description">A hackathon winning traffic simulator</div>
<div class="project-description">Javascript, HTML, CSS</div>
</div>`

let dashboard = `<div id='das' class="project-tile" onclick="openelement('dashboard')">
<div class="project-title">
  New tab page
</div>
<div class="project-image">
  <img src="assets/dashboard.png" alt="Image of a custom new tab page" width="100%" style="border-radius: 10px;">
</div>
<div class="project-description">A customizable new tab page</div>
<div class="project-description">Javascript, HTML, and CSS</div>
</div>`;

let portfolio = `<div class="project-tile" onclick="openelement('portfolio')">
<div class="project-title">
  Project Portfolio
</div>
<div class="project-image">
  <img src="assets/portfolio.png" alt="Image of a project portfolio website" width="100%" style="border-radius: 10px;">
</div>
<div class="project-description">A project portfolio website</div>
<div class="project-description">Javascript, HTML, CSS</div>
</div>`;

let euler = `<div class="project-tile" onclick="openelement('euler')">
<div class="project-title">
  Euler calculator
</div>
<div class="project-image">
  <img src="assets/eulers.png" alt="Image of a euler's method calculator" width="100%" style="border-radius: 10px;">
</div>
<div class="project-description">A calculator for Euler's method</div>
<div class="project-description">Javascript, HTML, CSS</div>
</div>`;

let binary = ` <div class="project-tile" onclick="openelement('binarytree')">
<div class="project-title">
  Binary tree maker
</div>
<div class="project-image">
  <img src="assets/binarytree.png" alt="Image of a binary tree maker" width="100%" style="border-radius: 10px;">
</div>
<div class="project-description">Interactive binary tree maker that displays traversal solutions</div>
<div class="project-description">Javascript, HTML, and CSS</div>
</div>`;

let sfx = `<div class="project-tile" onclick="openelement('sfx')">
<div class="project-title">
  Special effects
</div>
<div class="project-image">
  <img src="assets/sfx.png" alt="Image of a special effects website" width="100%" style="border-radius: 10px;">
</div>
<div class="project-description">A special effects website featuring parallelax scrolling, 2d animations, and background video.</div>
<div class="project-description">Javascript, HTML, CSS</div>
</div>`;

let dybdahl = `        <div class="project-tile" onclick="openelement('dybdahl')">
<div class="project-title">
  Calc BC site
</div>
<div class="project-image">
  <img src="assets/dybdahl.png" alt="Image of a math problem site" width="100%" style="border-radius: 10px;">
</div>
<div class="project-description">A website featuring 298 Calc BC problems with instantly accessible solutions.</div>
<div class="project-description">Javascript, HTML, CSS</div>
</div>`;

let sat = `        <div class="project-tile" onclick="openelement('sat')">
<div class="project-title">
  SAT
</div>
<div class="project-image">
  <img src="assets/sat.png" alt="Image of a live chat website" width="100%" style="border-radius: 10px;">
</div>
<div class="project-description">An anti stress website featuring chat, music, and p2p games</div>
<div class="project-description">Javascript, HTML, CSS</div>
</div>`;

let urlshortener = `<div class="project-tile" onclick="openelement('url')">
<div class="project-title">
  Url shortener
</div>
<div class="project-image">
  <img src="assets/url.png" alt="Image of a url shortener" width="100%" style="border-radius: 10px;">
</div>
<div class="project-description">A website that shortens long Urls to smaller github.io urls.</div>
<div class="project-description">Javascript, HTML, CSS</div>
</div>`;

let images = `        <div class="project-tile" onclick="openelement('images')">
<div class="project-title">
  Images
</div>
<div class="project-image">
  <img src="assets/images.png" alt="Image of an image display website" width="100%" style="border-radius: 10px;">
</div>
<div class="project-description">An image showcase website featuring locations and downloadables.</div>
<div class="project-description">Javascript, HTML, and CSS</div>
</div>`;

let end = `      </div>`;

if (window.scrollY > 400){
    dimvideo();
}

window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

async function openelement(el){
    el = document.getElementById(el);
    el.style.display = 'block';
    let fullblock = document.getElementById('fullblock');
    fullblock.style.display = 'block';

    let pb = document.getElementById('pb');
    let gh = document.getElementById('gh');

    let i = 0;
    let ps = 100;
    while (i < 100){
        el.style.opacity = i/100;
        el.style.marginTop = (ps)+'px';
        fullblock.style.opacity = (i/100)*0.6;
        i += 1;
        ps = ps*0.95;
        await sleep();
    }
}

async function dimvideo(){
    let ps = 100;
    while (ps > 0.2){
        bgvid.style.opacity = ps/100;
        ps = ps*0.95;
        await sleep();
    }
}


async function closeelement(el){
    el = document.getElementById(el);
    let fullblock = document.getElementById('fullblock');

    let ps = 0.7;
    let i = 0;
    while (i < 100){
        el.style.opacity = (1-i/100);
        fullblock.style.opacity = (0.6-(i/100)*0.6);
        el.style.marginTop = (ps)+'px';
        i += 1;
        ps = ps*1.05;
        await sleep();
    }

    el.style.display = 'none';
    fullblock.style.display = 'none';
}

async function fadeslow(){
    let bd = document.getElementById('s2backdrop');
    let i = 0;
    while (i < 100){
        bd.style.opacity = (100-i)/100;
        i += 1;
        await sleep();
    }
}

function appear(el){
    el.style.display = 'block';
}

function disappear(el){
    el.style.display = 'none';
}

function highlight(id){
    var style = getComputedStyle(document.body);
    document.getElementById(id).style.backgroundColor = style.getPropertyValue('--main-bg-dark');
}

function muteall(){
    var style = getComputedStyle(document.body);
    style.getPropertyValue('--main-bg-dark');
    document.getElementById('all').style.backgroundColor = 'black';
    document.getElementById('games').style.backgroundColor = 'black';
    document.getElementById('educational').style.backgroundColor = 'black';
}

function changesort(catagory){

    console.log('started'+catagory);

    //await fadeslow();

    let all = [inkball, pacman, agpbeats,   snake, forum, traffic,   dashboard, portfolio, euler,   binary, sfx, dybdahl,   sat, urlshortener, images];
    let games = [inkball, pacman, snake, traffic, binary, sat];
    let edu = [euler, binary, dybdahl];

    screen2.innerHTML = '';



    screen2.innerHTML += begin;
   
    let lst = [];
    if (catagory == 'all'){
        lst = all;
    } else if (catagory == 'games') {
        lst = games;
    } else if (catagory == 'education') {
        lst = edu;
    }

    console.log(catagory);

    let i = 0;
    while (i < lst.length){

        let dv = document.createElement("div");

        dv.innerHTML = '';
        dv.className = 'project-holder';

        let e = i;
        while (e < i+3 && e < lst.length){
            console.log('added ',lst[e]);
            dv.innerHTML += lst[e];
            e += 1;
        }

        i += 3;

        screen2.appendChild(dv);

    }   

    screen2.innerHTML += end;

    muteall();
    if (catagory == 'all'){
        highlight('all');
    } else if (catagory == 'games') {
        highlight('games');
    } else if (catagory == 'education') {
        highlight('educational');
    }

    console.log('ended');
}

(async () => {

    let ctr = 0;
    let mhpush = 300;
    let buttonpush = 400;
    while (true){
        if (ctr > 700 && ctr < 1050){
            bgvid.style.filter = 'blur('+((ctr-700)/25)+'px)';
        }

        if (ctr < 450){
            mainheading.style.opacity = ctr/200-0.5;
            mainheading.style.marginTop = mhpush+'px';
    
            leftbutton.style.opacity = ctr/300-0.5;
            rightbutton.style.opacity = ctr/300-0.5;
            leftbutton.style.marginTop = buttonpush*0.7+'px';
            rightbutton.style.marginTop = buttonpush+'px';
        }

        if (ctr < 250){
            bgvid.style.opacity = ctr/100-0.5;
            header.style.opacity = ctr/100-0.5;
        } else if (window.scrollY < 400){
            bgvid.style.opacity = (500-window.scrollY)/500;
        }

        if (window.scrollY > 500){
            if (!vidpaused){
                bgvid.pause();
                vidpaused = true;
            }
            if (!setlogosrc){
                thelogo.src = 'assets/logo.gif';
                setlogosrc = true;
            }
        } else {
            if (vidpaused){
                bgvid.play();
                vidpaused = false;
            }
        }

        if (ctr > 450){
            mainheading.style.opacity = (600-window.scrollY)/600;
            leftbutton.style.opacity = (700-window.scrollY)/700;
            rightbutton.style.opacity = (700-window.scrollY)/700;
        }

        if (mhpush > 0.05){
            mhpush = 0.99*mhpush;
        }

        if (mhpush < 50 && buttonpush > 0.05){
            buttonpush = buttonpush*0.99;
        }

        await sleep(2);
        ctr += 1;
    }
})();