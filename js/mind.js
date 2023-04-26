let myLuckyNumber = 4203;
console.log("ZAZA Number:", myLuckyNumber);

window.onload = Print(); 
function Print() {
    document.getElementById("zaza").innerHTML = myLuckyNumber;
}
function Second(){
    document.getElementById("zaza2").innerHTML = myLuckyNumber;
}
function Save(){
    let name = document.getElementById("name").value;
    console.log("Username:", name)
}