let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputCerveja = document.getElementById("cerveja");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let cerveja = inputCerveja.value;
    let duracao = inputDuracao.value;

    let totalCarne = carnePP(duracao) * adultos + (carnePP(duracao) /2 * criancas);
    console.log(totalCarne);
    let totalCerveja = cervejaPP(duracao) * cerveja 
    let totalBebida = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${totalCarne / 1000}Kg de carne</p>`
    resultado.innerHTML += `<p>${totalCerveja / 1000}L de Cerveja</p>`
    resultado.innerHTML += `<p>${totalBebida / 1000}L de Bebidas</p>`
}

function carnePP (duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP (duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidaPP (duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}