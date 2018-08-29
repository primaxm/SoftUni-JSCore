function travelInvestigation(arr) {
    //arr[1] = arr[1].replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    //let regex = new RegExp(arr[1], "g");
    //let companyNames = arr[0].split(regex).filter(a => a !== 0);
    let companyNames = arr[0].split(arr[1]).filter(a => a !== 0);
    //arr.splice(0, 2);
    let validSentences = [];
    let invalidSentences = []
    for (let i = 2; i < arr.length; i++) {
        let valid = true;
        for (let j = 0; j < companyNames.length; j++) {
           if (arr[i].toLowerCase().indexOf(companyNames[j]) < 0) {
               valid = false;
               break;
           }
        }

        if (valid) {
            validSentences.push(arr[i].toLowerCase())
        } else {
            invalidSentences.push(arr[i].toLowerCase())
        }
    }

    if (validSentences.length !== 0) {
        console.log("ValidSentences");
        for (let i = 0; i < validSentences.length; i++) {
            console.log(`${i+1}. ${validSentences[i]}`);
        }
    }

    if (validSentences.length !== 0 && invalidSentences.length !== 0) console.log("==============================");
    if (invalidSentences.length !== 0) {
        console.log("InvalidSentences");
        for (let i = 0; i < invalidSentences.length; i++) {
            console.log(`${i+1}. ${invalidSentences[i]}`)
        }
    }
}

travelInvestigation(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@,",
    "Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans",
    "someone continues as no "]);
/*    "Mincho  e KoftiPockivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
    "dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"]);*/
