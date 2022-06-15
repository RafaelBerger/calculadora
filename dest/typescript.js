"use strict";
var _a, _b;
const visor1 = document.getElementById("visor1");
const visor2 = document.getElementById("visor2");
const visorOp = document.getElementById("visor-op");
const visorResultado = document.getElementById("visor-resultado-final");
const numerosDOM = document.querySelectorAll(".numeros");
const operacoesDOM = document.querySelectorAll(".operacoes");
const calcularDOM = (_a = document
    .querySelector("#op-igual")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", calculaConta);
const clear = (_b = document
    .querySelector("#clear")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", limpaTudo);
numerosDOM.forEach((numero) => {
    numero.addEventListener("click", handleClick);
});
operacoesDOM.forEach((operacao) => {
    operacao.addEventListener("click", trocaInput);
});
let dadosPrimeiroInput = [];
let dadosSegundoInput = [];
function handleClick(e) {
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
function trocaInput(e) {
    visorOp.innerText = e.target.id;
}
function limpaTudo() {
    visor1.innerText = "";
    visor2.innerText = "";
    visorOp.innerText = "";
}
function calculaConta(param) { }
