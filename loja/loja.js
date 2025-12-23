//Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. Calcule e informe o valor para pagamento à vista, com 10% de desconto e o valor em 3x.

//calcular()
//input
//dividido
//preçoOriginal
//preçoVista
//ou 3x de 20 id="parcelamento"



function calcular() {
    const input = document.getElementById("input").value;
    const dividido = document.getElementById("dividido").value;

    const preçoOriginal = document.getElementById("preçoOriginal").textContent = `Preço original: R$ ${input}`;

    const desconto = input - (input * 0.1);

    const preçoVista = document.getElementById("preçoVista").textContent = `Valor à vista: R$ ${desconto.toFixed(2)}`;

    const divisao = input / dividido;

    const parcelado = document.getElementById("parcelamento").textContent = `Valor parcelado: R$ ${divisao.toFixed(2)}`;

    if (dividido > "3") {
        const mensagem = document.getElementById("preçoOriginal").textContent = "Você pode dividir até 3x.";

        const mensagemDois = document.getElementById("preçoVista").textContent = "";

        const mensagemTres = document.getElementById("parcelamento").textContent = "";
    }

    if (dividido == "1") {
        const mensagem = document.getElementById("parcelamento").textContent = "";
    }

    if (dividido == "2") {
        const mensagemDois = document.getElementById("preçoVista").textContent = "";
    }

    if (dividido == "3") {
        const mensagemDois = document.getElementById("preçoVista").textContent = "";
    }

    if (input == "") {
        const mensagem = document.getElementById("preçoOriginal").textContent = "Você precisa digitar um valor válido!";

        const mensagemDois = document.getElementById("preçoVista").textContent = "";

        const mensagemTres = document.getElementById("parcelamento").textContent = "";
    }

    if (input == "0") {
        const mensagem = document.getElementById("preçoOriginal").textContent = "Você precisa digitar um valor válido!";

        const mensagemDois = document.getElementById("preçoVista").textContent = "";

        const mensagemTres = document.getElementById("parcelamento").textContent = "";
    }
}