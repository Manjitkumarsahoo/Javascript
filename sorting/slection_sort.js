function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let smallindex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[smallindex] > arr[j]) {
                smallindex = j;
            }
        }

        if (smallindex !== i) {
            [arr[i], arr[smallindex]] = [arr[smallindex], arr[i]];
        }
    }

    return arr;
}

console.log(selectionSort([8, 2, 5, 7, 1, 4]));
