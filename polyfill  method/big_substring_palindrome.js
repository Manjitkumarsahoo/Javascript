function ispalindrome(str) {
    let i = 0;
    let j = str.length - 1;

    while (i < j) {
        if (str[i] !== str[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

function bigsubstrpal(str) {
    let bigsub = "";
    for (let i = 0; i < str.length - 1; i++) {
        let substr = "";
        substr += str[i];
        for (let j = i + 1; j < str.length; j++) {
            substr += str[j];
            if (ispalindrome(substr) && substr.length !== str.length) {
                if (bigsub.length < substr.length) {
                    bigsub = substr;
                }
            }
        }
    }
    return bigsub;
}

let val = bigsubstrpal("malayalam");
console.log(val); 
