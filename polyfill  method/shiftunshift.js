Array.prototype.shiftunshift = function (a) {

    let output = this[0]
    this[0] = a;
    return output
}

let a = [10, 20, 30, 40, 50]
let res = a.shiftunshift(100)
console.log(res);
console.log(a)