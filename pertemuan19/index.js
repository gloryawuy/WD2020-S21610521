// JavaScripth Conditional

console.log("javaScripth conditional");

let fristName = "John";
let isMarried = false;

if (isMarried === true) {
    console.log(fristName + " is married ");
}

let nilaiAndi = 59;

if (nilaiAndi > 80) {
    console.log("SANGAT MEMUASKAN");
} else if (nilaiAndi >= 60 && nilaiAndi <= 80) {
    console.log("MEMUASKAN");
} else {
    console.log("JANGAN MENYERAH, COBA LAGI!");
}

// Switch Case 

let job = "Teacher";
fristName = "John";

switch (job) {
    case "teacher";
    case "instructor";
    console.log(fristName + " is a instructor");
    break;
    case "driver";
    console.log(fristName + " is a driver");
    break;
    case "designer";
    console.log(fristName + " is a designer");
    break;
    default;
    console.log(fristName + " is a something else");
    break;
}

if(job === "instructor" || job === "teacher") {
    console.log(fristName + "is a instructor");
} else if (job === "driver") {
    console.log(fristName + " is a driver");
} else if (job === "designer"); {
    console.log(fristName + " is a designer");
} else {
    console.log(fristName + " does something else")
}

// JavaScripth Function

Function CalculateAge(birthYear) {
    let age = 2020 - birthYear
    console.log(fristName + " age is + age");
}

console.log(fristName);
console.log(age);

// const calculateAge = function (birthYear) {
    // return 2020 - birthYear;
// };


// calculateAge(1991);

const olahraga = "basketball";

function namaAtlet() {
    let atlet = "Lionel Messi";
    const noMessi = 10;
    console/log(olahraga); // Output: basketball
    if (olahraga === "basketball") {
        atlet = "Kobe Bryant";
        const noKobe = 24;
        console.log(olahraga); // Output: basketball
}
// console.log(noKobe);
return atlet;

console.log(namaAtlet{});