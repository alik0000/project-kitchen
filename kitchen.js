const ScrollHeader = () => {
  const head = document.getElementById('header');
    if (this.scrollY < 500) {
        head.classList.remove('scrolling');
    } else {
        head.classList.add('scrolling');
    }
}

window.addEventListener("scroll", ScrollHeader);

// Scroll Top
const ScrolTop = () => {
  const ScrolT = document.getElementById('Scrol-Top');
  if(this.scrollY >= 600) ScrolT.classList.add('ScrolDown');
  else ScrolT.classList.remove('ScrolDown');
}
window.addEventListener('scroll', ScrolTop);

// ScrollReaveal

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.content, .about-us, .ourMenu, #Expert, .comments, #footer`, {
    interval: 200
})