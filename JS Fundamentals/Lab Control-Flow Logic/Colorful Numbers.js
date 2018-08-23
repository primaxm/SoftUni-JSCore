/**
 * 
 */

function ColorfulNumbers(n) {
    let output = "<ul>";
    for (var i = 1; i <= n; i++) {
        let color = "green";
        if(i % 2 === 0) color = "blue";
        output += "<li><span style='color:" + color + "'>" + i + "</span></li>";
    }
    output += "<ul>";
    return output;
}