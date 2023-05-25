const dayOrNightSlider = document.querySelector('.input');
const body = document.querySelector('body');
const upwardBtn = document.querySelector('.upward-btn');

dayOrNightSlider.addEventListener("click", () => {
    body.toggleAttribute('isNight');
});
upwardBtn.addEventListener("click", () => {
    scrollTo(0, 0)
});
window.addEventListener("scroll", () => {
    upwardBtn.classList.toggle('none', scrollY < 600)
});

