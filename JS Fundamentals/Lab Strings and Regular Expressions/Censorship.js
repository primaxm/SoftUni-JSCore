function censorship(word, arr) {
    for (let i = 0; i < arr.length; i++) {
        while (word.indexOf(arr[i]) > -1) {
            word = word.replace(arr[i], "-".repeat(arr[i].length))
        }
    }
    console.log(word);
}

censorship('roses are red, violets are blue', [', violets are', 'red']);