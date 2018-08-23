function tripLength(arr) {
    let x1 = arr[0]
    let y1 = arr[1];
    let x2 = arr[2]
    let y2 = arr[3];
    let x3 = arr[4];
    let y3 = arr[5];

    let distanceAB = calculateDistance(x1, y1, x2, y2);
    let distanceBC = calculateDistance(x2, y2, x3, y3);
    let distanceAC = calculateDistance(x1, y1, x3, y3);

    let d123 = distanceAB + distanceBC;
    let d132 = distanceAC + distanceBC;
    let d213 = distanceAB + distanceAC;
    let d231 = distanceBC + distanceAC;
    let d312 = distanceAC + distanceAB;
    let d321 = distanceBC + distanceAB;

    let min = Math.min(d123, d132, d213, d231, d312, d321);
    if(d123 === min) {
        console.log(`1->2->3: ${min}`);
    } else if (d132 == min) {
        console.log(`1->3->2: ${min}`);
    } else if (d213 === min) {
        console.log(`2->1->3: ${min}`);
    } else if (d231 == min) {
        console.log(`2->3->1: ${min}`);
    } else if (d312 == min) {
        console.log(`3->1->2: ${min}`);
    } else if (d321 == min) {
        console.log(`3->2->1: ${min}`);
    }

    function calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x1-x2, 2)+Math.pow(y1-y2,2));
    }
}

tripLength([0, 0, 2, 0, 4, 0]);
tripLength([5, 1, 1, 1, 5, 4]);
tripLength([-1, -2, 3.5, 0, 0, 2]);