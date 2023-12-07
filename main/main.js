const form = document.getElementById('form');
const ul = document.getElementById('ul');
const navUl = document.getElementById('nav').querySelector('ul');
const sideBarIcon = document.querySelector('.side-bar-icon').querySelector('i');
const deleteAll = document.getElementById('delete-all');

const walletEl = document.getElementById('wallet');
const incomeEl = document.getElementById('income');
const expenseEl = document.getElementById('expense');

let income = 0;
let expense = 0;
let wallet = 0;

let incomeList =
  localStorage.getItem('incomeList') !== null
    ? JSON.parse(localStorage.getItem('incomeList'))
    : [];
let expenseList =
  localStorage.getItem('expenseList') !== null
    ? JSON.parse(localStorage.getItem('expenseList'))
    : [];

let transactions =
  localStorage.getItem('transactions') !== null
    ? JSON.parse(localStorage.getItem('transactions'))
    : [];

const chart = new Chart(pieChart, {
  type: 'pie',
  data: {
    labels: ['income', 'expense'],
    datasets: [
      {
        label: 'New Dataset',
        data: [60, 40],
        backgroundColor: ['#28c76f', ' #f6416c']
      }
    ]
  },
  options: {
    layout: {
      padding: {
        top: 10, // Adjust the top margin
        right: 40, // Adjust the right margin
        bottom: 10, // Adjust the bottom margin
        left: 10 // Adjust the left margin
      }
    },
    plugins: {
      legend: {
        position: 'right',
        align: 'end',
        labels: {
          boxWidth: 20
        }
      }
    }
  }
});

loading();

sideBarIcon.addEventListener('click', (event) => {
  navUl.classList.toggle('display');
  const body = document.querySelector('body');
  body.classList.toggle('control-body-mobile-view-nav');
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const note = form.note.value;
  const type = form.type.value;
  let amount = form.amount.value;
  const date = new Date().toISOString().slice(0, 10);
  const time = new Date().toLocaleTimeString();
  const randomID = Math.round(Math.random() * 10000);

  if (note.length > 0 && amount.length > 0) {
    if (type === 'income') {
      ul.append(templateLI(note, amount, date, time, type, randomID));
      setLocalStorage(note, amount, date, time, type, randomID);
      updateIncomeOrExpenseList(type, amount);
      submiting(type, amount);
      form.reset();
    } else if (type === 'expense') {
      ul.append(templateLI(note, amount, date, time, type, randomID));
      setLocalStorage(note, amount, date, time, type, randomID);
      updateIncomeOrExpenseList(type, amount);
      submiting(type, amount);
      form.reset();
    }
  } else {
    console.log('invalid enter');
  }
});

function templateLI(note, amount, date, time, classname, randomID) {
  const createNewLi = document.createElement('li');
  createNewLi.classList.add(classname);
  createNewLi.setAttribute('data-id', randomID);
  createNewLi.innerHTML = ` 
                        <span id="content">${note}</span>
                        <span id="amount">${amount}$</span>
                       <div class="date-time">
                        <span id="date">${date}</span>
                        <span id="time">${time}</span>
                       </div>
                        <span id="delete-button"><i class="bi bi-trash delete"></i></span>
                `;

  return createNewLi;
}

function setLocalStorage(note, amount, date, time, type, randomID) {
  const transaction = {
    description: note,
    type: type,
    amount: amount,
    date: date,
    time: time,
    randomID: randomID
  };

  transactions.push(transaction);
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

ul.addEventListener('click', (event) => {
  const targetEl = event.target;

  if (targetEl.parentElement.id === 'delete-button') {
    targetEl.parentElement.parentElement.remove();
    removeData(targetEl);
    removeLocalStorageData(
      targetEl.parentElement.parentElement.getAttribute('data-id'),
      targetEl
    );
  }
});

function updateOverview() {
  expenseEl.textContent = expense;
  incomeEl.textContent = income;

  wallet = income - expense;
  walletEl.textContent = wallet;
}

function updateIncomeOrExpenseList(type, amount) {
  if (type === 'income') {
    incomeList.push(amount);
    localStorage.setItem('incomeList', JSON.stringify(incomeList));
  } else if (type === 'expense') {
    expenseList.push(amount);
    localStorage.setItem('expenseList', JSON.stringify(expenseList));
  }
}

function loading() {
  if (incomeList.length <= 0 && expenseList <= 0) {
    updateOverview();
    updateChart();
  } else {
    incomeList.forEach((element) => {
      income += parseInt(element);
      updateOverview();
      updateChart();
    });

    expenseList.forEach((element) => {
      expense += parseInt(element);
      updateOverview();
      updateChart();
    });
  }

  if (transactions.length > 0) {
    transactions.forEach((transaction) => {
      ul.append(
        templateLI(
          transaction.description,
          transaction.amount,
          transaction.date,
          transaction.time,
          transaction.type,
          transaction.randomID
        )
      );
    });
  }
}

function submiting(type, amount) {
  if (type === 'income') {
    income += parseInt(amount);
    updateOverview();
    updateChart();
  } else if (type === 'expense') {
    expense += parseInt(amount);
    updateOverview();
    updateChart();
  }
}

function removeData(targetEl) {
  const targetElement = targetEl.parentElement.parentElement;
  const targetElementAmount =
    targetElement.querySelector('#amount').textContent;
  const targetElementtype = targetElement.classList[0];

  if (targetElementtype === 'income') {
    income -= parseInt(targetElementAmount);
    updateOverview();
    updateChart();
  } else if (targetElementtype === 'expense') {
    expense -= parseInt(targetElementAmount);
    updateOverview();
    updateChart();
  }
}

function removeLocalStorageData(targetElementRandomID, targetEl) {
  const targetElAmount = targetEl.parentElement.parentElement
    .querySelector('#amount')
    .textContent.slice(0, -1);

  console.log(targetEl.parentElement.parentElement.classList[0]);

  if (targetEl.parentElement.parentElement.classList[0] == 'income') {
    incomeList = incomeList.filter((item) => item !== targetElAmount);
    console.log(incomeList);
    localStorage.setItem('incomeList', JSON.stringify(incomeList));
  } else if (targetEl.parentElement.parentElement.classList[0] == 'expense') {
    expenseList = expenseList.filter((item) => item !== targetElAmount);
    localStorage.setItem('expenseList', JSON.stringify(expenseList));
  }

  transactions = transactions.filter(
    (transaction) => transaction.randomID !== parseInt(targetElementRandomID)
  );
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

function updateChart() {
  chart.data.datasets[0].data = [income, expense];
  chart.update();
}

deleteAll.addEventListener('click', () => {
  localStorage.removeItem('transactions');
  localStorage.removeItem('incomeList');
  localStorage.removeItem('expenseList');

  location.reload();
});
