let age = 25;
let name = "Ghulam Muhammad";
let isAdult = true;
let isLoggedIn = true;

let colors = ["red", "green", "blue"];
let score = [95, 97,100];


let student = {
 name: "Muhammad wahaj",
 age: 25,
 enrolled: true,
 studentInfo: function() {
    return this.name + " is " + this.age + " years old.";
 }
};

console.log(colors[0]);
console.log(colors[1]);

console.log(student["name"]);

console.log(student.name);
console.log(student.enrolled);

console.log(student.studentInfo());

console.log(typeof age);
console.log(typeof isLoggedIn);
console.log(typeof colors);
console.log(Array.isArray(colors));
console.log(Array.isArray(student));

// Operators in JavaScript
// Airithmatic +, -, *, /, % 

let a = 10, b = 5, sum;

sum = a + b;
console.log(sum);

// Comparison Operators 
// ==, ===, <, > <=, >= 

let num = 25;
let str = "25";

console.log(typeof num);
console.log(typeof str);

console.log(num == str);
console.log(num === str);

console.log(10 > 9);
console.log(10 < 9);

// Logical Operators
// &&, ||, !

if (typeof num === "number" && typeof str === "number") {
    console.log("DataType number");
} else {
    console.log("Different data types");
}

if (typeof num === "number" || typeof str === "number") {
    console.log("One DataType is number");
} else {
    console.log("Different data types");
}

if (typeof str !== "number") {
    console.log("It's string");
}

