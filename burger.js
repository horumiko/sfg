const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
  document.querySelector("body").classList.toggle("active");
  checker();
});

function checker() {
  if (nav.classList.contains("active")) {
    document.querySelector(".slider__item.center").style.zIndex = 0;
  } else {
    document.querySelector(".slider__item.center").style.zIndex = 1;
  }
}

document.querySelectorAll(".nav__ul__li").forEach((e) => {
  e.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
    document.querySelector("body").classList.remove("active");
  });
});
