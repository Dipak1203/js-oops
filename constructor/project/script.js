const accounts = [];
const accountForm = document.getElementById("accountForm");
const customerName = document.getElementById("customerName");
const balance = document.getElementById("balance");

const depositForm = document.getElementById("depositForm");
const amount = document.getElementById("amount");
const accountNumber = document.getElementById("accountNumber");



function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;
  this.deposit = function (amount) {
    this.balance += amount;
  };
  this.withdraw = (amount) => {
    this.balance -= amount;
  };
}

const RAM = new BankAccount('Ram',300);
RAM.deposit(700)
console.log(RAM);

accountForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const account = new BankAccount(customerName.value, +balance.value);
  accounts.push(account);
  console.log(accounts);
});

depositForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const account = accounts.find(
    (account) => {
    return account.accountNumber === +accountNumber.value;
  });

  account.deposit(+amount.value);
  console.log(accounts);
});
