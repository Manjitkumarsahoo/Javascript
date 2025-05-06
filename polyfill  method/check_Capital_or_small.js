function check(str) {
    for (let i = 0; i < str.length; i++) {
        char = str[i]
        if (char >= "A" && char <= "Z") {
            console.log(`${char} is Capital`)
        } else {
            console.log(`${char} is small`)
        }
    }
}

check("Abc");