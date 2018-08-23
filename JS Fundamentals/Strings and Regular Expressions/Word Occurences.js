function wordOccurences(text, word) {
    let count = 0;
    text = text.toLowerCase();
    word = word.toLowerCase();
    let regex = new RegExp(word+"\\b", "g");
    let ex = regex.exec(text);
    if(ex) count++;
    while(ex) {
        ex = regex.exec(text);
        if(ex) count++;
    }
    console.log(count)
}

wordOccurences("The waterfall was so high, that the child couldn’t see its peak.", "the");
wordOccurences("How do you plan on achieving that? How? How can you even think of that?", "how")