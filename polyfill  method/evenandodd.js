Array.prototype.evenandodd = function () {

    let even = []
    let odd = []
    let output = [odd, even]

    for (let i = 0; i < this.length; i++) {
        if (this[i] % 2 == 1) {
            odd[odd.length] = this[i]
        } else {
            even[even.length] = this[i]
        }

    }
    return output
}

let arr = [12, 11, 42, 55, 97]
let res = arr.evenandodd()
console.log(arr);
console.log(res);

