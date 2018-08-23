function validityChecker([x1, y1, x2, y2]) {
    console.log(isValid(x1, y1, 0, 0));
    console.log(isValid(x2, y2, 0, 0));
    console.log(isValid(x1, y1, x2, y2));

    function isValid(xp1,yp1, xp2, yp2) {
        distance = Math.sqrt(Math.pow(xp1-xp2, 2) + Math.pow(yp1-yp2, 2));
        if (Number.isInteger(distance)) {
            return `{${xp1}, ${yp1}} to {${xp2}, ${yp2}} is valid`;
        } else {
            return `{${xp1}, ${yp1}} to {${xp2}, ${yp2}} is invalid`;;
        }
    }
}

validityChecker([3, 0, 0, 4]);
validityChecker([2, 1, 1, 1]);
