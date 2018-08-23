function radioCrystals(arr) {
    let final = arr[0];

    for (let i = 1; i < arr.length; i++) {

        let current = arr[i];
        let cutCount = 0;
        let lapCount = 0;
        let grindCount = 0;
        let etchCount = 0;

        if(final > current && final-current > 1) break;

        console.log(`Processing chunk ${current} microns`)
        if(final-1 === current) {
            current++;
            console.log(`X-ray x1`);
            console.log(`Finished crystal ${current} microns`)
            break;
        }
        while(current / 4 >= final) {
            current = current / 4;
            cutCount++;
        }

        if(cutCount) {
            console.log(`Cut x${cutCount}`);
            current = transportAndWash(current);
        }


        while((current - 0.2*current) >= final) {
            current -= 0.2*current;
            lapCount++;
        }

        if(lapCount) {
            console.log(`Lap x${lapCount}`);
            current = transportAndWash(current);
        }


        while (current - 20 >= final) {
            current -= 20;
            grindCount++;
        }

        if(grindCount) {
            console.log(`Grind x${grindCount}`);
            current = transportAndWash(current);
        }


        while (current-2 > final) {
            current -= 2;
            etchCount++;
        }

        if (current-1 === final) {
            current -= 2;
            etchCount++;
            console.log(`Etch x${etchCount}`);
            current = transportAndWash(current);
            current++;
            console.log(`X-ray x1`);
        } else if (current-2 === final) {
            current -= 2;
            etchCount++;
            console.log(`Etch x${etchCount}`);
            current = transportAndWash(current);
        }

        console.log(`Finished crystal ${current} microns`)
    }


    function transportAndWash(current) {
        console.log("Transporting and washing");
        return Math.floor(current);
    }

}

radioCrystals([1375, 50000]);

radioCrystals([1000, 4000, 8100]);
radioCrystals([1375, 1374]);
