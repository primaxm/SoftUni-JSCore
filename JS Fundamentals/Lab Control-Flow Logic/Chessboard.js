/**
 * 
 */

function Chessboard(n) {
    let output = "<div class=\"chessboard\">\n";
    for (var i = 1; i <= n; i++) {
        output += "<div>\n";
        for (var s = 1; s <= n; s++) {
            let color;
            if(i%2 != 0) {
                if(s%2 != 0) {
                    color = "black";
                } else {
                    color = "white";
                }
            } else {
                if(s%2 != 0) {
                    color = "white";
                } else {
                    color = "black";
                }
            }
            output += "<span class=\"" + color + "\"></span>\n";   
        }
        output += "</div>\n";
    }
    output += "</div>\n";
    return output;
}
