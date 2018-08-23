function gradsToRadians(radians) {
    while (radians < 0)
        radians += 400;

    let degree = 9/10 * radians ;
    degree = degree % 360;
    console.log(degree);
}