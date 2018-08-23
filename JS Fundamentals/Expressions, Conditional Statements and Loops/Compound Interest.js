function compoundInterest(arr) {
    let money = arr[0];
    let rate = arr[1];
    let frequency = arr[2];
    let period = arr[3];
    let fRate = 12/frequency;

    let totalSum = money * Math.pow(1 + (rate/fRate)/100, fRate*period)

    console.log(totalSum.toFixed(2));
}