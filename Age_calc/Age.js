let jaar = 2008;
let maand = 5;
let dag = 10;

function Age_calc(j, m, d){
    let now = new Date();
    let birth = new Date(j,m,d);
    let ms = now - birth;
    let out = ms/31557600000
    return out.toFixed(2)
}

console.log("Je bent "+Age_calc(jaar,maand,dag)+ " jaar oud")
console.log("Je geboorte jaar is: " + jaar);
console.log("Je geboorte maand is: " + maand);
console.log("Je geboorte dag is: " + dag);