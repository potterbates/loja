//elaborar um programa para um cinema, que leia o título e a duração de um filme em minutos. Exiba o título do filme e converta a duração para horas e minutos.

//inputTitulo
//inputDuracao
//submit
//h3
//h4

const form = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

form.addEventListener("submit", (e) => {
    const titulo = form.inputTitulo.value;
    const duracao = form.inputDuracao.value;

    const horas = Math.floor(duracao / 60);
    const minutos = Number(duracao - horas * 60);

    resp1.innerText = `Filme: ${titulo}`;

    resp2.innerText = `Duração: ${horas}h e ${minutos}m`;

    e.preventDefault();
})