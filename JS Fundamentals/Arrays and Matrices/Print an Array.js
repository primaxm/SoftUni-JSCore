function printAnArray(arr) {
    let delimeter = arr[arr.length-1];
    arr.pop(arr.length-1);
    console.log(arr.join(`${delimeter}`));;
}

printAnArray(["One", "Two", "Three", "Four", "Five", "-"]);