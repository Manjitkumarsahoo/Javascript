Array.prototype.mypop = function () {
    if (this.length == 0) return;

    let output = this[this.length - 1]
    this.length = this.length - 1
    return output;
}

let arr = [10,20,30,40]
let res = arr.mypop()
console.log(arr);
console.log(res);


