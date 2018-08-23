function matchMultiplication(input) {
    let regex = /(-?\d+)\s*\*\s*(-?\d+.?\d*)/g;
    let ex;
    while(ex = regex.exec(input)) {
        let multi = Number(ex[1])*Number(ex[2]);
        input = input.replace(ex[0], multi);
    }
    console.log(input)
}

matchMultiplication("My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).");