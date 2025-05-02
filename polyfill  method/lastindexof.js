Array.prototype.mylastIndexOf = function (a) {
    for (let i = this.length - 1; i > 0; i--) {
        if (this[i] == a) {
            return i
        }
    }
    return -1
}

let a = [10, 20, 30, 40, 50, 60, 70]
let res = a.mylastIndexOf(60)
console.log(res)