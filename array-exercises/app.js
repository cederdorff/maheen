const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
