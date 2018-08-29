function travelPlans(arr) {
    let specialized = ["Programming", "Hardware maintenance", "Cooking", "Translating", "Designing"];
    let average = ["Driving", "Managing", "Fishing", "Gardening"];
    let clumsy = ["Singing", "Accounting", "Teaching", "Exam-Making", "Acting", "Writing", "Lecturing", "Modeling", "Nursing"];


    let specCount = 0; let cluCount = 0; let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let [profession, amount] = arr[i].split(" : ");
        amount = Number(amount);
        if (specialized.includes(profession) && amount >= 200) {
            specCount++;
            sum += (amount - (20*amount)/100);
            if (specCount % 2 === 0) sum += 200;
        } else if (average.includes(profession)) {
            sum += amount;
        } else if (clumsy.includes(profession)) {
            cluCount++;
            if (cluCount % 2 === 0) {
                sum += (amount - (5*amount)/100);
            } else if (cluCount % 3 === 0) {
                sum += (amount - (10*amount)/100);
            } else {
                sum += amount;
            }
        }
    }
    console.log(`Final sum: ${sum.toFixed(2)}`);
    if (sum >= 1000) {
        let earn = sum - 1000;
        console.log(`Mariyka earned ${earn.toFixed(2)} gold more.`)
    } else {
        let earn = 1000 - sum;
        console.log(`Mariyka need to earn ${earn.toFixed(2)} gold more to continue in the next task.`)
    }
}

travelPlans(["Programming : 500",
    "Driving : 243.55",
    "Acting : 200",
    "Singing : 100",
    "Cooking : 199",
    "Hardware maintenance : 800",
    "Gardening : 700",
    "Programming : 500"]);

//travelPlans(["Singing : 300", "Singing : 200", "Singing : 100", "Singing : 100", "Singing : 100"])
