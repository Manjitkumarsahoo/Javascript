Array.prototype.myshift = function () {
    if (this.length <= 1) return;

    let output = [this[0], this[1]]

    for (let i = 2; i < this.length; i++) {
        this[i - 2] = this[i]
    }
    
    this.length = this.length - 2
    return output;
}

let arr = [12, 11, 42, 55, 97]
let res = arr.myshift()
console.log(arr);
console.log(res);