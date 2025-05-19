function x(num) {
    if (num > 10) return

    if (num % 2 == 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
    x(num + 1)
}
x(1)