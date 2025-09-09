'use strict'


const searchButton = document.getElementById('search-button');

//Recebe input do usuário
function getInput(){ 
    const searchBar = document.getElementById('search-bar');
    const input = searchBar.value;
    const searchTerm = input.replace(' ', '/');
    return searchTerm;
}

//Busca na lista de raças se o input é valido e converte para a estrutura de array
async function findPath(dogName){
    const listaEndPoint = 'https://dog.ceo/api/breeds/list/all';
    const response = await fetch(listaEndPoint);
    const listaCachorros = await response.json();
}


//Async para deixar uma função assincrona, necessária para usar o await
//Await é necessário para dar o tempo de fetch, nosso código roda em nanos segundos, mas esse fetch fica na faixa dos milisegundos
async function buscarImagens(breed){
    const endPoint = `https://dog.ceo/api/breed/${breed}/images`;
    const response = await fetch(endPoint);
    const imagens = await response.json();
    // console.log(imagens.message);

    return imagens.message;
}


async function carregarImagens(){
    const input = getInput();
    const sourceImages = await buscarImagens(input);
    console.log(getInput)
    const galeria = document.getElementById('galeria');
    galeria.replaceChildren()

    for (let i = 0; i< 15 ; i++){ 
        //TODO: fazer um método próprio para usar forEach, não consegui pensar bem em como limitar a contagem
        const dogImg = document.createElement('img');
        dogImg.src = sourceImages[i];
        // console.log(sourceImages[i]);
        galeria.appendChild(dogImg);
        
    }
}

searchButton.addEventListener('click', carregarImagens)

//Area de testes
// findPath('shiba');
// console.log('hello world!')

