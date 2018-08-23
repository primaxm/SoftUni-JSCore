function assignProperties(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i+=2) {
        obj[arr[i]] = arr[i+1];
    }

    console.log(obj);
}

assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male'])