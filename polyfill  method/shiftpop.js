Array.prototype.shiftpop = function () {

    if (this.length <= 1) return
    let output = [this[0], this[this.length - 1]]

    for (let i = 0; i < this.length; i++) {
        this[i - 1] = this[i]
    }

    this.length = this.length - 2
    return output
}

let a = [10, 20, 30, 40, 50]
let res = a.shiftpop()
console.log(res);