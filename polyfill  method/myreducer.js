Array.prototype.myreducer = function (fn, acc) {
    if (typeof fn !== 'function') {
        throw new TypeError(`${fn} is not a function`)
    }
    let i = 0;
    if (arguments.length !== 2) {
        acc = this[i++]
    }
    for (; i < this.length; i++) {
        acc = fn(acc, this[i], i, this)
    }
    return acc
}

let arr = [1, 2, 3, 4, 5, 6, 7]
res = arr.myreducer((acc, ele) => acc + ele)
console.log(res);