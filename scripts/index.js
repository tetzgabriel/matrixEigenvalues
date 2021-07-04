var calculo = "central";
var precisao = 0;

var x11;
var x12;
var x13;
var x21;
var x22;
var x23;
var x31;
var x32;
var x33;


function getPontos(selectObject) {
    pontos = selectObject.value;
}

function getCalculo(selectObject) {
    calculo = selectObject.value;

    createTable();
}

function getPrecision(selectObject) {
    precisao = selectObject.value;
    console.log(precisao)
}

function createTable() {
    document.getElementById("matrix").style.display = "flex";
    document.getElementById("botao").disabled = false;  
}

function calcula() {
    x11 = document.getElementById("x11").value;
    x12 = document.getElementById("x12").value;
    x13 = document.getElementById("x13").value;
    x21 = document.getElementById("x21").value;
    x22 = document.getElementById("x22").value;
    x23 = document.getElementById("x23").value;
    x31 = document.getElementById("x31").value;
    x32 = document.getElementById("x32").value;
    x33 = document.getElementById("x33").value;

    if (calculo == "") {
        
        calculaPotencia();
    } else if (calculo == "") {
        
        calculaPotenciaInversa();
    } else if (calculo == "") {

        calculaQR();
    } else {
        document.getElementById("error").style.display = "block";
    }
}

function calculaPotencia() {
    var result;

    showResult(result);
}

function calculaInversa() {
    var result;

    showResult(result);
}

function calculaQR() {
    var result;

    showResult(result);
}

function showResult(result) {
    document.getElementById("result-section").style.display = "block";
    document.getElementById("result").textContent = "Resultado: " + result;
}