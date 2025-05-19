function x(num) {
    if (num == 0) return 0
    return num + x(num - 1)
}
console.log(x(5));