let header = document.querySelector(".header");
let navbar = document.querySelector(".header .flex .navbar");
let MenuBtn = document.querySelector("#menu-btn");

MenuBtn.onclick = () => {
  navbar.classList.toggle("active");
  MenuBtn.classList.toggle("fa-times");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  MenuBtn.classList.remove("fa-times");

  if (window.screenY > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

let home = document.querySelector("#home");

home.onmousemove = (e) => {
  let homeImg = home.querySelector(".home-img");
  let x = (window.innerWidth - e.pageX * 2) / 90;
  let y = (window.innerHeight - e.pageY * 2) / 90;

  homeImg.style.transform = `translateX(${x}px) translateY(${y}px)`;
};

home.onmouseleave = (e) => {
  let homeImg = home.querySelector(".home-img");

  homeImg.style.transform = `translateX(0px) translateY(0px)`;
};

let dataOffeset = 24 * 60 * 60 * 1000 * 5;
let countDate = new Date().getTime() + dataOffeset;

function countDown() {
  let now = new Date().getTime();
  let gap = countDate - now;

  let seconds = 1000;
  let minutes = seconds * 60;
  let hours = minutes * 60;
  let days = hours * 24;

  let d = Math.floor(gap / days);
  let h = Math.floor((gap % days) / hours);
  let m = Math.floor((gap % hours) / minutes);
  let s = Math.floor((gap % minutes) / seconds);

  document.getElementById("day").innerText = d;
  document.getElementById("hour").innerText = h;
  document.getElementById("minute").innerText = m;
  document.getElementById("second").innerText = s;
}
setInterval(function () {
  countDown();
}, 1000);
