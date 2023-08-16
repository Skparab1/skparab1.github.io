// this is the js

function cleargsearch(){
    let gs = document.getElementById('gsearch');
    gs.value = "";
    gs.style.color = 'rgb(255,255,255)';
}

function stringize(arr){
    let i = 0;
    let str = "";
    while (i < arr.length){
        str += arr[i];
        if (i != arr.length - 1){
            str += "&NEXT&";
        }
        i += 1;
    }

    return str;
}

function savearr(){
    localStorage.setItem('todol',stringize(todo));
    console.log('saved',stringize(todo));
}

function getarr(){
    let u = localStorage.getItem('todol');
    if (u == null){
        localStorage.setItem('todol',stringize([])); // initialize
        return [];
    }

    return u.split('&NEXT&');
}

function drawdimond(x,y){
    ctx.beginPath();
    ctx.moveTo(x,y-12.5);
    ctx.lineTo(x+12.5,y);
    ctx.lineTo(x,y+12.5);
    ctx.lineTo(x-12.5,y);
    ctx.fill();
  }

function rendertodo(){
    // clear the holder;
    let holder = document.getElementById('todo');
    holder.innerHTML = "";

    let integra = document.getElementById('tasks');
    integra.innerHTML = `
    <h1 class="taskheader">Tasks</h1>
    `;

    let i = 0;
    while (i < todo.length){
        let sg = todo[i].split('&dueat&');
        holder.innerHTML += `
        <div class="tdtile">
            <div class="lefts">${sg[0]}</div>
            <div class="due">${sg[1]}</div>
        </div>
        `;

        integra.innerHTML += `
        <div id="tileg${i}" class="tdtile-main" onclick="select(${i})" onmouseover="movehighlight(${i}); ontile = ${i};">
            <div class="lefts" style="margin-top: 8px;">
            <input type="text" class="taskname" id="tname${i}" name="tname${i}" value="${sg[0]}" onchange="changename(${i});">
            <input type="text" class="taskdate" id="due${i}" name="due${i}" value="${sg[1]}" onchange="changedue(${i});">
            </div>
            <div class="due">
            <div class="delete" onclick='deletetd(${i});'>Done</div>
            <div class="order" onclick='prioritize(${i});'>Prioritize</div>
            <div class="order" onclick='deprioritize(${i});'>Deprioritize</div>
            </div>
        </div>
        `;

        i += 1;
    }

    integra.innerHTML += `
    <div class="addnew" onclick="addnew();">+</div>
    <div class="addnew" onclick="closetasks();" style='font-size: 20px; width: 10%; margin-top: 20px; margin-left: 45%; padding-top: 12px;'>Save & close</div>
    `;

    savearr();


}

function addnew(){
    todo.push("&dueat&");
    rendertodo();
}

function changename(num){
    // change name of num to tx
    let it = todo[num];
    it = it.split('&dueat&');

    let tx = document.getElementById('tname'+num).value;
    todo[num] = tx+'&dueat&'+it[1];
    rendertodo();
}

function changedue(num){
    // change name of num to tx
    let it = todo[num];
    it = it.split('&dueat&');

    let tx = document.getElementById('due'+num).value;
    todo[num] = it[0]+'&dueat&'+tx;
    rendertodo();
}

function randcolor(){
    return 'rgb('+(Math.random()*100+155)+','+(Math.random()*100+155)+','+(Math.random()*100+155)+")";
}

function getconfetti(){
    let arr = [];

    u = 0;
    while (u < 100){
        arr.push([randcolor(),Math.random()*window.innerWidth,-Math.random()*900])
        u += 1;
    }

    return arr;

}

async function deletetd(num){
    // just remove the entry
    todo.splice(num,1);

    // basically like shrink the one
    let el = document.getElementById('tileg'+num);

    // confetti ig
    cvs.style.zIndex = 100;

    let confetti = getconfetti();

    let lucid = 100
    let r = 100
    while (lucid >= -20){
        el.style.width = lucid*0.9+"%";
        console.log('supposedly set to 10');


        ctx.clearRect(0,0, window.innerWidth, window.innerHeight);

        let air = 0;
        while (air < confetti.length){
            ctx.fillStyle = confetti[air][0];
            console.log(confetti[air][0]);
            drawdimond(confetti[air][1],(100-lucid)/33*window.innerHeight+confetti[air][2]);
            air += 1;
        }

        await sleep(2);
        lucid = lucid-(110-lucid)/50;
        r -= 1; // not used var
    }

    let civic = 100
    while (civic >= -10){
        el.style.height = civic/2+"px";
        el.style.marginBottom = civic*0.2+"px";
        console.log('supposedly set to 10');

        await sleep(2);
        civic = civic-(110-civic)/50;
    }

    el.style.display = 'none';

    cvs.style.zIndex = -1;

    rendertodo();
}

function prioritize(num){
    // swap num and the one on top of it

    if (num == 0){ // cant swap
        return;
    }

    let holder = todo[num];
    todo[num] = todo[num-1];
    todo[num-1] = holder;

    lastselected -= 1;

    rendertodo();
}

