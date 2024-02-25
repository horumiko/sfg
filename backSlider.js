const section = document.querySelector('#first-section');

const backgrounds = [
  "url('./img/slider/4.png')",
  "url('./img/slider/3.png')",
  "url('./img/slider/2.png')",
  "url('./img/slider/1.png')",
];

let i = 0;
setInterval(() => {
  i < 4 ? i++ : (i = 0);
  section.style.background = backgrounds[i];
  section.style.backgroundSize = 'cover';
}, 6000);
