function revword(str) {
    let result = ""
    let word = ""
    for (let i = 0; i <= str.length; i++) {
        if (str[i] === " " || i === str.length) {
            for (let j = word.length - 1; j >= 0; j--) {
                result += word[j]
            }
            if (i !== str.length) {
                result += " "
            }
            word = ""
        } else {
            word += str[i]
        }
    }
    return result;
}

let str = "js is easy"
console.log(revword(str));