function x(num) {
    if (num > 10) return
    console.log(num);
    x(num + 1)

}
x(1)