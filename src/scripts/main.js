// Defina as funções globalmente
let resultado;
let operacao = '';
let numeros = [];

function adicionarNumero(numero) {
    resultado.value += numero;
}

function adicionarOperacao(op) {
    if (resultado.value === '') return;
    numeros.push(resultado.value);
    operacao = op;
    resultado.value = '';
}

function calcular() {
    if (resultado.value === '' || numeros.length === 0) return;
    numeros.push(resultado.value);
    try {
        let total = new Function('return ' + numeros.join(' ' + operacao + ' '))();
        resultado.value = total;
    } catch (e) {
        resultado.value = 'Erro';
    }
    numeros = [];
    operacao = '';
}

function limpar() {
    resultado.value = '';
    numeros = [];
    operacao = '';
}

console.log("main.js carregado");


// Inicialize no DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    resultado = document.getElementById('resultado');
});