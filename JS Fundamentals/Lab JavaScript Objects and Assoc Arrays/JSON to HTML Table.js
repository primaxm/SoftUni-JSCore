function JSONToHTMLTable(arr) {
    arr = JSON.parse(arr);
    let output = "<table>\n";
    let keys = Object.keys(arr[0]);
    output+=generateRow(keys, "key");

    for (let i = 0; i < arr.length; i++) {
        let values = Object.values(arr[i]);
        output+=generateRow(values, "val");
    }
    output+="</table>";
    console.log(output)

    function generateRow(array, prop) {
        let row = "  <tr>"
        for (let i = 0; i < array.length; i++) {
            if (prop === "key") {
                row+=`<th>${array[i]}</th>`;
            } else {
                if (isNaN(array[i])) {
                    row+=`<td>${htmlEscape(array[i])}</td>`;
                } else {
                    row+=`<td>${Number(array[i])}</td>`;
                }

            }
        }
        row+="</tr>\n";
        return row;
    }

    function htmlEscape(text) {
        return text.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}


JSONToHTMLTable('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},' +
    '{"Name":"Gosho","Age":18,"City":"Plovdiv"},' +
    '{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]');