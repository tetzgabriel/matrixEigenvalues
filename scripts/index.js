var pontos = "0";
var calculo = "central";

function getPontos(selectObject) {
    pontos = selectObject.value;
    document.getElementById("calculo").disabled = false;  
}

function getCalculo(selectObject) {
    calculo = selectObject.value;

    createTable();
}

function createTable() {
    if(pontos == "2"){
        if(calculo == "progressiva") {
            document.getElementById("error").style.display = "none";  
            
            document.getElementById("2pontosRegr").style.display = "none";            
            document.getElementById("2pontosCent").style.display = "none";
            document.getElementById("2pontosProg").style.display = "flex";
        } else if(calculo == "central") {
            document.getElementById("error").style.display = "none";  
            
            document.getElementById("2pontosRegr").style.display = "none";            
            document.getElementById("2pontosProg").style.display = "none";            
            document.getElementById("2pontosCent").style.display = "flex";
        } else if(calculo == "regressiva") {
            document.getElementById("error").style.display = "none";  
            
            document.getElementById("2pontosCent").style.display = "none";            
            document.getElementById("2pontosProg").style.display = "none";  
            document.getElementById("2pontosRegr").style.display = "flex";            
        }
    } else {
        if(calculo == "progressiva") {
            document.getElementById("error").style.display = "none";  
            
            document.getElementById("2pontosCent").style.display = "none";            
            document.getElementById("2pontosProg").style.display = "none";  
            document.getElementById("2pontosRegr").style.display = "none";

            document.getElementById("3pontosRegr").style.display = "none";            
            document.getElementById("3pontosProg").style.display = "flex";
        } else if(calculo == "central") {
            document.getElementById("error").style.display = "none";  
            
            document.getElementById("2pontosCent").style.display = "none";            
            document.getElementById("2pontosProg").style.display = "none";  
            document.getElementById("2pontosRegr").style.display = "none";
            
            document.getElementById("3pontosRegr").style.display = "none";            
            document.getElementById("3pontosProg").style.display = "none";  
            
            document.getElementById("error").style.display = "flex";  
        } else if(calculo == "regressiva") {
            document.getElementById("error").style.display = "none";  
            
            document.getElementById("2pontosCent").style.display = "none";            
            document.getElementById("2pontosProg").style.display = "none";  
            document.getElementById("2pontosRegr").style.display = "none";
            
            document.getElementById("3pontosProg").style.display = "none";  
            document.getElementById("3pontosRegr").style.display = "flex";            
        }
    }
}

function calcula() {
    if(pontos == "2"){
        if(calculo == "progressiva") {
            calculaProg2();
        } else if(calculo == "central") {
            calculaCent2();
        } else if(calculo == "regressiva") {
            calculaRegr2();
        }
    } else {
        if(calculo == "progressiva") {
            calculaProg3();
        } else if(calculo == "central") {
            alert("Selecione um método válido");
        } else if(calculo == "regressiva") {
            calculaRegr3();
        }
    }
}

function calculaProg2() {
    const x = document.getElementById("xProg2").value;
    const fx = document.getElementById("f(x)Prog2").value;

    const xi = document.getElementById("x+iProg2").value;
    const fxi = document.getElementById("f(x+i)Prog2").value;

    var result = (fxi - fx)/(xi - x);
    console.log(result)
}

function calculaCent2() {
    const ix = document.getElementById("x-iCent2").value;
    const fix = document.getElementById("f(x-i)Cent2").value;

    const xi = document.getElementById("x+iCent2").value;
    const fxi = document.getElementById("f(x+i)Cent2").value;

    var result = (fxi - fix)/(xi - ix);
    console.log(result)
}

function calculaRegr2() {
    const ix = document.getElementById("x-iRegr2").value;
    const fix = document.getElementById("f(x-i)Regr2").value;

    const x = document.getElementById("xRegr2").value;
    const fx = document.getElementById("f(x)Regr2").value;

    var result = (fx - fix)/(x - ix);
    console.log(result)
}

function calculaProg3() {
    const x = document.getElementById("xProg3").value;
    const fx = document.getElementById("f(x)Prog3").value;

    const xi = document.getElementById("x+iProg3").value;
    const fxi = document.getElementById("f(x+i)Prog3").value;

    const x2i = document.getElementById("x+2iProg3").value;
    const fx2i = document.getElementById("f(x+2i)Prog3").value;

    var result = ((-3*fx)+(4*fxi) - fx2i)/(2*(xi - x));

    console.log(result)
}

function calculaRegr3() {
    const x = document.getElementById("xRegr3").value;
    const fx = document.getElementById("f(x)Regr3").value;

    const xi = document.getElementById("x-iRegr3").value;
    const fxi = document.getElementById("f(x-i)Regr3").value;

    const x2i = document.getElementById("x-2iRegr3").value;
    const fx2i = document.getElementById("f(x-2i)Regr3").value;

    var result = (fx2i - 4*fxi + 3*fx)/(2*(x - xi));

    console.log(result)
}