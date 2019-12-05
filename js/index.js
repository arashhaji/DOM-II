// Your code goes here

//mouseover and mouseout
const intro = document.querySelector('.intro h2');
intro.addEventListener('mouseover', () => {
    intro.style.color = 'yellow';
});

intro.addEventListener('mouseout', () => {
    intro.style.color = 'black';
});
//doubleclick
let letsGo = document.querySelector(".img-content img");
letsGo.addEventListener("dblclick", (event) => {
    event.preventDefault();
    alert("You are Here!");
});
//load
const pickyourdestination = document.querySelector('.content-destination');
window.addEventListener('load', () => {
    pickyourdestination.style.background = 'cyan';
})
//scroll
const letsgo = document.querySelector('.content-section .text-content h2');
document.addEventListener('scroll', () => {
	letsgo.style.color = 'limegreen';
});

//keydown
const crazycolors = document.querySelector('body');
document.addEventListener('keydown', () => {
	crazycolors.style.background = 'red';
});
//mousedown and mouseup
const bigp = document.querySelector('p');
document.addEventListener('mousedown', () => {
	bigp.style.fontSize = '3rem';
});
document.addEventListener('mouseup', () => {
	bigp.style.fontSize = '2rem';
});
//img of bus gone
const disappear = document.querySelector('.intro img');
disappear.addEventListener('contextmenu', (event) => {
    disappear.style.display = 'none';
    event.stopPropagation();
});
//blue border 
const stophome = document.querySelector('.intro');
stophome.addEventListener('contextmenu', () => {
	stophome.style.border = '3px dashed blue';
});

const stopNav = document.querySelector(".nav-link");
stopNav.addEventListener("click", (event) => {
  event.preventDefault();
})

//stretch

document.querySelectorAll(".btn").forEach(el => {
    el.addEventListener("mouseenter", () => {
      gsap.to(el, {
       duration: 4,
       rotateY: 360,
       ease: "elastic(1, 0.75)"
      })
    })
  })
