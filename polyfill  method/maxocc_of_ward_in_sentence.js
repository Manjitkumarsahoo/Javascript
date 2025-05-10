function maxocc(arr) {
    let maxCount = 0;
    let maxWord = '';

    for (let i = 0; i < arr.length; i++) {
        let count = 1;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count > maxCount) {
            maxCount = count;
            maxWord = arr[i];
        }
    }

    return { word: maxWord, count: maxCount };
}

let str = "hi my name is xyz and my age is four and bye bye";
let arr = str.split(" ");
console.log(maxocc(arr));
