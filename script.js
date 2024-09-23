const header =document.querySelector("header");

// toggle can add or remove a class if the condition are met here if y>80 it adds a class called sticky
//toggle does both the work of classList.add and Classlist.remove depending on condition
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 80);
})

let menu=document.querySelector('#menu-icon');
let navlist=document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');//adds the class for the X mark button
    navlist.classList.toggle('open')
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open')
}
