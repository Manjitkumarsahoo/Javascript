function rev(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr[i].length - 1; j >= 0; j--) {
            result += arr[i][j];
        }
        if (i !== arr.length - 1) {
            result += " "; 
        }
    }
    return result;
}

let str = "javascript is easy";
let arr = str.split(" ");
console.log(rev(arr)); 
