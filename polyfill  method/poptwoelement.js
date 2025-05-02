Array.prototype.poptwoelement = function () {
    if (this.length <= 1) return;

    let last = this[this.length - 1];
    let slast = this[this.length - 2];

    let output = [slast, last];

    this.length = this.length - 2;

    return output;
}

let a = [10, 20, 30, 40, 50];
let res = a.poptwoelement();
console.log(res); // [40, 50]
console.log(a);   // [10, 20, 30]
