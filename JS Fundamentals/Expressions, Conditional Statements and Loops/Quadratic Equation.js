function quadraticEquation(a, b, c) {
    let d = Math.pow(b, 2) - 4*a*c;
    if (d > 0) {
        let x1 = (-b - Math.sqrt(d, 2)) / (2*a);
        let x2 = (-b + Math.sqrt(d, 2)) / (2*a);
        console.log(+x1.toFixed(5));
        console.log(+x2.toFixed(5));

    } else if (d < 0) {
console.log("No");
    } else {
        console.log(-b / (2*a));
    }
}

quadraticEquation(6, 11, -35)