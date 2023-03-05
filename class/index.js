

// Class in Javascript

// Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.


class BankAccount{
    customerName;
    accountNumber;
    balance;

// This method is called when the class is created. It is called with the name of the class and the constructor.    
    constructor(customerName, balance){
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;
        console.log(balance)
    }

    // Creating Method in Class 
    
    deposit(amount){
        this.balance += amount;
    }

    withdraw(amount){
        this.balance -= amount;
    }

}

// Creating Object
const dipak = new BankAccount('Dipak Kumal',3000);
dipak.deposit(2000);
console.log(dipak)