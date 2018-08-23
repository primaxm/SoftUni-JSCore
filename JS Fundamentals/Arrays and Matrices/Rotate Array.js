function rotateArray(arr) {
    let number = Number(arr[arr.length-1]);
    arr.pop(arr.length-1);
    for (let i = 0; i < number; i++) {
        arr.unshift(arr[arr.length-1]);
        arr.pop(arr.length-1);
    }
    console.log(arr.join(" "));
}

rotateArray([1, 2, 3, 4, 2]);
rotateArray(["Banana", "Orange", "Coconut", "Apple", "15"]);