function anagram(str1, str2) {
    if (str1.length !== str2.length) {
        console.log("Both String are not Anagram");
        return
    }

    let count1 = {};
    let count2 = {};

    for (let i = 0; i < str1.length; i++) {
        let e = str1[i];
        if (count1[e]) {
            count1[e] = count1[e] + 1;
        } else {
            count1[e] = 1;
        }
    }

    for (let i = 0; i < str2.length; i++) {
        let e = str2[i];
        if (count2[e]) {
            count2[e] = count2[e] + 1;
        } else {
            count2[e] = 1;
        }
    }

    for (let i in count1) {
        if (count1[i] !== count2[i]) {
            console.log("Both string are not anagram")
            return;
        }
    }

    console.log("Both string are anagram")


}

let str1 = "race"
let str2 = "care"
anagram(str1, str2);