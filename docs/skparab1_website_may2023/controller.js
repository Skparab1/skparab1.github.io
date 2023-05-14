const sleep = ms => new Promise(res => setTimeout(res, ms)); // i need this lmao

let bgvid = document.getElementById('bgvid');
let mainheading = document.getElementById('mainheading');
let header = document.getElementById('header');
bgvid.play();

let screen1 = document.getElementById('screen1');
let leftbutton = document.getElementById('leftbutton');
let rightbutton = document.getElementById('rightbutton');
let thelogo = document.getElementById('logo-image');
let setlogosrc = false;
let vidpaused = false;

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

    let i = 0;
    while (i < 100){
        el.style.opacity = i/100;
        fullblock.style.opacity = (i/100)*0.6;
        i += 1;
        await sleep();
    }
}

async function closeelement(el){
    el = document.getElementById(el);
    let fullblock = document.getElementById('fullblock');

    let i = 0;
    while (i < 100){
        el.style.opacity = (1-i/100);
        fullblock.style.opacity = (0.6-(i/100)*0.6);
        i += 1;
        await sleep();
    }

    el.style.display = 'none';
    fullblock.style.display = 'none';
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
            }
            if (!setlogosrc){
                thelogo.src = 'images/logo.gif';
                setlogosrc = true;
            }
        } else {
            if (vidpaused){
                bgvid.play();
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