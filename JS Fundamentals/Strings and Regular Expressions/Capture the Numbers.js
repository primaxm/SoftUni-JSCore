function captureTheNumbers(arr) {
    let number = [];
    for (const arrElement of arr) {
        let tmp = arrElement.match(/\d+/g);
        if (tmp) {
            for (let i = 0; i < tmp.length; i++) {
                number.push(tmp[i])
            }
        }
    }
    console.log(number.join(" "));
}

captureTheNumbers(["The300 400 40000", "What is that?", "I think it’s the 3rd movie.", "Lets watch it at 22:45"]);