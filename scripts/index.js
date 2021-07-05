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
    console.log(precisao)
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
        calculaPotencia(1, 1, 1, 0, 0);
    } else if (calculo == "inversa") {
        
        resetAntAprox();
        calculaInversa();
    } else if (calculo == "qr") {

        resetAntAprox();
        calculaQR();
    } else {
        document.getElementById("error").style.display = "block";
    }
}

function calculaPotencia(y1, y2, y3, k, p) {
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

                if(p){
                    showResult(1/aprox1,y1, y2, y3);
                } else {
                    showResult(aprox1,y1, y2, y3);
                }

                return;
            }else{
                ant_aprox1 = aprox1;
                ant_aprox2 = aprox2;
                ant_aprox3 = aprox3;

                if(p){
                    calculaPotencia(y1, y2, y3, 1, 1);
                } else {
                    calculaPotencia(y1, y2, y3, 1, 0);
                }
            }
        }
        if(erro2 <= erro1 && erro2 <= erro3){
            if(erro2 < precisao){
                if(p){
                    showResult(1/aprox2,y1, y2, y3);
                } else {
                    showResult(aprox2,y1, y2, y3);
                }
                return;
            }else{
                ant_aprox1 = aprox1;
                ant_aprox2 = aprox2;
                ant_aprox3 = aprox3;
                if(p){
                    calculaPotencia(y1, y2, y3, 1, 1);
                } else {
                    calculaPotencia(y1, y2, y3, 1, 0);
                }
            }
        }
        if(erro3 <= erro1 && erro3 <= erro2){
            if(erro3 < precisao){
                if(p){
                    showResult(1/aprox3,y1, y2, y3);
                } else {
                    showResult(aprox3,y1, y2, y3);
                }
                return;
            }else{
                ant_aprox1 = aprox1;
                ant_aprox2 = aprox2;
                ant_aprox3 = aprox3;
                if(p){
                    calculaPotencia(y1, y2, y3, 1, 1);
                } else {
                    calculaPotencia(y1, y2, y3, 1, 0);
                }
            }
        }
    } else { //se for a primeira iteracao

        ant_aprox1 = aprox1;
        ant_aprox2 = aprox2;
        ant_aprox3 = aprox3;
        if(p){
            calculaPotencia(y1, y2, y3, 1, 1);
        } else {
            calculaPotencia(y1, y2, y3, 1, 0);
        }
    }

}

function calculaInversa() {
  
    {
    var det;
    var c11, c12, c13, c21, c22, c23, c31, c32, c33;

    //Fazendo a matriz inversa
    det = x11*x22*x33 + x12*x23*x31 + x13*x21*x32 - x13*x22*x31 - x11 * x23*x32 - x12*x21*x33;

    c11 = (x22*x33 - x23*x32);
    c12 = -(x21*x33 - x23*x31);
    c13 = (x21*x32 - x22*x31);

    c21 = -(x12*x33 - x13*x32); 
    c22 = (x11*x33 - x13*x31);
    c23 = -(x11*x32 - x12*x31);

    c31 = (x12*x23 - x13*x22);
    c32 = -(x11*x23 - x13*x21);
    c33 = (x11*x22 - x12*x21);

    x11 = (1/det) * c11;
    x12 = (1/det) * c21;
    x13 = (1/det) * c31;
    
    x21 = (1/det) * c12;
    x22 = (1/det) * c22;
    x23 = (1/det) * c32;

    x31 = (1/det) * c13;
    x32 = (1/det) * c23;
    x33 = (1/det) * c33;
    } 

    calculaPotencia(1, 1, 1, 0, 1);
}

function calculaQR() {
    var result;

    showResult(result, 0, 0, 0);
}

function showResult(result, auto1, auto2, auto3) {
    document.getElementById("result-section").style.display = "block";
    document.getElementById("result").textContent = "Autovalores: " + result;
    document.getElementById("autovet").textContent = "Autovalores: (" + auto1 + ", " + auto2 + ", " + auto3 + ")";
}