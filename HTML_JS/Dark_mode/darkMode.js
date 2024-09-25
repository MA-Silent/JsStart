function darkmode(){
    var body = document.body;
    body.classList.toggle("dark-mode")
}
var time = new Date().getHours()
if(time > 14 || time == 14){
    darkmode()
}