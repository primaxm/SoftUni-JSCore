/**
 * 
 */

function Cone(r, h) {
    let l = Math.sqrt((Math.pow(r, 2)+Math.pow(h, 2)));
    let s = Math.PI*r*l + Math.PI*r*r;
    let v = (Math.PI*r*r*h)/3;
    console.log("volume = " + v.toFixed(4))
    console.log("area = " + s.toFixed(4))
}