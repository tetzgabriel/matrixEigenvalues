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
        if(calculo == "progressiva") {
            document.getElementById("2pontosRegr").style.display = "none";            
            document.getElementById("2pontosCent").style.display = "none";
            document.getElementById("2pontosProg").style.display = "flex";
        } else if(calculo == "central") {
            document.getElementById("2pontosRegr").style.display = "none";            
            document.getElementById("2pontosProg").style.display = "none";            
            document.getElementById("2pontosCent").style.display = "flex";
        } else if(calculo == "regressiva") {
            document.getElementById("2pontosCent").style.display = "none";            
            document.getElementById("2pontosProg").style.display = "none";  
            document.getElementById("2pontosRegr").style.display = "flex";            
        }
    } else {
        document.getElementById("2pontosProg").style.display = "none";
        document.getElementById("3pontos").style.display = "flex";
    }
}

function calcula() {
    console.log("Calcula")
}