Array.prototype.change = function () {

    let temp = this[0]
    this[0] = this[this.length - 1]
    this[this.length - 1] = temp
}

let a = [10, 20, 30, 40, 50, 60, 70]
a.change()
console.log(a)      //[70, 20, 30, 40,50, 60, 10]
    