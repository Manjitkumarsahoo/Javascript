function x(num) {
    if (num > 4) return

    console.log(++num)
    x(num++ + 1)
    console.log(num);
    
}
x(0)