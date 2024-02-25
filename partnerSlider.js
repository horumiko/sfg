const leftPartner = document.querySelector('.btn-left');
const rightPartner = document.querySelector('.btn-right');

let left = 0;
let max = 0;

document.querySelectorAll('.official__partner').forEach((e) => {
  e.style.left = left + 'px';
  left += 200;
  max = left - 200;
});

var interval;

function manipulateInterval() {
  interval = setInterval(() => {
    const items = document.querySelectorAll('.official__partner');

    items.forEach((e) => {
      const temp = +e.style.left.split('px')[0];
      e.style.left = temp - 200 + 'px';
    });
    const el = items[0].cloneNode();
    el.style.left = max + 'px';
    setTimeout(() => {
      items[0].remove();
      document.querySelector('.spis2').append(el);
    }, 1000);
  }, 2000);
}

manipulateInterval();

function swipeRight() {
  clearInterval(interval);
  const items = document.querySelectorAll('.official__partner');
  rightPartner.setAttribute('disabled', '');

  const el = items[items.length - 1].cloneNode();
  el.style.left = -0 + 'px';
  items[items.length - 1].remove();

  document.querySelector('.spis2').prepend(el);

  items.forEach((e) => {
    const temp = +e.style.left.split('px')[0];
    e.style.left = temp + 200 + 'px';
  });

  setTimeout(() => {
    rightPartner.removeAttribute('disabled');
  }, 800);
  manipulateInterval();
}

function swipeLeft() {
  clearInterval(interval);
  const items = document.querySelectorAll('.official__partner');
  leftPartner.setAttribute('disabled', '');
  items.forEach((e) => {
    const temp = +e.style.left.split('px')[0];
    e.style.left = temp - 200 + 'px';
  });
  const el = items[0].cloneNode();
  el.style.left = max + 'px';
  setTimeout(() => {
    items[0].remove();
    document.querySelector('.spis2').append(el);
    leftPartner.removeAttribute('disabled');
  }, 1000);

  manipulateInterval();
}

leftPartner.addEventListener('click', () => {
  swipeLeft();
});

rightPartner.addEventListener('click', () => {
  swipeRight();
});
