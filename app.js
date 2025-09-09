'use strict'

const searchButton = document.getElementById('search-button');
const galeria = document.getElementById('galeria');

//Recebe input do usuário
function getInput() {
    const searchBar = document.getElementById('search-bar');
    const input = searchBar.value;
    const searchTerm = input.replace(' ', '/');
    return searchTerm;
}

//Async para deixar uma função assincrona, necessário quando há uso de await
//Await é necessário para dar o tempo de fetch, nosso código roda em nanos segundos, mas esse fetch fica na faixa dos milisegundos
async function buscarImagens(breed) {
    const endPoint = `https://dog.ceo/api/breed/${breed}/images`;
    const response = await fetch(endPoint);
    const imagens = await response.json();

    return imagens.message;
}

function carregarImagem(sourceImage){
    const dogImg = document.createElement('img');
    dogImg.src = sourceImage;
    galeria.appendChild(dogImg);
}


async function carregarImagens() {
    const input = getInput();
    const sourceImages = await buscarImagens(input);
    console.log(getInput)
    galeria.replaceChildren()

    sourceImages.forEach(carregarImagem);
}

searchButton.addEventListener('click', carregarImagens);
