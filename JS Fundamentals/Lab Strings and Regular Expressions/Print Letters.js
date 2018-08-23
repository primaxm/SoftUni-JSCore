function printLetters(letter) {
    for (let i = 0; i < letter.length; i++) {
        console.log(`str[${i}] -> ${letter[i]}`);
    }
}

printLetters('Hello, World!');
printLetters('SoftUni');