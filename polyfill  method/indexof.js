Array.prototype.myindexOf = function (a) {

    for (let i = 0; i < this.length; i++) {
        if (this[i] == a) {
            return i
        }
    }
    return -1
}

let a = [10, 20, 30, 40, 50, 60, 70]
let res = a.myindexOf(40)
console.log(res)               //3