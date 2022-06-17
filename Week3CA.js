//question 1
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

console.log(ages);

let age1;
let age2;

ages.push(69)

for (i = 0; i < ages.length; i++) {
    if (i == 0) {
        age1 = ages[i];
    }
    if (i == ages.length - 1) {
        age2 = ages[i];
    }
}

console.log(age2 - age1);

let sum = 0;

for (let average of ages) {
    sum += average;
}

average = sum / ages.length;

console.log(average);

// let sum;
// function average(ages) {
//     for (i = 0; i < ages.length; i++) {
//         sum += ages[i];
//     }
//     return i / ages.length;
// }
// console.log(ages);

//question 2
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

console.log(names)

let letterAverage = 0;

for (let average of names) {
    letterAverage += average.length;
}
average = letterAverage / names.length;

console.log(average);

let booty = "";
for (i = 0; i < names.length; i++) {

    booty += names[i];
    booty += " ";
}
console.log(booty);

//question 3
console.log(names[names.length - 1]);

//question 4
console.log(names[0]);

//question 5
let nameArray = ["kelly", "Sam", "Kate"];
let nameLengths = [];

for (i = 0; i < nameArray.length; i++) {
    nameLengths[i] = nameArray[i].length;
}
console.log(nameLengths);

//question 6
let letterSum = 0;
for (i = 0; i < nameLengths.length; i++) {
    letterSum += nameLengths[i];
}
console.log(letterSum);

//question 7
function cody(word, n) {
    let cody = '';
    for (i = 0; i < n; i++) {
        cody += word;
    }
    return cody;
}
console.log(cody("pizzaTime", 3));

//question 8
function fullName(firstName, lastName) {
    console.log(firstName + " " + lastName);
}
fullName("Souphalak", "Bilavanh");

//question 9
function num(numArray) {
    let sum = 0;
    for (i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    }
    //console.log(sum);
    if (sum >= 100) {
        return true;
    } else
        return false;
}
console.log(num(ages));

//question 10
let arrayOne = [2, 4, 6, 8];
function averageArray(arrayOne) {
    let sum1 = 0
    for (i = 0; i < arrayOne.length; i++) {
        sum1 += arrayOne[i]
    }
    let average = sum1 / arrayOne.length;
    return average
}
console.log(averageArray(arrayOne));

//question 11
let num1 = [2, 8, 23, 69];
let num2 = [5, 30, 4, 3];

function averageOfTwo(num1, num2) {
    let sum1 = 0;
    let sum2 = 0;
    for (i = 0; i < num1.length; i++) {
        sum1 += num1[i];
    }
    for (i = 0; i < num2.length; i++) {
        sum2 += num2[i];
    }
    let averageOfTwo = sum1 / num1.length;
    let sum3 = sum2 / num2.length;

    // console.log(averageOfTwo);
    // console.log(sum3);

    if (averageOfTwo > sum3) {
        return true;
    }
    else
        return false;
}
console.log(averageOfTwo(num1, num2));

//question 12
function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside === true && moneyInPocket > 10.50) {
        return true;
    } else return false;
}
console.log(willBuyDrink(true, 11));

//question 13
function isYourNameSouphalak(name) {
    if (name.toLowerCase() === "Souphalak")
        return true;
    else
        return false;
}
console.log(isYourNameSouphalak("Nyles"));

//I chose this example to know if I am using this