'use strict'



//Async para deixar uma função assincrona, necessária para usar o await
//Await é necessário para dar o tempo de fetch, nosso código roda em nanos segundos, mas esse fetch fica na faixa dos milisegundos
async function buscarImagens(breed){
    const endPoint = `https://dog.ceo/api/breed/${breed}/images`;
    const response = await fetch(endPoint);
    const imagens = await response.json();
    console.log(imagens.message);

    return imagens.message;
}

//Sempre que for solicitar uma função assincrona é necessário colocar o await
buscarImagens('shiba');
console.log(imagesArray);