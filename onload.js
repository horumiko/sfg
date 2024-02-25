const animates = document.querySelectorAll(".animated");

function outNum(start, step, gr, el, time, add) {
  var n = start;
  var t = Math.round(time / (gr / step));
  let interval = setInterval(() => {
    n += step;
    if (n >= gr) {
      n = gr;
      clearInterval(interval);
    }
    el.textContent = add ? n + add : n;
  }, t);
}

window.addEventListener("load", () => {
  outNum(0, 1, 12, animates[0], 1500);
  outNum(0, 1, 79, animates[1], 3000, "%");
  outNum(0, 1, 10, animates[2], 1500);
  outNum(0, 1, 5, animates[3], 1500, "+");
});