function deprioritize(num){
    // swap with the one below

    // if its the last then dont swap

    if (num == todo.length - 1){
        return;
    }

    let holder = todo[num];

    todo[num] = todo[num+1];
    todo[num+1] = holder;

    lastselected += 1;

    rendertodo();
}

function select(n){
    lastselected = n;
}

function movehighlight(n){
    let si = 0;

    // reset the highlights
    while (si < todo.length){
        let y = document.getElementById('tileg'+si);
        y.style.background = "rgba(210,210,210,0.7)";
        si += 1;
    }

    // now highlight the right one
    let o = document.getElementById('tileg'+n);
    o.style.background = "rgba(210,210,210,1)";
}

function deselectall(){
    let si = 0;

    // reset the highlights
    while (si < todo.length){
        let y = document.getElementById('tileg'+si);
        y.style.border = "0px solid darkblue";
        si += 1;
    }
}

function selectt(n){
    let y = document.getElementById('tileg'+n);
    y.style.border = "3px solid darkblue";
    selected = true;
}

let dt = new Date();

let firefox = document.getElementById('firefox');

let time = document.getElementById('time');
let date = document.getElementById('date');

let left = document.getElementById('s1');
let right = document.getElementById('s2');

let gselected = false;

let lastselected = -1;
let ontile = -1;
let selected = false;

let openedt = false;

// we can just have an arr storing all the stuff
// and when we need to store it we can stringify it
var todo = getarr();

rendertodo();

const canvas = document.querySelector('.myCanvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth; 
const height = canvas.height = window.innerHeight-100;

let cvs = document.getElementById('canvas-container');

let k;
(async () => {
    const d = await fetch("./tk.json").then(r => r.json());
    k = d.data[0];
    k = JSON.stringify(k);
    k = k.replace('{"name":"','');
    k = k.replace('"}','');
    
    //console.log(k);
    //http://api.weatherapi.com/v1

    let weatherobj;
    let weather = document.getElementById('weather');

    fetch((`https://api.weatherapi.com/v1/current.json?key=${k}&q=95129`))
        .then(response => {
            return response.json();
        })
        .then(data => {
                console.log(data);
                weatherobj = data;
                weather.textContent = weatherobj.current.condition.text+" • "+weatherobj.current.temp_f+"°";
        })
})();

let dd;
if (dt.getHours() >= 12){
    dd = 'PM';
} else {
    dd = 'AM';
}

let options = {  
    hour: "2-digit", minute: "2-digit"  
};  

let options1 = {  
    weekday: "long", month: "long", day: "numeric"
};  

function toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        var reader = new FileReader();
        reader.onloadend = function() {
        callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
}

async function switchtobing(){
    usebing();

    localStorage.setItem("usingbingwallpapers",'using');

    let u = 0;
    while (u < 50){
        b1.style.opacity = u/50;

        await sleep(2);
        u += 1;
    }

    // now just reload ig and it shud be all good

    location.reload();
}

function processimg(){

    // dont use bing
    localStorage.setItem("usingbingwallpapers",'false');

    let ye = document.getElementById('urimg');
    let theimg = ye.files[0];
    console.log(URL.createObjectURL(theimg));

    let theurl = URL.createObjectURL(theimg);

    // now we just create a supposed elemtn to display it

    document.getElementById('holderimg').src = theurl
    // let thedata = getBase64Image(document.getElementById('holderimg'));

    let thedata;
    toDataURL(theurl, function(dataUrl) {
        console.log('RESULT:', dataUrl)
        thedata = dataUrl;

        console.log(thedata);
        usebg(thedata);
      })
}



function usebing(){
    let setbg1 = localStorage.getItem('newbg');

    let todaydate = new Date();

    todaydate = todaydate.getDate();

    if (setbg1 != null && setbg1.includes("BING") && localStorage.getItem('lastsetdatebing') != null && String(localStorage.getItem('lastsetdatebing')) == String(todaydate)){
        return; // cuz everything is already stored so it should be good
    } else {
        (async () => {
            fetch((`https://peapix.com/bing/feed?country=us`))
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    realurl = data[0].fullUrl
        
                    localStorage.setItem('newbg',"BING"+realurl); // so you can just read and play directly
        
                    console.log("bing set BING"+realurl)

                    localStorage.setItem("lastsetdatebing",String(todaydate));
        
                    // let tmg = new Image();
        
                    // tmg.src = realurl;
        
                    // console.log(realurl);
                    // usebingwp(realurl);
        
                    // let thedata;
                    // toDataURL(realurl, function(dataUrl) {
                    //     console.log('RESULT:', dataUrl)
                    //     thedata = dataUrl;
                
                    //     console.log(thedata);
                    //     usebg(thedata);
                    //   })
        
                    // actbg.style.backgroundImage = realurl;
                    // document.getElementById('fullimg').src = realurl;
        
                    // window.open(realurl);
            })
        })();
    }
}

let usingbing = localStorage.getItem("usingbingwallpapers");

if (usingbing != null && usingbing == 'using'){
    usebing();
}

let setbg = localStorage.getItem('newbg');

console.log("SET"+setbg);

