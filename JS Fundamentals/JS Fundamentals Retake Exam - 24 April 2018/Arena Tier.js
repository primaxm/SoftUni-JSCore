function arenaTier(arr) {
    let gladiators = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Ave Cesar") {
            break;
        } else {
            if (arr[i].indexOf("vs") > 0) {
                let [gladiatorOne, gladiatorTwo] = arr[i].split(" vs ");
                if (gladiators.hasOwnProperty(gladiatorOne) && gladiators.hasOwnProperty(gladiatorTwo)) {
                    for (const gladiatorsKey in gladiators[gladiatorOne]) {
                        if (gladiators[gladiatorTwo].hasOwnProperty(gladiatorsKey)) {
                            let sumOfSkillsOne = 0, sumOfSkillsTwo = 0;
                            sumOfSkillsOne = Object.keys(gladiators[gladiatorOne]).map(a => gladiators[gladiatorOne][a]).reduce((a, b) => {return a + b});
                            sumOfSkillsTwo = Object.keys(gladiators[gladiatorTwo]).map(a => gladiators[gladiatorTwo][a]).reduce((a, b) => {return a + b});
                            if (sumOfSkillsOne > sumOfSkillsTwo) {
                                delete gladiators[gladiatorTwo];
                            } else {
                                delete gladiators[gladiatorOne];
                            }
                        }
                    }
                }
            } else {
                let[name, technique, skill] = arr[i].split(" -> ");
                if (gladiators.hasOwnProperty(name)) {
                    if (gladiators[name].hasOwnProperty(technique) && gladiators[name][technique] < skill) {
                        gladiators[name][technique] = Number(skill);
                    } else {
                        gladiators[name][technique] = Number(skill);
                    }
                } else {
                    gladiators[name] = {};
                    gladiators[name][technique] = Number(skill);
                }
            }
        }
    }

    let gNames = Object.keys(gladiators).sort((a, b) => {
        let g1 = Object.keys(gladiators[a]).map(key => gladiators[a][key]).reduce((a, b) => {return a + b});
        let g2 = Object.keys(gladiators[b]).map(key => gladiators[b][key]).reduce((a, b) => {return a + b});

        if (g2 - g1 === 0) {
            return gladiators[a].localCompare(gladiators[b])
        }
        return g2 - g1;
    })

    let result = [];
    for (const arrKey of gNames) {
        result[arrKey] = gladiators[arrKey]
    }

    for (const galdiatorsKey in result) {
        let orderedSkils = Object.keys(result[galdiatorsKey]).sort((a, b) => {
            if (result[galdiatorsKey][a] - result[galdiatorsKey][b] === 0) {
                return a.localeCompare(b);
            }
            return result[galdiatorsKey][b] - result[galdiatorsKey][a];
        });

        let ordK = [];
        for (const orderedKey of orderedSkils) {
            ordK[orderedKey] = result[galdiatorsKey][orderedKey]
        }
        result[galdiatorsKey] = ordK;
    }

    for (const gNamesKey in result) {
        let sum = Object.keys(result[gNamesKey]).map(key => result[gNamesKey][key]).reduce((a, b) => {return a + b});
        console.log(`${gNamesKey}: ${sum} skill`);
        for (const gNamesKey1 in result[gNamesKey]) {
            console.log(`- ${gNamesKey1} <!> ${result[gNamesKey][gNamesKey1]}`);
        }
    }

}

/*arenaTier(["Pesho -> Duck -> 400" ,
    "Julius -> Shield -> 150" ,
    "Gladius -> Heal -> 200" ,
    "Gladius -> Support -> 250" ,
    "Gladius -> Shield -> 250" ,
    "Pesho vs Gladius" ,
    "Gladius vs Julius" ,
    "Gladius vs Gosho" ,
    "Ave Cesar"]);*/

arenaTier(["Pesho -> BattleCry -> 400",
    "Gosho -> PowerPunch -> 300",
    "Stamat -> Duck -> 200",
    "Stamat -> Tiger -> 250",
    "Ave Cesar"]);