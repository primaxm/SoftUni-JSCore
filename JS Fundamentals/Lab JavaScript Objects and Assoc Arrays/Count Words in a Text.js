function countWordsInaText(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let splited = arr[i].split(/[,\s\.'-]/).map(a => a.trim()).filter(s => s !== '');
        for (const word of splited) {
            if (obj[word]) {
                obj[word]++;
            } else {
                obj[word] = 1;
            }
        }
    }
    console.log(JSON.stringify(obj));
}

//countWordsInaText(["Far","too", "slow",",", "you\'re","far","too","slow."]);
countWordsInaText(["Far too slow, you're far too slow."]);