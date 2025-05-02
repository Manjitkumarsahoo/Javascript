Array.prototype.poptwo = function () {
    if (this.length <= 1) return
    this.length = this.length - 2
}

let a=[10,20,30,40,50]
let res = a.poptwo()
console.log(res);
console.log(a);

