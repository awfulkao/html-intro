function Save(){
    let username = document.getElementById("name").value;
    console.log("Username:", username);
    window.onload = Print(); 
    function Print() {
    document.getElementById("zaza").innerHTML = username;
    let text = document.getElementById("texta").value;
    console.log("Text:", text);
    window.onload = Print(); 
    function Print() {
        document.getElementById("zaza2").innerHTML = text;
}
}

}
