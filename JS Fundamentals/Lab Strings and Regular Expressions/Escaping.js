function escaping(arr) {
    console.log("<ul>");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = htmlEscape(arr[i]);
        console.log(`  <li>${arr[i]}</li>`);
    }
    console.log("</ul>");

    function htmlEscape(text) {
        return text.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}

escaping(['<b>unescaped text</b>', 'normal text']);