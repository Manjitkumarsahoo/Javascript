function isPalindrome(str) {
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

function substrPal(str) {
    for (let i = 0; i < str.length - 1; i++) {
        let substr = str[i];
        for (let j = i + 1; j < str.length; j++) {
            substr += str[j];
            if (isPalindrome(substr) && substr.length !== str.length) {
                console.log(substr);
            }
        }
    }
}


substrPal("malayalam");
