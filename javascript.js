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
var visor1 = document.getElementById("visor1");
var visor2 = document.getElementById("visor2");
var visorOp = document.getElementById("visor-op");
var visorResultado = document.getElementById("visor-resultado-final");

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
opAdicao.addEventListener("click", somar);
opSubtracao.addEventListener("click", subtrair);
opMultiplicacao.addEventListener("click", multiplicar);
opDivisao.addEventListener("click", dividir);
opIgual.addEventListener("click", igual);

var numerosVisor1 = "";
var numerosVisor2 = "";

function igual() {
  numerosVisor2 = visor2.innerHTML;
  if (visorOp.innerHTML == "+") {
    visorResultado.innerHTML = Number(numerosVisor1) + Number(numerosVisor2);
  } else if (visorOp.innerHTML == "-") {
    visorResultado.innerHTML = Number(numerosVisor1) - Number(numerosVisor2);
  } else if (visorOp.innerHTML == "x") {
    visorResultado.innerHTML = Number(numerosVisor1) * Number(numerosVisor2);
  } else if (visorOp.innerHTML == "÷") {
    visorResultado.innerHTML = Number(numerosVisor1) / Number(numerosVisor2);
  }

  visor1.innerHTML = "";
  visor2.innerHTML = "";
  visorOp.innerHTML = "";
}

function somar() {
  numerosVisor1 = visor1.innerHTML;
  visorOp.innerHTML = "+";
}

function subtrair() {
  numerosVisor1 = visor1.innerHTML;
  visorOp.innerHTML = "-";
}

function multiplicar() {
  numerosVisor1 = visor1.innerHTML;
  visorOp.innerHTML = "x";
}

function dividir() {
  numerosVisor1 = visor1.innerHTML;
  visorOp.innerHTML = "÷";
}

function limpar() {
  visor1.innerHTML = "";
  visorOp.innerHTML = "";
  visor2.innerHTML = "";
  visorResultado.innerHTML = "";
}

function numero1() {
  if (visorOp.innerHTML == "") {
    visor1.innerHTML = visor1.innerHTML + 1;
  } else if (visorOp.innerHTML != "") {
    visor2.innerHTML = visor2.innerHTML + 1;
  }
}

function numero2() {
  if (visorOp.innerHTML == "") {
    visor1.innerHTML = visor1.innerHTML + 2;
  } else if (visorOp.innerHTML != "") {
    visor2.innerHTML = visor2.innerHTML + 2;
  }
}

function numero3() {
  if (visorOp.innerHTML == "") {
    visor1.innerHTML = visor1.innerHTML + 3;
  } else if (visorOp.innerHTML != "") {
    visor2.innerHTML = visor2.innerHTML + 3;
  }
}

function numero4() {
  if (visorOp.innerHTML == "") {
    visor1.innerHTML = visor1.innerHTML + 4;
  } else if (visorOp.innerHTML != "") {
    visor2.innerHTML = visor2.innerHTML + 4;
  }
}

function numero5() {
  if (visorOp.innerHTML == "") {
    visor1.innerHTML = visor1.innerHTML + 5;
  } else if (visorOp.innerHTML != "") {
    visor2.innerHTML = visor2.innerHTML + 5;
  }
}

function numero6() {
  if (visorOp.innerHTML == "") {
    visor1.innerHTML = visor1.innerHTML + 6;
  } else if (visorOp.innerHTML != "") {
    visor2.innerHTML = visor2.innerHTML + 6;
  }
}

function numero7() {
  if (visorOp.innerHTML == "") {
    visor1.innerHTML = visor1.innerHTML + 7;
  } else if (visorOp.innerHTML != "") {
    visor2.innerHTML = visor2.innerHTML + 7;
  }
}

function numero8() {
  if (visorOp.innerHTML == "") {
    visor1.innerHTML = visor1.innerHTML + 8;
  } else if (visorOp.innerHTML != "") {
    visor2.innerHTML = visor2.innerHTML + 8;
  }
}

function numero9() {
  if (visorOp.innerHTML == "") {
    visor1.innerHTML = visor1.innerHTML + 9;
  } else if (visorOp.innerHTML != "") {
    visor2.innerHTML = visor2.innerHTML + 9;
  }
}

function numero0() {
  if (visorOp.innerHTML == "") {
    visor1.innerHTML = visor1.innerHTML + 0;
  } else if (visorOp.innerHTML != "") {
    visor2.innerHTML = visor2.innerHTML + 0;
  }
}
