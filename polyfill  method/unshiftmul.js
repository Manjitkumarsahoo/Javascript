Array.prototype.myunshiftmul = function (...args) {
    const originalLength = this.length;
    const shiftby = args.length;

    // Move elements to the right to make space
    for (let i = originalLength - 1; i >= 0; i--) {
        this[i + shiftby] = this[i];
    }

    // Insert new elements at beginning
    for (let i = 0; i < shiftby; i++) {
        this[i] = args[i];
    }

    return this.length;
};

let arr = [12, 11, 42, 55, 97];
let res = arr.myunshiftmul(100, 200);
console.log(arr); // [100, 200, 12, 11, 42, 55, 97]
console.log(res); // 7
