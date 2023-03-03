// Constructor

//? A constructor is a special method that is used to create and initialize an object when an instance of a class or object is created. Constructors can be thought of as a blueprint for creating objects, as they define the initial state and behavior of an object.

//? In JavaScript, constructors are defined as functions that use the this keyword to define properties and methods on an object. When a constructor is called with the new keyword, a new object is created and returned with the properties and methods defined in the constructor.

// function constructor() {
//   this.name = "John";
//   this.age = 25;
//   this.sayHello = function () {
//     console.log("Hello, " + this.name);
//   };
// }


// const object = new constructor();

// object.sayHello()


// We'll see bank project example

function BankAccount(customerName,balance=0){

  // Properties
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    // Methods

    this.deposite = function (amount){
      this.balance +=amount;
      // console.log(this.balance)
    }


    this.withdraw = (amount) =>{
      this.balance -= amount;
    }

}


const dipak = new BankAccount('Dipak Kumal',1000);
dipak.deposite(2000)
dipak.withdraw(500);
// const Human = new BankAccount('Human Kumal');
// console.log(Human);
console.log(dipak);

