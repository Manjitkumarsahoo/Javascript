Array.prototype.myindex = function (a, b) {
    for (let i = b; i >= 0; i--) {
        if (this[i] == a) {
            return i
        }
    }
    return -1
}

let a = [10, 20, 30, 40, 50, 60, 70]
let res = a.myindex(30,4)
console.log(res)           //2