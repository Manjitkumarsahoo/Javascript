Array.prototype.mymap = function (fn) {
    if (typeof fn !== "function") {
        throw new TypeError(`${fn} is not a function`)
    }

    let output = []
    for (let i = 0; i < this.length; i++) {
        output[output.length] = fn(this[i], i, this)
    }
    return output;
}

let a = [10, 20, 30, 40, 50, 60, 70]
let res = a.mymap((e) => {
    return e + 100;
})
console.log(res)   //[110, 120, 130,140, 150, 160,170]

