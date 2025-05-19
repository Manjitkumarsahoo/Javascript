function x(num) {
    if (num == 0) return 0

    if (num % 2 == 0) {
        return num + x(num - 1)
    } else {
        return x(num - 1)
    }
}
console.log(x(10))
