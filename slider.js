const itemsArr = document.querySelectorAll(".slider__item");

document.querySelector(".slider__button.left").addEventListener("click", () => {
  for (let i = 0; i < itemsArr.length; i++) {
    if (itemsArr[i].classList.contains("left")) {
      itemsArr[i].classList.add("right");
      itemsArr[i].classList.remove("left");
    } else if (itemsArr[i].classList.contains("right")) {
      itemsArr[i].classList.add("center");
      itemsArr[i].classList.remove("right");
    } else if (itemsArr[i].classList.contains("center")) {
      itemsArr[i].classList.add("left");
      itemsArr[i].classList.remove("center");
    }
  }
});

document.querySelector(".slider__button.right").addEventListener("click", () => {
  itemsArr.forEach((e) => {
    if (e.classList.contains("left")) {
      e.classList.remove("left");
      e.classList.add("center");
    } else if (e.classList.contains("right")) {
      e.classList.remove("right");
      e.classList.add("left");
    } else if (e.classList.contains("center")) {
      e.classList.remove("center");
      e.classList.add("right");
    }
  });
});
