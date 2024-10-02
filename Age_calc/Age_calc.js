yb = 2008
mb = 5
db = 10

Calc(yb, mb, db)

function Calc(y,m,d){
    console.log(y, m ,d)
    var now = new Date();
    var birth = Date(y, m, d);
    let ms = now - birth;
    return ms
}