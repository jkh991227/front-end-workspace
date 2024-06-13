// DOMContentLoaded : DOM 구조가 로드되고 실행!
// window.addEventListener("DOMContentLoaded", function () {

const h1 = document.querySelector("h1");
console.log(h1);
h1.onmouseenter = function () {
  h1.style.backgroundColor = "purple";
};
h1.onmowseleave = function () {
  h1.style.backgroundColor = "pink";
};
// addEventListener만 기억하셔도 괜찮아요!
h1.addEventListener("click", function () {
  this.hidden.style, (backgroundColor = "skyblue");
});

const img = document.querySelectorAll(".container img");
console.log(img);

/* 이미지마다 이벤트 걸려면 반복문 필요! */
/*
for (const item of img) {
  img[1].addEventListener("click", function (e) {
    e.currentTarger); img[1].style.dispiay = "none";
  });
}
*/

const container = document.querySelector(".container");

container.addEventListener(e) {
  if (e.target !== e.currentTarget) {
    container.target.style.display = "none";
  }
}

container.addEventListener("click", removeHandler)
