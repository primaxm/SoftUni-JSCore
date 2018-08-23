function modifyAverage(num) {
    num = String(num);
    let average = 0;
    while (average <= 5) {
        let sum = 0;
        for (let i = 0; i < num.length; i++) {
            sum += Number(num[i]);
        }
        average = sum/num.length;
        if (average <= 5) {
            num += '9';
            //num = Number(num);
        }
    }
    console.log(num);
}

modifyAverage(101);
modifyAverage(5835);