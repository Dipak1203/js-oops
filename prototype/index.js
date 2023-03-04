/*

In JavaScript, a prototype is an object that is associated with every function and object, and it serves as a blueprint or template for creating new objects of that type. The prototype object contains properties and methods that can be inherited by new instances of the object.

When you create a function in JavaScript, it automatically gets a prototype property, which is an object. You can add properties and methods to the prototype object, and these will be inherited by any new objects created with that function as a constructor.
*/

// We'll see  bank project

//This problem is this below contstructor every object have same methods

// function BankAccount(customerName,balance = 0){
//     this.customerName = customerName;
//     this.balance = balance;
//     this.accountNumber = Date.now();

//     this.deposit = function(amount){
//         this.balance += amount;
//     }

//     this.withdraw = (amount) =>{
//         this.balance -= amount;
//     }
// }

// // Create object
// const Dipak = new BankAccount('Dipak Kumal',3000);

// console.log(Dipak)

// solution To use 'prototype' keyword

function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.balance = balance;
  this.accountNumber = Date.now();
}

const dipak = new  BankAccount('Dipak Kumal',3000);


BankAccount.prototype.deposit = function (amount){
    this.balance +=amount;
}
BankAccount.prototype.withdraw = function(amount){
    this.balance -= amount;
}
dipak.deposit(3000);
dipak.withdraw(2000);
// console.log(BankAccount.prototype)

console.log(dipak)
