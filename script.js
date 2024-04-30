let text = document.getElementById('text');
let grass1 = document.getElementById('grass1');
let grass2 = document.getElementById('grass2');
let rock1 = document.getElementById('rock1');
let rock2 = document.getElementById('rock2');
let btn = document.getElementById('btn');
let header = document.getElementById('header');
let sun = document.getElementById('sun');


window.addEventListener('scroll',function(){
    let value = this.window.scrollY;
    grass1.style.left = value * -5 + 'px';
    grass2.style.right = value * -5 + 'px';
    text.style.top = 50 + value * -1 + '%'; 
    rock1.style.left = value * -5 + 'px';
    rock2.style.right = value * -5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    sun.style.top = value * 0.25 + 'px';
    header.style.top = value * 0.5 +'px';

});