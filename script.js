//
//function calling other function
const calculateAge = function (birthyer) {
  return 2023 - birthyer;
};

const aAge = calculateAge(2002);
console.log(aAge);

const jobleft = function (birthyer) {
  const age = calculateAge(birthyer);
  return 65 - age;
};

const ajob = jobleft(2002);
console.log(ajob);

//
// Javascript Events
function dispalyText() {
  console.log("This is console Text!");
}

function alertText() {
  alert("this is alert Text!");
}

//
// JavaScript strings
const firstName = "asif";
const lastName = "akber";
console.log(firstName);
console.log(lastName);

// Example 1
const text = ' I love "Bangladesh!"';
console.log(text);

// Example 2
const text2 = "I love 'Bangladesh!'";
console.log(text2);

// Example 3
const text3 = 'I Love "Bangladesh!"';
console.log(text3);

// Example 4
const text4 = "I love \\ Bangladesh!";
console.log(text4);

//
//string methods
const x = "Bishwajit Hazra";
console.log(x.length);

// string slice
const fruits = "Apple, Banana, Mango";
console.log(fruits);

const fruit1 = fruits.slice(0, 5);
console.log(fruit1);

const fruit2 = fruits.slice(7, 13);
console.log(fruit2);

const fruit3 = fruits.slice(15, 20);
console.log(fruit3);

console.log(fruit1, fruit2, fruit3);

//
//negativ slice
const fruits = "Apple, Banana, Mango";

const fruit1 = fruits.slice(-5);
console.log(fruit1);

const fruit2 = fruits.slice(-13, -7);
console.log(fruit2);

//
//substring
const fruits = "Apple, Banana, Mango";
const fruit1 = fruits.substring(0, 5);
console.log(fruit1);

//string replace
const text = " I love Daka";
console.log(text);

const text2 = text.replace("Daka", "khulna");
console.log(text2);

//string touppercase
const text = "Hello World";
console.log(text);
console.log(text.toUpperCase());

//string tolowercase
const text = "Hello World";
console.log(text);
console.log(text.toLo());

//string trim
const text = "      Hello World";
console.log(text);
console.log(text.trim());

// string search
const text = "bishwajit sakib karim bishwajit ";
console.log(text.indexOf("karim"));
console.log(text.indexOf("sakib"));
console.log(text.indexOf("bishwajit"));

console.log(text.lastIndexOf("bishwajit"));
