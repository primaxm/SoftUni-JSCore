function ancientVSMemory(arr) {
    let string = arr.join(' ');
    let dataString = [];
    let numberOfIntegers = string.match(/\b(?<=32656 19759 32763 0 )[0-9]+\b/g);
    for (let i = 0; i < numberOfIntegers.length; i++) {
        let regex = new RegExp("\\b(?<=32656 19759 32763 0 "+numberOfIntegers[i]+" 0 )([0-9]+\\s){"+numberOfIntegers[i]+"}\\b");
        dataString[i] = string.match(regex);
        string = string.substring(dataString[i].index)
        let workArr = dataString[i][0].split(" ").filter(a => a !== "");
        workArr = workArr.map(a => String.fromCharCode(a));
        console.log(workArr.join(""));
    }

}

ancientVSMemory(["32656 19759 32763 0 5 0 80 101 115 104 111 0 0 0 0 0 0 0 0 0 0 0",
    "0 32656 19759 32763 0 7 0 83 111 102 116 117 110 105 0 0 0 0 0 0 0 0"]);

ancientVSMemory(["0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0",
    "5 0 71 111 115 104 111 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 4 0",
    "75 105 114 111 0 0 0 0 0 0 0 0 0 0 32656 19759 32763 0 8 0 86 101",
    "114 111 110 105 107 97 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"])

ancientVSMemory(["32656 19759 32763 0 5 0 80 101 115 104 111 0 0 0 0 0 0 0 0 0 0 0"])