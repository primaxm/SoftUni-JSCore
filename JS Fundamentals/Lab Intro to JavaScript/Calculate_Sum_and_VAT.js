/**
 * 
 */

function kuku (a) {
    let sum = 0;
    for (let num of a) {
        sum += num;    
    }

    console.log("sum: " + sum);
    console.log("VAT: " + 0.2 * sum);
    console.log("Sum: " + sum * 1.2);
}