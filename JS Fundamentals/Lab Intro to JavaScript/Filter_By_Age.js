/**
 * 
 */

function age(midAge, fName, fAge, sName, sAge) {
    let oOne = {name:fName, age:fAge};
    let oTwo = {name:sName, age:sAge};
    
        if (oOne.age >= midAge) console.log(oOne);
        if (oTwo.age >= midAge) console.log(oTwo);

}