function imperialUnits(number) {
    div = number%12;
    n = number / 12;
    console.log(Math.floor(n) + "'-" + div + "\"")
}

imperialUnits(36);
imperialUnits(55);
imperialUnits(11);