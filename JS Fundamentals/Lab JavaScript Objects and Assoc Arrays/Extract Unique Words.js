function extractUniqueWords(arr) {
    let words = [];
    for (let i = 0; i < arr.length; i++) {
        let splited = arr[i].split(/[\s,\.!?]/g).filter(a => a !== '');


        for (const iElement of splited) {
            if (!words.includes(iElement.toLowerCase()))  {
                words.push(iElement.toLowerCase());
            }
        }
    }
    console.log(words.join(", "));
}

extractUniqueWords(["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.",
    "Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.",
    "Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.",
    "Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.",
    "Morbi in ipsum varius, pharetra diam vel, mattis arcu.",
    "Integer ac turpis commodo, varius nulla sed, elementum lectus.",
    "Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus."]);