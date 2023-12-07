const loadingDiv = document.querySelector('.loading');
let number = loadingDiv.querySelector('#number');
let value = 0;

const updateCount = setInterval(() => {
  value++;
  number.textContent = value + '% ';

  if (value == 100) {
    loadingDiv.style.display = 'none';
    clearInterval(updateCount);

    const main = '../main/main.html';
    window.location.href = main;
  }
}, 25);
