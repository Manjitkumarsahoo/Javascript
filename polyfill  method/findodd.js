Array.prototype.findodd = function () {

    let output = []
    let j = 0

    for (let i = 0; i < this.length; i++) {
        if (this[i] % 2 != 0) {
            output[j++] = this[i]
        }

    }
    return output
}

let arr = [12, 11, 42, 55, 97]
let res = arr.findodd()
console.log(arr);
console.log(res);

