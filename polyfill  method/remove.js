Array.prototype.remove = function (a, b) {
    let output = []
    for (i = a; i < a + b; i++) {
        output[output.length] = this[i]
    }
    for (let i = a; i < this.length - b; i++) {
        this[i] = this[i + b]
    }

    this.length = this.length - b
    return output
}

let a = [10, 20, 30, 40, 50, 60, 70]

let res = a.remove(2, 3)   //(start index , no of element)
console.log(res)    //[ 30, 40, 50 ]