function sum(){
var a,b,c;
// a=parseInt(prompt("Enter First Value: "));
// b=parseInt(prompt("Enter Second Value: "));
a=parseInt(document.getElementById("fnumber").value);
b=parseInt(document.getElementById("snumber").value);
c=a+b;
document.getElementById("result").innerText=c;
}