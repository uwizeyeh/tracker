var sideofTriangle=["side1","side2","side3"];
function getResult(){
    var side1= parseFloat(document.getElementById('side1').value);
    var side2 = parseFloat(document.getElementById('side2').value);
    var side3 = parseFloat(document.getElementById('side3').value);

    if(side1 === side2 && side2 === side3){
        alert("Equilateral");
        window.location.href="eqvrt.html";
}