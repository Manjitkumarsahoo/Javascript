String.prototype.mytrim = function () {
    let res = "";
    let start = 0;
    let end = this.length - 1;

    for (let i = 0; i < this.length; i++) {
        if (this[i] !== " ") {
            start = i;
            break;
        }
    }

    for (let i = this.length - 1; i >= 0; i--) {
        if (this[i] !== " ") {
            end = i;
            break;
        }
    }

    // Handle all spaces case
    if (start > end) return "";

    for (let i = start; i <= end; i++) {
        res += this[i];
    }

    return res;
};
console.log("   js is easy   ".mytrim()); // "js is easy"
console.log("       ".mytrim());          // ""
console.log("noTrim".mytrim());          // "noTrim"
