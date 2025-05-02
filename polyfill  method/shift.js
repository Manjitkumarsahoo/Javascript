Array.prototype.myshift = function () {
    if (this.length == 0) return;
    let output = this[0]
    for (let i = 1; i < this.length; i++) {
        this[i - 1] = this[i]
    }
    this.length = this.length - 1
    return output;
}

let arr = [12, 11, 42, 55, 97]
let res = arr.myshift()
console.log(arr);
console.log(res);