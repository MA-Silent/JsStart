let a 
let firstPrint
let b 
let c

firstPrint = "a is equal to b"

a = 2000
b = 1000
c = 500
if(a == b){
    console.log(firstPrint);
}else if(a<b){
    console.log("a is smaller than b");
}else if(a == c){
    console.log("a is equal to c");
}else if(a+b == 3000 || c == 3000){
    console.log("a+b is equal to 3000 or c is equal to 3000");
    console.log('c:'+c);
}else{
    console.warn('a:'+ a);
    console.warn('b:'+ b);
    console.warn('c:'+ c);
}
