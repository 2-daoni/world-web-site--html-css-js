const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slides = document.querySelectorAll('.slides');
const texts = document.querySelectorAll('.texts');

let i = 0;
let p = 0;

function Slide(n) {
  console.log(i);
  for (let slide of slides) {
    slide.classList.remove('active');
    slides[n].classList.add('active');
  }
}

function TextSlide(n) {
  console.log(p);
  for (let text of texts) {
    text.classList.remove('active');
    texts[n].classList.add('active');
  }
}

right.addEventListener('click', function () {
  if (i && p == slides.length - 1) {
    i = 0;
    p = 0;
    Slide(i);
    TextSlide(p);
  } else {
    i++;
    p++;
    Slide(i);
    TextSlide(p);
  }
});

left.addEventListener('click', function () {
  if (i && p == 0) {
    i = slides.length - 1;
    p = slides.length - 1;
    Slide(i);
    TextSlide(p);
  } else {
    i--;
    p--;
    Slide(i);
    TextSlide(p);
  }
});
