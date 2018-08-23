function rounding([number, round]) {
    length = number.toString().split('.')[1].length;
    round = Math.min(15, round);
    round = Math.min(length , round);

    return number.toFixed(round);
}

console.log(rounding([3.1415926535897932384626433832795, 2]));
console.log(rounding([10.5, 3]));