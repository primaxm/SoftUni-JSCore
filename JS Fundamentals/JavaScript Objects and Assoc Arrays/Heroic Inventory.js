function heroicInventory(arr) {
    let heroData = [];
    for (let i = 0; i < arr.length; i++) {
        let splited = arr[i].split(' / ').filter(a => a !== '');
        let heroItem = [];
        if (splited[2]) {
            heroItem = splited[2].split(', ').filter(a => a !== '')
        }
        let hero = {name: splited[0], level: Number(splited[1]), items: heroItem};
        heroData.push(hero);
    }

    console.log(JSON.stringify(heroData));
}

heroicInventory(["Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"])