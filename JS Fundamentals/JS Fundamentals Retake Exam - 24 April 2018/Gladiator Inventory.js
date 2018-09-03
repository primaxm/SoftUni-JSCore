function gladiatorInventory(arr) {
    let weapons = arr[0].split(' ');
    arr.shift();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Fight!") {
            console.log(weapons.join(" "));
        } else {
            let [command, item] = arr[i].split(" ");
            switch (command) {
                case "Buy":
                    if (weapons.indexOf(item) < 0) {
                        weapons.push(item);
                    }
                    break;
                case "Trash":
                    if (weapons.indexOf(item) >= 0) {
                        weapons.splice(weapons.indexOf(item), 1);
                    }
                    break;
                case "Repair":

                    if (weapons.indexOf(item) >= 0) {
                        weapons.splice(weapons.indexOf(item), 1);
                        weapons.push(item);
                    }
                    break;
                case "Upgrade":
                    let upItem = item.split("-");
                    item = upItem[0] + ":" + upItem[1];
                    if (weapons.indexOf(upItem[0]) >= 0) {
                        weapons.splice(weapons.indexOf(upItem[0])+1, 0, item);
                    }
                    break;
                case "Default":
                    break;
            }
        }
    }
}

gladiatorInventory(["SWORD Shield Spear",
    "Buy Bag",
    "Trash Shield",
    "Repair Spear",
    "Upgrade SWORD-Steel",
    "Fight!"])