let actbg = document.getElementById('blocker'); // lmfao whys it blocker cuz i didnt wanna change it bruh
if (setbg == null || setbg == 'hehe'){
    setbg = 'linear-gradient(rgb(255, 63, 5),rgb(0, 84, 173));'
    actbg.style.opacity = 0;
}
actbg.style.backgroundImage = setbg;


if (setbg.includes('data')){
    document.getElementById('fullimg').src = setbg;
}

if (setbg.includes('BING')){
    document.getElementById('fullimg').src = setbg.replace("BING","");
}

console.log('tired to set to '+setbg);

async function usebg(bg){ // bc shud be the src

    // not using bing
    localStorage.setItem("usingbingwallpapers",'false');

    // in localstorage set what it shud be
    localStorage.setItem('newbg',bg); // so you can just read and play directly
    // dim it
    let b1 = document.getElementById('b1');
    b1.style.display = 'block';
    b1.style.opacity = 1;

    let u = 0;
    while (u < 50){
        b1.style.opacity = u/50;

        await sleep(2);
        u += 1;
    }

    // now just reload ig and it shud be all good

    location.reload();
}

async function openbg(){
    let cbg = document.getElementById('choosebg');
    cbg.style.display = 'block';

    let u = 0;
    while (u < 100){
        cbg.style.opacity = u/100;

        await sleep(2);
        u += 1;
    }
}

async function opentasks(){
    openedt = true;
    let cbg = document.getElementById('tasks');
    cbg.style.display = 'block';

    let u = 0;
    while (u < 100){
        cbg.style.opacity = u/100;

        await sleep(2);
        u += 1;
    }
}

async function closetasks(){
    let cbg = document.getElementById('tasks');
    openedt = false;
    let u = 0;
    while (u < 100){
        cbg.style.opacity = 1-u/100;

        await sleep(2);
        u += 1;
    }

    cbg.style.display = 'none';
}

let lucid = dt.toLocaleTimeString("en-us", options);
let air = dt.toLocaleTimeString("en-us", options1).split(' at');

let blocker = document.getElementById('blocker');

time.textContent = lucid;
date.textContent = air[0];

let google = document.getElementById('todo');
//google.value = 'Search with Google';

let maxtd = google.offsetTop+20;

//google.style.maxHeight = (window.innerHeight-maxtd)+'px';
// google.style.height = '250px';

const sleep = ms => new Promise(res => setTimeout(res, ms));

(async () => {
    let ct = 0;
    let floater = 100;
    while (ct <= 1000){

        firefox.style.marginTop = floater*2+'px';
        firefox.style.width = (100-floater)*1.5+'px';
        firefox.style.opacity = ct/150;

        time.style.opacity = ct/100;

        date.style.opacity = ct/120;

        google.style.opacity = ct/150-0.5;

        let bfactor = (100-floater)/100;

        //document.body.style.backgroundImage = `linear-gradient(rgb(${bfactor*195}, ${bfactor*35}, 0),rgb(0, ${bfactor*84}, ${bfactor*173}))`;

        blocker.style.opacity = bfactor;

        if (bfactor <= 0.01){
            //blocker.style.display = 'none';
        }

        await sleep(2);
        floater = floater * 0.95;
        ct += 1;
    }
})();

// google.focus();
// google.select();

(async () => {
    while (true){
        let ee = new Date();

        let newc = ee.toLocaleTimeString("en-us", options);

        if (newc != time.textContent){
            // fade in fade out

            let ttrs = 100;
            while (ttrs > 0){
                time.style.opacity = ttrs/100;
                await sleep(2);
                ttrs -= 1;
            }

            time.textContent = newc;

            while (ttrs < 100){
                time.style.opacity = ttrs/100;
                await sleep(2);
                ttrs += 1;
            }
        }

        await sleep(100);
    }
})();


(async () => {
    window.addEventListener("keydown", function(event) {
    if (event.defaultPrevented) {
    return;
    }

    let actkey = event.code.replace('Key','').replace('Digit','')
    
    // if (!gselected){
    //     google.focus();
    //     google.select();
    //     google.style.color = 'rgb(255,255,255)';
    //     gselected = true;
    // }

    // if (actkey == 'Enter'){
    //     if (google.value != ''){
    //         this.window.location.href = 'https://www.google.com/search?client=firefox-b-1-d&q='+google.value;
    //     }
    // }

    if (actkey == "ArrowDown" && ontile < todo.length - 1){
        if (!selected){
            ontile += 1;
            movehighlight(ontile);
        } else {
            // move it down
            deprioritize(lastselected);
            selectt(lastselected);
        }
    }

    if (actkey == "ArrowUp" && ontile > 0){
        if (!selected){
            ontile -= 1;
            movehighlight(ontile);
        } else {
            // move it down
            prioritize(lastselected);
            selectt(lastselected);
        }
    }

    if (actkey == "Enter"){
        if (selected){
            selected = false;
            deselectall();
        } else {
            lastselected = ontile;
            selectt(lastselected);
        }
    }

    if ((actkey == 'Z' || actkey == "Space") && !openedt){
        opentasks();
    }

}, true);
})();   

