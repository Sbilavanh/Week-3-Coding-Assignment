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

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

console.log(names)

let letterAverage = 0;

for (let average of names) {
    letterAverage += average.length;
}
average = letterAverage / names.length;

console.log(average);