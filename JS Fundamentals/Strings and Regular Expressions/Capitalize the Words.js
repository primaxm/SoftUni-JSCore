function capitalizeTheWords (text) {
    text = text.replace(/\b[a-z]/g, function(match) {return match.toUpperCase()});
    text = text.replace(/(?<=\b[A-Z])[A-Za-z]+/g, function(match) {return match.toLowerCase()});
    console.log(text);
}

capitalizeTheWords("Capitalize these words");
capitalizeTheWords("Was that Easy? tRY thIs onE for SiZe!");