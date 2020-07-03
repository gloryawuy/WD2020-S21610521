// 1. Variabel dan Tipe Data

console.log("Hello World dari Eksternal JS");

let firstName = 'John';
const $number = 3;
let years;
var age = 23;
let isMarried = false;

firstName = 'Jane'

console.log(firstName);
console.log($number);
console.log(isMarried);
console.log(years);

// 2. Operator JavaScripth

 Operator Aritmatika
let num1 = 10;
let num2 = 2;

console.log(num1 + num2)
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);
num1++;
console.log(num1);
num1--;
console.log(num1);

// Assigment Operator

let num3 = 10;
let num4;

num4 = num3;
console.log(num4);

num3 **= 2;
console.log(num3);

// String Operator

let firstName = 'John';
let lastName = 'Doe';

console.log(firstName + " " + lastName);
console.log(firstName + age);

 Operator Perbandingan
let num1 = 10;

console.log(num1 == 10);
console.log(num1 == "10");

console.log(num1 === 10);
console.log(num1 === "10");

console.log(num1 >= 10);
console.log(num1 <= 10);

let num2 = num1 === 10 ? 'Ten' : 'Another Number';
console.log(num2);

// Operator Logika
let hasCertificate = false;
let hasTranscripth = false;

console.log(hasCertificate || hasTranscripth)
console.log(!hasTranscripth)

// Operator Precedence

let result = (10 + 2) * 3; 

console.log(result);