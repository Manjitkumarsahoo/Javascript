function password(str) {
    if (str.length < 6) {
        return false
    }
    let Capital = false;
    let Small = false;
    let Symbol = false;
    let Number = false;

    for (let i = 0; i < str.length; i++) {
        char = str[i]
        if (char >= "A" && char <= "Z") {
            Capital = true;
        } else if (char >= "a" && char <= "z") {
            Small = true
        } else if (char >= 1 && char <= 9) {
            Number = true
        } else {
            Symbol = true
        }
    }
    return Capital && Small && Symbol && Number;
}
console.log(password("Abc@12"))