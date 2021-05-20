var pontos = "0";
var calculo = "central";

function getPontos(selectObject) {
    pontos = selectObject.value;
    document.getElementById("calculo").disabled = false;  
    console.log(pontos)
}

function getCalculo(selectObject) {
    calculo = selectObject.value;

    createTable();
}

function createTable() {
    console.log("Pontos =" + pontos)
    if(pontos == "2"){
        document.getElementById("3pontos").style.display = "none";
        document.getElementById("2pontos").style.display = "flex";
    } else {
        document.getElementById("2pontos").style.display = "none";
        document.getElementById("3pontos").style.display = "flex";
    }
}

function calcula() {
    console.log("Calcula")
}