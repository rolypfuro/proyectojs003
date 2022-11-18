function suma(){
    let n1=parseInt(document.getElementById("num1").value);
    let n2=parseInt(document.getElementById("num2").value);
    let sum=n1+n2;
    document.getElementById ("respuesta"). innerHTML=sum;
   
}
function resta(){
    let nu1=parseInt(document.getElementById("nu1").value);
    let nu2=parseInt(document.getElementById("nu2").value);
    let resta=nu1-nu2;
    document.getElementById ("resultado"). innerHTML=resta;
   
}
function multiplicación(){
    let nume1=parseInt(document.getElementById("nume1").value);
    let nume2=parseInt(document.getElementById("nume2").value);
    let multiplicación=nume1*nume2;
    document.getElementById ("solucion"). innerHTML=multiplicación;
   
}
function division(){
    let numer1=parseInt(document.getElementById("numer1").value);
    let numer2=parseInt(document.getElementById("numer2").value);
    let division=numer1/numer2;
    document.getElementById ("optenemos"). innerHTML=division;
   
}
function circulo(){
    let radio=parseFloat(document.getElementById("radio").value);
    const pi=3.1416;
    let areaCi=pi*(radio**2);
    document.getElementById ("opten"). innerHTML=areaCi;
 

}
function perimetro(){
let base=parseInt(document.getElementById("base").value);
let altura=parseInt(document.getElementById("altura").value);
let prmt=2*base+2*altura;

document.getElementById ("respt"). innerHTML=prmt;


}
function triangulo(){
let catetoop=parseInt(document.getElementById("catetoop").value);
let catetoad=parseInt(document.getElementById("catetoad").value);

let suma=catetoop**2+catetoad**2;
let hipotenusa=Math.sqrt(suma);

document.getElementById ("rspt"). innerHTML=hipotenusa;
}