function wikiParser(selector) {
    let text = $(selector).text();
    let treeEqualsRegEx = /===(.*?)===/g;
    let matches = text.match(treeEqualsRegEx);

    console.log(matches);
    //let twoSingleQuotesRegEx = /(?<=(===)).+?(?=(===))/g;
    //console.log(text.match(twoSingleQuotesRegEx));

    text = text.replace(twoSingleQuotesRegEx, '<h3>$&</h3>')
    //text.replace(twoSingleQuotesRegEx, 'kuku')
    console.log(text);

    function replace (regEx, text) {

    }

}
/*

''text'' becomes <i>text</i> (two single quotes)
'''text''' becomes <b>text</b> (three single quotes)
 =text=, ==text== and ===text=== become <h1>text</h1>, <h2>text</h2> and <h3>text</h3>
 [[link]] becomes an anchor to /wiki/link with the same text, <a href="/wiki/link">link</a>
 [[link|Text]] becomes an anchor to /wiki/link with the argument after the pipe as text, <a href="/wiki/link">Text</a>*/
