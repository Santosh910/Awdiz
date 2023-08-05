var bar =document.getElementById('bar');
var close =document.getElementById('close');
var nav =document.getElementById('nav');

if('bar'){
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}
if('close'){
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}