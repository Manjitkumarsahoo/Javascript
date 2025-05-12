String.prototype.mytrim = function() {
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

    
    for (let i = start; i <= end; i++) {
        res += this[i];
    }

    return res;
};

let str = "   js is easy   ";
console.log(str.mytrim()); 
