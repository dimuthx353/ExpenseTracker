// variables
const loginForm = document.querySelector('#login-form');
const errorMessage = document.querySelector('#error-message');
const signUpBtn = document.querySelector('.sign-up-btn');
const signUpForm = document.querySelector('#sign-up-form');
const username = document.getElementById('username');
const inputs = document.querySelectorAll('input');
const bodyEl = document.querySelector('body');

let x = 1;

setInterval(() => {
  if (x >= 6) {
    x = 1;
  }
  bodyEl.style.backgroundImage = `url(./images/${x}.jpg)`;
  x++;
}, 5000);

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = 'admin';
  const password = 1234;

  if (
    loginForm.username.value == username &&
    loginForm.password.value == password
  ) {
    errorMessage.classList.remove('display-none');
    errorMessage.innerHTML = `login sucess`;
    errorMessage.classList.add('green-color');
    window.location.href = './loading/loading.html';
  } else {
    document.querySelector('.login').style.border = '1px solid red';
    errorMessage.classList.remove('display-none');
    errorMessage.innerHTML = `wrong try again !`;
  }
});

loginForm.addEventListener('keyup', (event) => {
  const username = 'admin';
  const password = 1234;

  if (loginForm.username.value == username) {
    loginForm.username.style.color = 'greenyellow';
  } else {
    loginForm.username.style.color = 'red';
  }

  if (loginForm.password.value == password) {
    loginForm.password.style.color = 'greenyellow';
  } else {
    loginForm.password.style.color = 'red';
  }
});

const body = document.querySelector('body');

/*
loginForm.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;

  const moveX = (mouseX - 0.5) * 30;
  const moveY = (mouseY - 0.5) * 30;

  body.style.transform = `translate(${moveX}px, ${moveY}px)`;
  body.style.transition = 'traslate 0.3s ease-in-out';
  body.style.backdropFilter = 'blur(5px)';
});
*/

loginForm.addEventListener('mouseout', (e) => {
  body.style.backdropFilter = 'blur(0px)';
});

signUpBtn.addEventListener('click', (event) => {
  event.target.parentElement.style.display = 'none';
  signUpForm.style.display = 'block';
});

signUpForm.addEventListener('keyup', (event) => {
  if (signUpForm.password.value !== signUpForm.password2.value) {
    signUpForm.password.style.borderBottom = '2px solid red';
    signUpForm.password2.style.borderBottom = '2px solid red';
  } else {
    signUpForm.password.style.borderBottom = '2px solid #fff';
    signUpForm.password2.style.borderBottom = '2px solid #fff';
  }
});

loginForm.querySelector('#password').addEventListener('click', (event) => {
  loginForm.querySelector('#password').style.marginTop = '50px';
  const allSpan = loginForm.querySelector('#password').querySelectorAll('span');

  allSpan[0].style.transition = 'top 0.1s ease-in';
  allSpan[1].style.transition = 'top 0.2s ease-in';
  allSpan[2].style.transition = 'top 0.3s ease-in';
  allSpan[3].style.transition = 'top 0.4s ease-in';
  allSpan[4].style.transition = 'top 0.5s ease-in';
  allSpan[5].style.transition = 'top 0.6s ease-in';
  allSpan[6].style.transition = 'top 0.7s ease-in';
  allSpan[7].style.transition = 'top 0.8s ease-in';

  allSpan.forEach((element) => {
    element.style.top = '0px';
  });
});

loginForm.querySelector('#username').addEventListener('click', (event) => {
  const allSpan = loginForm.querySelector('#username').querySelectorAll('span');

  allSpan[0].style.transition = 'top 0.1s ease-in';
  allSpan[1].style.transition = 'top 0.2s ease-in';
  allSpan[2].style.transition = 'top 0.3s ease-in';
  allSpan[3].style.transition = 'top 0.4s ease-in';
  allSpan[4].style.transition = 'top 0.5s ease-in';
  allSpan[5].style.transition = 'top 0.6s ease-in';
  allSpan[6].style.transition = 'top 0.7s ease-in';
  allSpan[7].style.transition = 'top 0.8s ease-in';

  allSpan.forEach((element) => {
    element.style.top = '0px';
  });
});

inputs[0].addEventListener('click', (e) => {
  const allSpan = loginForm.querySelector('#username').querySelectorAll('span');

  allSpan[0].style.transition = 'top 0.1s ease-in';
  allSpan[1].style.transition = 'top 0.2s ease-in';
  allSpan[2].style.transition = 'top 0.3s ease-in';
  allSpan[3].style.transition = 'top 0.4s ease-in';
  allSpan[4].style.transition = 'top 0.5s ease-in';
  allSpan[5].style.transition = 'top 0.6s ease-in';
  allSpan[6].style.transition = 'top 0.7s ease-in';
  allSpan[7].style.transition = 'top 0.8s ease-in';

  allSpan.forEach((element) => {
    element.style.top = '0px';
  });
});

inputs[1].addEventListener('click', (e) => {
  loginForm.querySelector('#password').style.marginTop = '50px';
  const allSpan = loginForm.querySelector('#password').querySelectorAll('span');

  allSpan[0].style.transition = 'top 0.1s ease-in';
  allSpan[1].style.transition = 'top 0.2s ease-in';
  allSpan[2].style.transition = 'top 0.3s ease-in';
  allSpan[3].style.transition = 'top 0.4s ease-in';
  allSpan[4].style.transition = 'top 0.5s ease-in';
  allSpan[5].style.transition = 'top 0.6s ease-in';
  allSpan[6].style.transition = 'top 0.7s ease-in';
  allSpan[7].style.transition = 'top 0.8s ease-in';

  allSpan.forEach((element) => {
    element.style.top = '0px';
  });
});
