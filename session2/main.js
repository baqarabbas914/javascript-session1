let marks = 70;
let grade;

if (marks >= 90) {
    grade = "A+";
} else if (marks >= 80) {
    grade = "A";
} else if (marks >= 70) {
    grade = "B";
} else if (marks >= 60) {
    grade = "C";
} else if (marks >= 50) {
    grade = "D";
} else {
    grade = "F";
}

console.log(`The grade of the student with marks ${marks} is ${grade}`);

// Switch Case 
let day = 3;
let dayname;

switch (day) {
    case 1:
      dayname = "Monday";
      break;
    case 2: 
        dayname = "Tuesday";
        break;
    case 3:
        dayname = "wednesday";
        break;
    case 4: 
        dayname = "Thursday";
        break;
    case 5:
        dayname = "Friday";
        break;
    case 6:
        dayname = "Saturday";
        break;
    case 7: 
        dayname = "Sunday";
        break;
    default: 
        dayname = "Invalid Day number"
}

console.log(`The Day number ${day} of the week is ${dayname}`);

// Ternary operator 

let age = 15;

let canVote;

// condition ? "decion1" : "decision2"
canVote = (age >= 18) ? "Yes, you can vote" : "You are too young to vote";

console.log(`Your age is ${age}. Can you vote? ${canVote}`);

// Loops
// for, while, do while, for of -> variant of for loop, for in -> variant of for loop
// to repeatitively perform an action we use loops

console.log("For Loop...");
for(let i = 0; i < 10; i++) { 
    console.log(`Value of i: ${i}`);
}

let j = 0;
while (j < 10) {
    console.log(`Value of i: ${j}`);
    j++;
}

// for of 
let colors = ["Red", "Green", "Blue"];

for (let i = 0; i < colors.length; i++) {
    console.log(`The color at ${i}: ${colors[i]}`);
}

for (let color of colors) {
    console.log(`${color}`);
}

// for in - Objects

let student = {
 name: "Muhammad wahaj",
 age: 25,
 enrolled: true,
};

for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}

