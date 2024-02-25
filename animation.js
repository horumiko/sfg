const items = document.querySelectorAll('.question');

setInterval(() => {
  items.forEach((e) => {
    e.classList.toggle('big');
  });
}, 400);
