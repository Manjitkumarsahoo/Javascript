Array.prototype.unshiftpush = function (a,b) {

    for (let i = this.length - 1; i > 0; i--) {
        this[i + 1] = this[i]
    }

    this[0] = a;
    this[this.length] = b;
    return this.length
}

let a = [10, 20, 30, 40, 50]
let res = a.unshiftpush(100,200)
console.log(res);
console.log(a);
