
// this is for menu show 
document.addEventListener("DOMContentLoaded", function () {
    let hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", function () {
        let menu = document.querySelector('.menu-bar');
        menu.classList.toggle('show');
    });
});

// this is for typed function in section1
var typed = new Typed('#element', {
    strings: ['<i>Marketing.', 'Web Assets.', ' Branding.'],
    typeSpeed: 30,
    backSpeed: 25,
    loop: true
});
// Add event listener to toggle button visibility based on scroll position
window.addEventListener('scroll', function () {
    var button = document.getElementById('fixedButton');
    if (window.scrollY > 100) { // Adjust this value as needed
        button.classList.add('show');
    } else {
        button.classList.remove('show');
    }
});

// this is for effect in section2 content3
const element = document.querySelector('.content2-3');
element.addEventListener('mouseenter', (event) => {
    const { clientX, clientY, target } = event;
    const { left, top, width, height } = target.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    const oppositeX = -deltaX * 0.1;
    const oppositeY = -deltaY * 0.1;
    target.style.transform = `translate(${oppositeX}px, ${oppositeY}px)`;
    target.style.transition = 'all 1s';
});
element.addEventListener('mouseleave', () => {
    element.style.transform = 'translate(0, 0)';
});

// this is for image slider on mouse wheel
const scrollContainer2 = document.querySelectorAll('.move-image');
for (const item of scrollContainer2) {
    item.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    })
}
// jquery code for image slider 
$(document).ready(function () {
    $('.bxslider').bxSlider();
});

// this is for effect in section4 sec4-cont5-2 img
const elemimg = document.querySelector('.sec4-cont5-2 img');
elemimg.addEventListener('mouseenter', (event) => {
    const { clientX, clientY, target } = event;
    const { left, top, width, height } = target.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    const oppositeX = -deltaX * 0.1;
    const oppositeY = -deltaY * 0.1;
    target.style.transform = `translate(${oppositeX}px, ${oppositeY}px)`;
    target.style.transition = 'all 1s';
});
elemimg.addEventListener('mouseleave', () => {
    elemimg.style.transform = 'translate(0, 0)';
});


// this is for effect in section4 .sec5-con1 img
const elem2img = document.querySelector('.sec5-con1 img');
elem2img.addEventListener('mouseenter', (event) => {
    const { clientX, clientY, target } = event;
    const { left, top, width, height } = target.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    const oppositeX = -deltaX * 0.1;
    const oppositeY = -deltaY * 0.1;
    target.style.transform = `translate(${oppositeX}px, ${oppositeY}px)`;
    target.style.transition = 'all 1s';
});
elem2img.addEventListener('mouseleave', () => {
    elem2img.style.transform = 'translate(0, 0)';
});


