const menuBtn = document.querySelector('.menuBtn');
const menuList = document.querySelector('.menu');

menuBtn.onclick = function () {
  menuBtn.classList.toggle('clicked');
  menuList.classList.toggle('clicked');
};
