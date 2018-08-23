function matchAllWords(word) {
    let matches = word.match(/\w+/g);
    console.log(matches.join("|"));
}

matchAllWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text');
