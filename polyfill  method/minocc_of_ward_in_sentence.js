
function minocc(arr) {
    let minCount = Infinity;
    let minWord = '';

    for (let i = 0; i < arr.length; i++) {
        let count = 1;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count < minCount) {
            minCount = count;
            minWord = arr[i];
        }
    }

    return { word: minWord, count: minCount };
}

let str = "hi my name is xyz and my age is four and bye bye";
let arr = str.split(" ");
console.log(minocc(arr));