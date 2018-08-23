function palindrome(word) {
    let isPol = true;
    for (let i = 0; i < word.length/2; i++) {
        if(word[i] !== word[word.length-1-i]) {
            isPol = false;
            break;
        }
    }
    console.log(isPol);
}

palindrome("haha");
palindrome("racecar");