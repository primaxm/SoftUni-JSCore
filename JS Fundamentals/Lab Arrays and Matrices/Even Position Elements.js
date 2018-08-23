function evenPositionElements (arr) {
    let even = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) even.push(arr[i]);
    }
    console.log(even.join(" "));
}

evenPositionElements(['20', '30', '40']);
evenPositionElements(['5', '10']);