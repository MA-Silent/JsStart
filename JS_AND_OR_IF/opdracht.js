let date = new Date();
let day = date.getDay();
let dayOfWeek;
if(day == 6){
    dayOfWeek = "zaterdag";
}else if(day == 7){
    dayOfWeek = "zondag";
}if(dayOfWeek == "zaterdag" || dayOfWeek == "zondag"){
    console.log("Lekker uitslapen!");
}else{
    console.log("Ik moet naar school!!! Kut");
};