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