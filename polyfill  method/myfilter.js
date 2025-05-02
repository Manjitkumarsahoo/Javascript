Array.prototype.myfilter = function (fn) {
    if (typeof fn !== "function") {
        throw new TypeError(`${fn} is not a function`)
    }

    let output = []
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i])) {
            output[output.length] = this[i]
        }
    }
    return output
}


let a = [10, 20, 30, 40, 50, 60, 70]
let res = a.myfilter((e) => {
    return e > 20
})

console.log(res)      //[ 30, 40, 50, 60, 70 ]