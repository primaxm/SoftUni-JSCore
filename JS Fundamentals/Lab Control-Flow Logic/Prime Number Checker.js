function PrimeNumberChecker(n) {
    let result = "true";
    if(n>1) {
        for (var i = 2; i < Math.sqrt(n); i++) {
            if (n%i === 0) {
                result = "false";
                break;
            }
        }
    } else {
         result = "false";   
    }
    console.log(result);
}