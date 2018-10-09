function wikiParser(selector) {
    let text = $(selector).text();
    let treeEqualsRegEx = /===(.*?)===/;
    let twoEqualsRegEx = /==(.*?)==/;
    let oneEqualsRegEx = /=(.*?)=/;
    let threeSingleQuotesRegEx = /'''(.*?)'''/;
    let twoSingleQuotesRegEx = /''(.*?)''/;
    let twoBracketsRegEx = /\[\[([^\[\]]*?)\]\]/;

    text = replace(text, treeEqualsRegEx, "h3");
    text = replace(text, twoEqualsRegEx, "h2");
    text = replace(text, oneEqualsRegEx, "h1");
    text = replace(text, threeSingleQuotesRegEx, "b");
    text = replace(text, twoSingleQuotesRegEx, "i");
    text = brackesReplace(text, twoBracketsRegEx);


    function replace (text, regEx, tag) {
        let matches = text.match(regEx);

        while(matches) {

            text = text.replace(matches[0], `<${tag}>${matches[1]}</${tag}>`);
            matches = text.match(regEx);
        }
        return text;
    }

    function brackesReplace (text, regEx) {
        let match = text.match(regEx);

        while(match) {
            if (match[1].indexOf("|") > -1) {
                let splited = match[1].split('|');
                text = text.replace(match[0], `<a href="/wiki/${splited[0]}">${splited[1]}</a>`);
            } else {
                text = text.replace(match[0], `<a href="/wiki/${match[1]}">${match[1]}</a>`);
            }
            match = text.match(regEx);
        }
        return text;
    }

    $(selector).html(text)
}