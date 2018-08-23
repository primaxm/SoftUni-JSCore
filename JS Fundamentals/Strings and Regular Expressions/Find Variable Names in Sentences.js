function findVariableNamesSentences(text) {
    let result = text.match(/(?<=\s_|^_)[a-zA-Z0-9]+\b/g);
    if (result)  console.log(result.join(","));
}

findVariableNamesSentences("The _id and _age variables are both integers.");
findVariableNamesSentences("Calculate the _area of the _perfectRectangle object.");
findVariableNamesSentences("__invalidVariable _evenMoreInvalidVariable_ _validVariable");
findVariableNamesSentences("_kuku88");