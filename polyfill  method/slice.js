Array.prototype.myslice = function (a, b = this.length) {
    let output = []

    for (let i = a; i < b; i++) {
        output[output.length] = this[i]
    }
    return output
}

let a = [10, 20, 30, 40, 50]
let res = a.myslice(2, 4)
console.log(res)