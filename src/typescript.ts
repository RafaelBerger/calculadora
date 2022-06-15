const visor1: any = document.getElementById("visor1");
const visor2: any = document.getElementById("visor2");
const visorOp: any = document.getElementById("visor-op");
const visorResultado: any = document.getElementById("visor-resultado-final");
const numerosDOM = document.querySelectorAll(".numeros");
const operacoesDOM = document.querySelectorAll(".operacoes");

const calcularDOM = document
  .querySelector("#op-igual")
  ?.addEventListener("click", calculaConta);

const clear = document
  .querySelector("#clear")
  ?.addEventListener("click", limpaTudo);

numerosDOM.forEach((numero) => {
  numero.addEventListener("click", handleClick);
});

operacoesDOM.forEach((operacao) => {
  operacao.addEventListener("click", trocaInput);
});

let dadosPrimeiroInput: number[] = [];
let dadosSegundoInput: number[] = [];

function handleClick(e: any) {
  if (visorOp.innerText == "") {
    visor1.innerText = visor1.innerText + e.target.id;
    dadosPrimeiroInput.pop();
    dadosPrimeiroInput.push(visor1.innerText);
  }
  if (visorOp.innerText != "") {
    visor2.innerText = visor2.innerText + e.target.id;
    dadosSegundoInput.pop();
    dadosSegundoInput.push(visor2.innerText);
  }

  console.log(dadosPrimeiroInput);
  console.log(dadosSegundoInput);
}

function trocaInput(e: any) {
  visorOp.innerText = e.target.id;
}

function limpaTudo() {
  visor1.innerText = "";
  visor2.innerText = "";
  visorOp.innerText = "";
}

function calculaConta(param: any) {}
