function roadRadar([speed, zone]) {
    let zones = {motorway : 130, interstate : 90, city : 50, residential: 20};
    let overSpeed = speed - zones[zone];
    if (overSpeed > 0 && overSpeed <= 20) {
        console.log("speeding");
    } else if (overSpeed > 20 && overSpeed <= 40) {
        console.log("excessive speeding");
    } else if (overSpeed > 40) {
        console.log("reckless driving")
    }
}

roadRadar([40, "city"]);
roadRadar([21, "residential"]);
roadRadar([120, "interstate"]);
roadRadar([200, "motorway"]);