function firstandLastKNumbers(arr) {
    let number = arr[0];
    let first = [];
    let second = [];

    first = arr.slice(1,number+1);
    second = arr.slice(arr.length-number);

    console.log(first.join(" "));
    console.log(second.join(" "));
}

firstandLastKNumbers([2, 7, 8, 9]);
firstandLastKNumbers([3, 6, 7, 8, 9]);