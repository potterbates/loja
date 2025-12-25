//elaborar um programa que leia 2 notas de um aluno em uma disciplina. Calcule e informe a media das notas.

//calcular()
//materia
//inputNotaUm
//inputNotaDois
//nomeMateria
//primeiraNota
//segundaNota
//media

const num = 2

function calcular() {
    const materia = document.getElementById("materia").value; //input matéria
    const nomeMateria = document.getElementById("nomeMateria").textContent = materia; //mensagem para informar a matéria

    const inputUm = document.getElementById("inputNotaUm").value; //valor primerio input
    const inputDois = document.getElementById("inputNotaDois").value; //valor segundo input

    const calculoUm = inputUm / Number(num); //cálculo da primeira nota
    const calculoDois = inputDois / Number(num); //cálculo da segunda nota
    const total = calculoUm + calculoDois; //cálculo das duas notas pra conseguir a média

    const primeiraNota = document.getElementById("primeiraNota").textContent = `Nota 1: ${inputUm}`; //mensagem para exibir a primeira nota
    const segundaNota = document.getElementById("segundaNota").textContent = `Nota 2: ${inputDois}`; //mensagem para exibir a segunda nota

    const media = document.getElementById("media").textContent = `Média: ${total}`; //mensagem para exibir a média
}