function extractText(word) {
    let matches = word.match(/(?<=\().+?(?=\))/g);

    if (matches) console.log(matches.join(", "));

}

extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');
//extractText();