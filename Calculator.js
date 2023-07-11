//console.log("hello tausif");
// alert() 

function display(number) {
    document.getElementById("result").value += number;
    
}
function calculate() {
    var result = document.getElementById('result').value;
    var a = eval(result);
    document.getElementById("result").value = a;
    
}
function clearsrcr() {
    document.getElementById("result").value = "";
    
}
function clearnew() {
    document.getElementById("result").value = "";
    
}