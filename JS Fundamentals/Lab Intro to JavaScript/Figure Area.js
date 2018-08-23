/**
 * 
 */
function Area(w1, h1, w2, h2) {
    let area = w1*h1 + w2*h2 - Math.min(w1,w2)* Math.min(h1,h2);
    console.log(area);
}