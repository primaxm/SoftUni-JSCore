function saveToHTML(input) {
    let arr = JSON.parse(input);
    let output = `<table>
  <tr><th>name</th><th>score</th></tr>\n`;
    for (let i = 0; i < arr.length; i++) {
        output+=`  <tr><td>${htmlEscape(arr[i].name)}</td><td>${Number(arr[i].score)}</td></tr>\n`;
    }

output+="</table>";
    console.log(output);

    function htmlEscape(text) {
        return text.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}

saveToHTML('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]')