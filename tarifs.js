const tarifs = document.querySelectorAll('.tarif__item');
const advantages = document.querySelectorAll('.description__item');
const h = document.querySelector('.type');
const timerPrice = document.querySelector('.price');
const quantitySpan = document.querySelector('.quantity');
const increaseQuantityButton = document.querySelector('.timer__button_q.i');
const decreaseQuantityButton = document.querySelector('.timer__button_q.d');

let quantity = 1;
let currentPrice = 190;

const cost = [`45 BYN`, `190 BYN`, `590 BYN`, `1590 BYN`];

tarifs.forEach((e, i) => {
  e.addEventListener('click', () => {
    removeTarif();
    e.classList.add('active');
    toggleAdvs(i);
  });
});

function removeTarif() {
  tarifs.forEach((e) => {
    e.classList.remove('active');
  });
}

function toggleAdvs(k) {
  advantages.forEach((e) => {
    e.classList.remove('active');
  });

  const helper = { 0: 2, 1: 6, 2: 9, 3: 13 };
  for (let i = 0; i < helper[k]; i++) {
    advantages[i].classList.add('active');
  }

  currentPrice = +cost[k].split(' ')[0];

  hCreator(k);
}

function hCreator(k) {
  const helper = ['ОНЛАЙН-ТРАНСЛЯЦИЯ', 'Места СТАНДАРТ', 'Места VIP', 'Места PREMIUM'];
  h.textContent = (document.createElement('strong').textContent = 'Места: ') + helper[k];
  timerPrice.textContent = currentPrice * quantity + ' BYN';
}

function increaseQuantity() {
  console.log(quantity);
  quantity += 1;

  quantitySpan.textContent = quantity;
  timerPrice.textContent = currentPrice * quantity + ' BYN';
}

function decreaseQuantity() {
  if (quantity > 1) {
    quantity -= 1;
  }

  quantitySpan.textContent = quantity;
  timerPrice.textContent = currentPrice * quantity + ' BYN';
}

increaseQuantityButton.addEventListener('click', increaseQuantity);
decreaseQuantityButton.addEventListener('click', decreaseQuantity);
