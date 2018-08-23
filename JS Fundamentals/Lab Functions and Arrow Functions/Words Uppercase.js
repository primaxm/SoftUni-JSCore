function wordsUppercase(string) {
    let arr = string.split(/\W+/g).filter(a => a !== '');
    console.log(arr.join(", ").toUpperCase());
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');