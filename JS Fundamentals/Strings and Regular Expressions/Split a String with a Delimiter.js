function splitStringWithDelimiter(text, delimiter) {
    let regex = new RegExp(delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    console.log(text.split(regex).join('\n'));
}

splitStringWithDelimiter("One-Two-Three-Four-Five", "-");
splitStringWithDelimiter("http://platform.softuni.bg\n", ".")