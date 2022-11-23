const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

// loop through array numbers
for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    console.log(number);
}

// loop through array in reversed order
for (let index = numbers.length - 1; index >= 0; index--) {
    const number = numbers[index];
    console.log(number);
    if (number === 1) {
        console.log("BOOM 🎉");
    }
}

// or you could simply use numbers.reverse();
// before looping in regular order.

const mix = [2, 4, "Hello", 3, "Hi"];
let antalTal = 0;
let antalStrings = 0;

for (let i = 0; i < mix.length; i++) {
    console.log(mix[i]);

    if (Number.isInteger(mix[i])) {
        console.log("Er et tal");
        antalTal++;
    } else {
        console.log("Er en string");
        antalStrings++;
    }
}

console.log("tal:", antalTal);
console.log("strings:", antalStrings);

if (antalTal > antalStrings) {
    console.log("Most integers");
} else if (antalStrings > antalTal) {
    console.log("Most strings");
}

// Exercise 1
// Write an array with 3 strings
// Using foreach - print each string
const strings = ["Hello", "Hi", "Daws"];

strings.forEach(function (item) {
    console.log(item);
});

strings.forEach(item => {
    console.log(item);
});

// Exercise 2
// Write an array with 5 numbers
// Using foreach - write a program that sums the numbers
const numbers2 = [44, 88, 99, 3, 44];
let sum = 0;
numbers2.forEach(number => {
    sum = sum + number;
});
console.log(sum);

// Exercise 3
// Write an array with 5 numbers
// Using foreach - write a program that calculates the average of the numbers
const average = sum / numbers.length;
console.log(average);

// Write an array with 5 numbers - some larger than zero some smaller
// Using the filter function of the array
// create a new array with all values larger than 0
// Print and verify the result
const numbers3 = [1, 0, 3, 6, 11, -7, -2];
const results = numbers3.filter(number => number > 0);
console.log(results);

function stopWatch() {
    let count = 0;

    setInterval(() => {
        count++;
        console.log(count);
    }, 1000);
}

// stopWatch();

function total(number) {
    console.log(number);
    number = number + "";
    console.log(number);
    const array = number.split("");
    console.log(array);

    let sum = 0;
    array.forEach(stringNumber => {
        sum = sum + parseInt(stringNumber);
    });
    console.log(sum);
}

total(569);
