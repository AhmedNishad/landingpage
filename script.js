let words = ['Innovate', 'Progress'];
const header = document.getElementById('changing-text');
const caption = document.getElementById('promo')
let i = 0;

header.style.display = 'hidden';

window.setInterval(function(){
    
    fadeOut(header);
    if(i < words.length-1){
        i++;
    }else{
        i=0;
    }
    header.innerText = words[i]
    //header.style.opacity = '1';
    fadeIn(header);

}, 4000);

let promotext = "Be a part of the Revolution...";

window.setInterval(function(){
    if(promotext.length>27){
        promotext = promotext.substring(0, promotext.length-1)
    }else{
        promotext = "Be a part of the Revolution..."
    }
        
    
    caption.innerHTML = promotext;

}, 1000)

function fadeOut(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'hidden';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function fadeIn(element) {
    var op = 0.1;  // initial opacity
    var timer = setInterval(function () {
        if (op == 1){
            clearInterval(timer);
            element.style.display = 'hidden';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 50);
}