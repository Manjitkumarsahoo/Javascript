function ispalindrome(str) {
    let i = 0;
    let j = str.length - 1;

    while (i < j) {
        if (str[i] != str[j]) {
            return false
        }
        i++;
        j--;
    }
    return true
}

function smallsubstrpal(str) {
    let smallsub = ""
    for (let i = 0; i < str.length - 1; i++) {
        let substr = str[i];
        for (let j = i + 1; j < str.length; j++) {
            substr += str[j];
            if (ispalindrome(substr) && substr.length !== str.length) {
                if (smallsub == "" || smallsub.length > substr.length) {
                    smallsub = substr
                }
            }
        }
    }
    return smallsub
}
console.log(smallsubstrpal("malayalam"))