function process(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        let splited = arr[i].split(" ");
        if (splited[0] === "append") {
            result += splited[1];
        } else if (splited[0] === "removeStart") {
            result = result.slice(Number(splited[1]));
        } else if (splited[0] === "removeEnd") {
            result = result.slice(0, -Number(splited[1]));
        } else if (splited[0] === "print") {
            console.log(result);
            break;
        }
    }
}

process(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']);

process(['append 123',
    'append 45',
    'removeStart 2',
    'removeEnd 1',
    'print']);