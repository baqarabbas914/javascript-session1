let text = "Visit and Aptech"

let n = text.search(/aptech/i);

console.log(n);

// Regular expression flags for Pattern matching
// Most used i - for case insenstivity - Meaning Case need not to match

let string = "Learn in Aptech";

let m = string.match(/aptech/i);

console.log(m);

let replaceText = "Replace Microsoft";

let result = replaceText.replace(/microsoft/i, "Aptech");

console.log("replace Text: ", replaceText);

console.log("After replacing string: ", result);

/*
Flag	Description
/g	Performs a global match (find all)
/i	Performs case-insensitive matching
*/
const pattern = /hello/i;
console.log(pattern.test("Hello")); // returns true
console.log(pattern.test("HELLO")); // returns true
console.log(pattern.test("anything")); // returns false

// g - global flag in regular expressions

let searchString = "Black, White, red, blue, green, Brown, Mustar, Golden, Silver, purple";

let res = searchString.match(/red| blue| green/g);

console.log(res);

// Regular expressions Meta Characters

/* 
\d - Matches digits 
\w - Matches words
\s - Match Spaces
*/

// Digits Meta Character code below 

let metaText = "Number 100%";
const metaPattern = /\d/g;

let metaResult = metaText.match(metaPattern);

console.log(metaResult);

// word Matching

const wordPattern = /\w/g

let wordResult = metaText.match(wordPattern);

console.log(wordResult);

const spacePattern = /\s/g;

let spaceResult = metaText.match(spacePattern);

console.log(spaceResult);

// Regular Expression Assertions

/* 
^ - string Boundary - Matches the beginning of a String
$ - Matches the end of a string
\b - Word Boundary - Matches the beginning or end of a word
*/

const assertionPattern = /^Aptech/;

let assertionText = "Aptech JavaScript Session";

let assertionResult = assertionPattern.test(assertionText);

console.log(assertionResult);

// End of String search

const endPattern = /Session$/;

let endResult = endPattern.test(assertionText);

console.log(endResult);


// Regular Expression Classes 

/* 
[a] - Matches Character between brackets
[abc] - Matches all characters between brackets
[a-z] - Matches all characters in the range from a to z
[A-Z] - Matches all characters in the range from A to Z
[0-9] - Matches all characters in the range from 0 to 9
*/

let t = "More than 1000 times";

const p = /[0-9]/g;

let resul = t.match(p);

console.log(resul);

// Email Validation using Regular Expressions

function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9,-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

console.log(
  "Email Validation Results for test@example.com:",
  validateEmail("test@example.com"),
);

console.log(
  "Email Validation Results for invalid-email:",
  validateEmail("invalid-email"),
);

console.log(
  "Email Validation Results for test@example:",
  validateEmail("test@example"),
);

// Password Strength Checker using Regular Expressions

function checkPassword(password) {
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isLongEnough = password.length >= 8;
  return {
    hasLower,
    hasUpper,
    hasDigit,
    hasSpecial,
    isLongEnough,
    isValid: hasLower && hasUpper && hasDigit && hasSpecial && isLongEnough,
  };
}
console.log("Password Check Results for Abcdef1!:", checkPassword("Abcdef1!"));
console.log("Password Check Results for weakpass:", checkPassword("weakpass"));
