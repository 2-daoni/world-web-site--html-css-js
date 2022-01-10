const menuBtn = document.querySelector('.menuBtn');
const menuList = document.querySelector('.menu');
const sci = document.querySelector('.sci');
const slide_btn = document.querySelector('.slide_btn');

menuBtn.onclick = function () {
  menuBtn.classList.toggle('clicked');
  menuList.classList.toggle('clicked');
  sci.classList.toggle('hide');
  slide_btn.classList.toggle('hide');
};
