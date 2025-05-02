Array.prototype.poppush = function (a) {

    let output = this[this.length - 1];
    this[this.length - 1] = a

    return output
}

let a = [10, 20, 30, 40, 50]
let res = a.poppush(100)
console.log(res);
console.log(a)