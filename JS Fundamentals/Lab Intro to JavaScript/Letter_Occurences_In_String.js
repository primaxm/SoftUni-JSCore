/**
 * 
 */

function occur(word, string) {
    let count = 0;

    for (let char of word) {
        if (char === string) {
            count++;
        }
    }

    console.log(count);
}