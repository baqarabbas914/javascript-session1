function greet(name) {
    return `Hello,${name}`;
};

console.log(greet("Rajab"));

// class based programming

let bankBalance = 1000;

bankBalance = - 500;

class BankAccount {
    balance = 1000;

    deposit(amount) {
        if ( amount > 0) {
            this.balance += amount;
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        }
    }

    getBalance() {
        return this.balance;
    }
}

const bankAcc = new BankAccount();
console.log(bankAcc.getBalance());
bankAcc.deposit(500);
console.log(bankAcc.getBalance());
bankAcc.withdraw(200);
console.log(bankAcc.getBalance());


// Inheritance 
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }

    start() {
        return `${this.brand} starting...`
    }
}

//Chlid class
class Car extends Vehicle {
   constructor(brand, doors) {
    super(brand);
    this.doors = doors;
   }

   horn() {
    return "Beep Beep!"; 
   }
}

const myCar = new Car("Toyota", 4);
console.log(myCar.brand);
console.log(myCar.doors);
console.log(myCar.horn());
console.log(myCar.start());
