Array.prototype.myunshift = function (ele) {

    for (let i = this.length - 1; i >= 0; i--) {
        this[i + 1] = this[i]
    }
    this[0] = ele
    return this.length
}

let arr = [12, 11, 42, 55, 97]
let res = arr.myunshift(100)
console.log(arr);
console.log(res);