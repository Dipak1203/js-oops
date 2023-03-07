/*

The constructor property in a prototype is automatically setup to reference the constructor function.


Constructor functions define the prototype of the properties an object will contain. Using the constructor function, we can create a new object after passing the required parameters.

Inheriting a previously defined constructor function means using the parameters of the previously defined function along with adding some new parameters to the newly defined constructor function. For this, we need to use the call() function which allows us to call a function defined somewhere else in the current context. 


*/

function BankAccount(customerName,balance = 0){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance =  balance
}


BankAccount.prototype.deposit = function(amount){
    this.balance += amount;
}


BankAccount.prototype.withdraw = function(amount){
    this.balance -= amount;
}



function currentAccount(customerName,balance = 0){
    BankAccount.call(this,customerName,balance);
    this.transactionLimit = 10000;
}

currentAccount.prototype = Object.create(BankAccount.prototype);

currentAccount.prototype.takeBusinessLoan = function(){
    console.log("Taking business loan")
}



function SavingAccount(customerName,balance = 0){
    // this keyword point SavingAccount 
    BankAccount.call(this,customerName,balance);
    this.transactionLimit = 4000;
}

SavingAccount.prototype = Object.create(BankAccount.prototype);

SavingAccount.prototype.takePersonalLoan = function(){
    console.log("Taking business loan")
}



const dipak = new SavingAccount("Dipak",3000);
dipak.deposit(5000);
console.log(dipak)