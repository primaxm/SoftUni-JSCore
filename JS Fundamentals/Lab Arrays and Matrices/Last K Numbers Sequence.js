function lastKNumbersSequence(arrLength, number) {
    let result = [1];
        for (let i = 1; i < arrLength; i++) {
            let start = result.length-number;
            if (start < 0) {start = 0}
            let sum = result.slice(start).reduce((acc, bcc) => acc + bcc);
            result.push(sum);
        }

    console.log(result.join(" "));
}

lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);
lastKNumbersSequence(4, 2);