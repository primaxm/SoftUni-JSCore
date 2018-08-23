function dnaHelix(num) {
    num - Number(num);
    let arr = ["A", "T", "C", "G", "T", "T", "A", "G", "G", "G"];
    let count = 1;
    for (let i = 0; i < num; i++) {

        if (count === 1) {
            console.log(`**${arr[0]+arr[1]}**`);
            count++;
        } else if (count === 2) {
            console.log(`*${arr[2]}--${arr[3]}*`);
            count++;
        } else if (count === 3) {
            console.log(`${arr[4]}----${arr[5]}`);
            count++;
        } else {
            console.log(`*${arr[6]}--${arr[7]}*`);
            count=1;
            arr.unshift(arr[8], arr[9]);
            arr.slice(-2, 2);
        }
    }

}

//dnaHelix(4);
dnaHelix(10);