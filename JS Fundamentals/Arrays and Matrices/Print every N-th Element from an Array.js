function printEveryNthElementFromAnArray (arr) {
    let step = Number(arr[arr.length-1]);
    arr.pop(arr.length-1);
    for (let i = 0; i < arr.length; i+=step) {
        console.log(arr[i]);
    }
}

printEveryNthElementFromAnArray(["5", "20", "31", "4", "20", "2"]);
//printEveryNthElementFromAnArray();