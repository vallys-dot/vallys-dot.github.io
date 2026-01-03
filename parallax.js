const parallax = document.querySelector(".parallax");
const title = document.querySelector(".title");
const front = document.querySelector(".buttons");
const back = document.querySelector(".back-layer");

const sTitle = -100;
const sFront = -160;
const sBack = 160;

let clientX = 0;
let clientY = 0;

parallax.addEventListener('mousemove', function(event) {
    const clientX = event.clientX;
    const clientY = event.clientY;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const customX = clientX - centerX;
    const customY = clientY - centerY;

    title.style.transform = `
    translate(
        ${customX/sTitle}%,
        ${customY/sTitle}%
    )`;

    front.style.transform = `
    translate(
        ${customX/sFront}%,
        ${customY/sFront}%
    )`;

    back.style.transform = `
    translate(
        ${customX/sBack}%,
        ${customY/sBack}%
    )`;
});