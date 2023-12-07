// select elements
const add = document.getElementById('add-form');
const history = document.querySelector('#history');
const wallet = document.getElementById('wallet');
const income = document.getElementById('income');
const expense = document.getElementById('expense');
const type = document.getElementById('type');
const pieChart = document.querySelector('#pieChart');
const ul = history.querySelector('ul');
const navUl = document.getElementById('nav').querySelector('ul');
const sideBarIcon = document.querySelector('.side-bar-icon').querySelector('i');
let date = new Date().toISOString().slice(0, 10);
let time = new Date().toLocaleTimeString();

// variable decleration
let expenseTotal = 0;
let incomeTotal = 0;
let walletTotal = 0;
let zero = 0;
let amountTextContent;

// reset income expense and wallet balance
wallet.textContent = expense.textContent = income.textContent = zero;

// add new transactions
add.addEventListener('submit', (event) => {
  // stop default action
  event.preventDefault();

  const note = add.note.value;
  const amount = add.amount.value;
  updateDateTime();
  if (note.length >= 1 && amount.length >= 1) {
    const createNewLi = document.createElement('li');
    createNewLi.innerHTML = ` 
                        <span id="content" class="content">${note}</span>
                        <span id="amount">${amount}$</span>
                       <div class="date-time">
                        <span id="date">${date}</span>
                        <span id="time">${time}</span>
                       </div>
                        <span id="delete-button"><i class="bi bi-trash"></i></span>
                `;

    if (type.value == 'income') {
      createNewLi.classList.add('green');
      ul.append(createNewLi);

      //convert amount string to number
      amountTextContent = parseInt(add.amount.value);
      incomeTotal += amountTextContent;
      updateWallet();
    } else {
      createNewLi.classList.add('red');
      ul.append(createNewLi);

      //convert amount string to number
      amountTextContent = parseInt(add.amount.value);
      expenseTotal += amountTextContent;
      updateWallet();
    }
  }

  updateChart();
});

// delete click event
ul.addEventListener('click', (event) => {
  const IsItDeleteIcon = [...event.target.classList];

  if (IsItDeleteIcon[1] === 'bi-trash') {
    event.target.parentElement.parentElement.remove();
  }
});

// mobile side bar


// update chart

// update wallet balance
function updateWallet() {
  income.textContent = `${incomeTotal}$`;
  expense.textContent = `${expenseTotal}$`;

  walletTotal = incomeTotal - expenseTotal;
  wallet.textContent = `${walletTotal}$`;
}

// update date and time
function updateDateTime() {
  date = new Date().toISOString().slice(0, 10);
  time = new Date().toLocaleTimeString();
}



// ----------------------------------------
 transactions.forEach((element) => {
   if (element.type === 'income') {
     incomeList.push(element.amount);
   } else if (element.type === 'expense') {
     expenseList.push(element.amount);
   }
   console.log(incomeList, expenseList);
 });

 incomeList.forEach((element) => {
   income += parseInt(element);
   updateOverview();
 });

 expenseList.forEach((element) => {
   expense += parseInt(element);
   updateOverview();
 });