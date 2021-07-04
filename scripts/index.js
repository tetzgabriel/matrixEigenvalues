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

var ant_aprox1;
var ant_aprox2 ;
var ant_aprox3;


function getPontos(selectObject) {
    pontos = selectObject.value;
}

function getCalculo(selectObject) {
    calculo = selectObject.value;

    createTable();
}

function getPrecision(selectObject) {
    precisao = selectObject.value;
    console.log(precisao);
}

function createTable() {
    document.getElementById("matrix").style.display = "flex";
    document.getElementById("botao").disabled = false;  
}

function resetAntAprox() {
    ant_aprox1 = 0;
    ant_aprox2 = 0;
    ant_aprox3 = 0;
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

    if (calculo == "potencia") {

        resetAntAprox();
        calculaPotencia(1,1,1,0);
    } else if (calculo == "inversa") {

        resetAntAprox();
        calculaPotenciaInversa();
    } else if (calculo == "qr") {

        resetAntAprox();
        calculaQR();
    } else {
        document.getElementById("error").style.display = "block";
    }
}

function calculaPotencia(y1,y2,y3, k) {
    var z1,z2,z3;
    var erro1, erro2, erro3;
    var alpha; 

    z1 = (x11 * y1) + (x12 * y2) + (x13 * y3);
    z2 = (x21 * y1) + (x22 * y2) + (x23 * y3);
    z3 = (x31 * y1) + (x32 * y2) + (x33 * y3);
      
    if(Math.abs(z1) >= Math.abs(z2) && Math.abs(z1) >=Math.abs(z3)){
        alpha = Math.abs(z1);
    }
    if(Math.abs(z2) >= Math.abs(z1) && Math.abs(z2) >=Math.abs(z3)){
        alpha = Math.abs(z2);
    }
    if(Math.abs(z3) >= Math.abs(z1) && Math.abs(z3) >=Math.abs(z2)){
        alpha = Math.abs(z3);
    }

    y1 = (1/alpha) * z1;
    y2 = (1/alpha) * z2;
    y3 = (1/alpha) * z3;

    aprox1 =  z1/y1;
    aprox2 =  z2/y2;
    aprox3 =  z3/y3;

    if(k){ // se NAO for a primeira iteracao
        
        erro1 = Math.abs((aprox1 - ant_aprox1));
        erro2 = Math.abs((aprox2 - ant_aprox2));
        erro3 = Math.abs((aprox3 - ant_aprox3));

        erro1 = erro1/Math.abs(aprox1);
        erro2 = erro2/Math.abs(aprox2);
        erro3 = erro3/Math.abs(aprox3);

        if(erro1 <= erro2 && erro1 <= erro3){
            if(erro1 < precisao){
                showResult(aprox1,y1, y2, y3);
                break;
            }else{
                ant_aprox1 = aprox1;
                ant_aprox2 = aprox2;
                ant_aprox3 = aprox3;
                calculaPotencia(y1, y2, y3, 1);
            }
        }
        if(erro2 <= erro1 && erro2 <= erro3){
            if(erro2 < precisao){
                showResult(aprox2,y1, y2, y3);
                break;
            }else{
                ant_aprox1 = aprox1;
                ant_aprox2 = aprox2;
                ant_aprox3 = aprox3;
                calculaPotencia(y1, y2, y3, 1);
            }
        }
        if(erro3 <= erro1 && erro3 <= erro2){
            if(erro3 < precisao){
                showResult(aprox3,y1, y2, y3, 1);
                break;
            }else{
                ant_aprox1 = aprox1;
                ant_aprox2 = aprox2;
                ant_aprox3 = aprox3;
                calculaPotencia(y1, y2, y3);
            }
        }
    } else { //se for a primeira iteracao

        ant_aprox1 = aprox1;
        ant_aprox2 = aprox2;
        ant_aprox3 = aprox3;
        calculaPotencia(y1, y2, y3, 1);
    }

}

function calculaInversa() {
    var result;

    showResult(result);
}

function calculaQR() {
    var result;

    showResult(result);
}

function showResult(result, auto1, auto2, auto3) {
    document.getElementById("result-section").style.display = "block";
    document.getElementById("result").textContent = "Autovalores: " + result;
 //   document.getElementById("autovet").textContent = "Autovalores: (" + auto1 + ", " + auto2 + ", " + auto3 + ")";

}