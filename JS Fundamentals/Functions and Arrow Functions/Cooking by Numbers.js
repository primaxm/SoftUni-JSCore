function cookingByNumbers(arr) {
    number = Number(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        switch (arr[i]) {
            case "chop":
                number /= 2;
                break;
            case "dice":
                number = Math.sqrt(number, 2);
                break;
            case "spice":
                number++;
                break;
            case "bake":
                number *= 3;
                break;
            case "fillet":
                number -= (number*20/100);
                break;
        }
        console.log(number);
    }

}

cookingByNumbers(["32", "chop", "chop", "chop", "chop", "chop"]);
cookingByNumbers(["9","dice", "spice", "chop" , "bake", "fillet"]);
