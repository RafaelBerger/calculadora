const visor1 = document.getElementById("visor1");
const visor2 = document.getElementById("visor2");
const visorOp = document.getElementById("visor-op");
const visorResultado = document.getElementById("visor-resultado-final");

const num1: any = document.getElementById("num1").addEventListener("click", () => {
  if (visorOp.innerHTML == "") {
    visor1.innerHTML = visor1.innerHTML + 1;
  } else if (visorOp.innerHTML != "") {
    visor2.innerHTML = visor2.innerHTML + 1;
  }
});
const num2 = document.getElementById("num2").addEventListener("click", () => {
  if (visorOp.innerHTML == "") {
    visor1.innerHTML = visor1.innerHTML + 2;
  } else if (visorOp.innerHTML != "") {
    visor2.innerHTML = visor2.innerHTML + 2;
  }
});
const num3 = document.getElementById("num3").addEventListener("click", () => {
  if (visorOp.innerHTML == "") {
    visor1.innerHTML = visor1.innerHTML + 3;
  } else if (visorOp.innerHTML != "") {
    visor2.innerHTML = visor2.innerHTML + 3;
  }
});
const num4 = document.getElementById("num4").addEventListener("click", () => {
  if (visorOp.innerHTML == "") {
    visor1.innerHTML = visor1.innerHTML + 4;
  } else if (visorOp.innerHTML != "") {
    visor2.innerHTML = visor2.innerHTML + 4;
  }
});
const num5 = document.getElementById("num5").addEventListener("click", () => {
  if (visorOp.innerHTML == "") {
    visor1.innerHTML = visor1.innerHTML + 5;
  } else if (visorOp.innerHTML != "") {
    visor2.innerHTML = visor2.innerHTML + 5;
  }
});
const num6 = document.getElementById("num6").addEventListener("click", () => {
  if (visorOp.innerHTML == "") {
    visor1.innerHTML = visor1.innerHTML + 6;
  } else if (visorOp.innerHTML != "") {
    visor2.innerHTML = visor2.innerHTML + 6;
  }
});
const num7 = document.getElementById("num7").addEventListener("click", () => {
  if (visorOp.innerHTML == "") {
    visor1.innerHTML = visor1.innerHTML + 7;
  } else if (visorOp.innerHTML != "") {
    visor2.innerHTML = visor2.innerHTML + 7;
  }
});
const num8 = document.getElementById("num8").addEventListener("click", () => {
  if (visorOp.innerHTML == "") {
    visor1.innerHTML = visor1.innerHTML + 8;
  } else if (visorOp.innerHTML != "") {
    visor2.innerHTML = visor2.innerHTML + 8;
  }
});
const num9 = document.getElementById("num9").addEventListener("click", () => {
  if (visorOp.innerHTML == "") {
    visor1.innerHTML = visor1.innerHTML + 9;
  } else if (visorOp.innerHTML != "") {
    visor2.innerHTML = visor2.innerHTML + 9;
  }
});
const num0 = document.getElementById("num0").addEventListener("click", () => {
  if (visorOp.innerHTML == "") {
    visor1.innerHTML = visor1.innerHTML + 0;
  } else if (visorOp.innerHTML != "") {
    visor2.innerHTML = visor2.innerHTML + 0;
  }
});

let dadosConta = [];

const opAdicao = document
  .getElementById("op-adicao")
  .addEventListener("click", () => {
    dadosConta.push(Number(visor1.innerHTML));
    visorOp.innerHTML = "+";
  });

const opSubtracao = document
  .getElementById("op-subtracao")
  .addEventListener("click", () => {
    dadosConta.push(Number(visor1.innerHTML));
    visorOp.innerHTML = "-";
  });
const opMultiplicacao = document
  .getElementById("op-multiplicacao")
  .addEventListener("click", () => {
    dadosConta.push(Number(visor1.innerHTML));
    visorOp.innerHTML = "x";
  });
const opDivisao = document
  .getElementById("op-divisao")
  .addEventListener("click", () => {
    dadosConta.push(Number(visor1.innerHTML));
    visorOp.innerHTML = "÷";
  });

const opIgual = document
  .getElementById("op-igual")
  .addEventListener("click", () => {
    dadosConta.push(Number(visor2.innerHTML));

    if (visorOp.innerHTML == "+") {
      visorResultado.innerHTML = dadosConta.reduce((a, b) => a + b);
    } else if (visorOp.innerHTML == "-") {
      visorResultado.innerHTML = dadosConta.reduce((a, b) => a - b);
    } else if (visorOp.innerHTML == "x") {
      visorResultado.innerHTML = dadosConta.reduce((a, b) => a * b);
    } else if (visorOp.innerHTML == "÷") {
      visorResultado.innerHTML = dadosConta.reduce((a, b) => a / b);
    }
  });

const clear = document.getElementById("clear").addEventListener("click", () => {
  visor1.innerHTML = "";
  visorOp.innerHTML = "";
  visor2.innerHTML = "";
  visorResultado.innerHTML = "";
  dadosConta = [];
});


