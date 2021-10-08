var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");
var num4 = document.getElementById("num4");
var num5 = document.getElementById("num5");
var num6 = document.getElementById("num6");
var num7 = document.getElementById("num7");
var num8 = document.getElementById("num8");
var num9 = document.getElementById("num9");
var num0 = document.getElementById("num0");

var opAdicao = document.getElementById("op-adicao");
var opSubtracao = document.getElementById("op-subtracao");
var opMultiplicacao = document.getElementById("op-multiplicacao");
var opDivisao = document.getElementById("op-divisao");
var opIgual = document.getElementById("op-igual");

var clear = document.getElementById("clear");
var visor = document.getElementById("visor");

num1.addEventListener("click", numero1);
num2.addEventListener("click", numero2);
num3.addEventListener("click", numero3);
num4.addEventListener("click", numero4);
num5.addEventListener("click", numero5);
num6.addEventListener("click", numero6);
num7.addEventListener("click", numero7);
num8.addEventListener("click", numero8);
num9.addEventListener("click", numero9);
num0.addEventListener("click", numero0);

clear.addEventListener("click", limpar);
opAdicao.addEventListener("click", somar());
opSubtracao.addEventListener("click");
opMultiplicacao.addEventListener("click");
opDivisao.addEventListener("click");
opIgual.addEventListener("click");

function somar() {
  const numero1 = visor.innerHTML;
  console.log(numero1);
}

function limpar() {
  visor.innerHTML = "";
}

function numero1() {
  visor.innerHTML = visor.innerHTML + 1;
}

function numero2() {
  visor.innerHTML = visor.innerHTML + 2;
}

function numero3() {
  visor.innerHTML = visor.innerHTML + 3;
}

function numero4() {
  visor.innerHTML = visor.innerHTML + 4;
}

function numero5() {
  visor.innerHTML = visor.innerHTML + 5;
}

function numero6() {
  visor.innerHTML = visor.innerHTML + 6;
}

function numero7() {
  visor.innerHTML = visor.innerHTML + 7;
}

function numero8() {
  visor.innerHTML = visor.innerHTML + 8;
}

function numero9() {
  visor.innerHTML = visor.innerHTML + 9;
}

function numero0() {
  visor.innerHTML = visor.innerHTML + 0;
}
