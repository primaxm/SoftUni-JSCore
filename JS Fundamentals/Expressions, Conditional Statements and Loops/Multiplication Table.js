function multiplicationTable(num) {
    let output = "<table border=\"1\">";
    for (let i = 0; i <= num; i++) {
        output += "<tr>";
        if (i === 0) {
            output += "<th>x</th>";
            for (let j = 1; j <= num; j++) {
                output += `<th>${j}</th>`;
            }
        } else {
            output += `<th>${i}</th>`;
            for (let j = 1; j <= num; j++) {
                output += `<td>${i * j}</td>`;
            }
        }
        output += "</tr>";
    }
    output += "</table>";
    console.log(output)
}

multiplicationTable(5)