function darkmode(){
    var element = document.body;
    element.classList.toggle("dark-mode")
}
var time = new Date().getHours()
if(time > 19){
    darkmode()
}

