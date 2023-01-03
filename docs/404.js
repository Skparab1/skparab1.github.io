// hmm

let tt = document.getElementById('thistext');
tt.style.left = window.innerWidth/2-tt.offsetWidth/2+'px';

let hh = document.getElementById('hehe');
hh.style.position = 'absolute';
hh.style.left = window.innerWidth/2-hh.offsetWidth/2+'px';

let gg = document.getElementById('endtext');

const sleep = ms => new Promise(res => setTimeout(res, ms));

let ct = 0;

(async () => {
    while (gg.style.opacity < 1){
        if (document.getElementById('thevid').currentTime >= document.getElementById('thevid').duration){
            gg.style.opacity = ct;
            tt.style.opacity = 1-ct;
            ct += 0.01;
            // at end of video, show the stuff
            await sleep(2);
        } else {
            await sleep(1500);
        }
    }
})();