function brekenKubus(a, b, c) {
    var intermediary = a * b * c;
    var math = intermediary.toFixed(2);
    return math;
}
function brekenCylinder(hoogte, straal) {
    var intermediary = Math.PI * straal ** 2 * hoogte;
    var math = intermediary.toFixed(2);
    return math + " cm3";
}
function brekenRHDriehoek(a, b) {
    var intermediary = Math.sqrt(a ** 2 + b ** 2);
    var math = intermediary.toFixed(2);
    return math;
}

function averageOfSeven(a, b, c, d, e, f, g) {
    var intermediary = (a + b + c + d + e + f + g) / 7;
    var math = intermediary.toFixed(2);
    return math;
}
let kubus = brekenKubus(10, 5, 2);
let average = averageOfSeven(1, 2, 3, 4, 5, 6, 7);
let cylinder = brekenCylinder(200, 200);
let RHdriehoek = brekenRHDriehoek(10, 5);
console.log(kubus, average, cylinder, RHdriehoek);