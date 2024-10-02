function brekenKubus(a, b, c){
    return a*b*c;
}
function brekenCylinder(hoogte, straal){
    var intermediary = Math.PI*straal*straal*hoogte;
     var math = intermediary.toFixed(2);
    return math + " cm3"
}
function brekenRHDriehoek(a, b, c){
    return a*b*c;
}
function averageOfSeven(a, b, c, d, e, f, g){
    return a+b+c+d+e+f+g/7;
}
let kubus = brekenKubus(10,5,2);
let average = averageOfSeven(1,2,3,4,5,6,7);
let cylinder = brekenCylinder(200,200);
let RHdriehoek = brekenRHDriehoek();
console.log(kubus,average,cylinder,RHdriehoek);