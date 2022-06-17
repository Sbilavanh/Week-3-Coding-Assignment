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