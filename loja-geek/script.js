let itens = [
    produto1 = {
        image: './assets/img/painting/clock.jpg',
        name: 'Smartwatch',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto2 = {
        image: './assets/img/painting/gamepad.jpg',
        name: 'Controle Playstation',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto3 = {
        image: './assets/img/painting/personagem.jpg',
        name: 'Robot',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto4 = {
        image: './assets/img/actions/animewoman.jpg',
        name: 'Anime Woman',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto5 = {
        image: './assets/img/actions/dragonballpersonagem.jpg',
        name: 'Goku Super Saiyajin',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto6 = {
        image: './assets/img/actions/starwarspersonagem.jpg',
        name: 'Sr Yoda',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto1 = {
        image: './assets/img/painting/clock.jpg',
        name: 'Smartwatch',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto2 = {
        image: './assets/img/painting/gamepad.jpg',
        name: 'Controle Playstation',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto3 = {
        image: './assets/img/painting/personagem.jpg',
        name: 'Robot',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto4 = {
        image: './assets/img/actions/animewoman.jpg',
        name: 'Anime Woman',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto5 = {
        image: './assets/img/actions/dragonballpersonagem.jpg',
        name: 'Goku Super Saiyajin',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto6 = {
        image: './assets/img/actions/starwarspersonagem.jpg',
        name: 'Sr Yoda',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto3 = {
        image: './assets/img/painting/personagem.jpg',
        name: 'Robot',
        price: 'R$100,00',
        type: 'Painting'
    },
    produto4 = {
        image: './assets/img/actions/animewoman.jpg',
        name: 'Anime Woman',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto5 = {
        image: './assets/img/actions/dragonballpersonagem.jpg',
        name: 'Goku Super Saiyajin',
        price: 'R$100,00',
        type: 'Action Figures'
    },
    produto6 = {
        image: './assets/img/actions/starwarspersonagem.jpg',
        name: 'Sr Yoda',
        price: 'R$100,00',
        type: 'Action Figures'
    }
];





function separaItens(lista){
    let listFigures = []
    let listFrames = []
    for(let i = 0; i < lista.length;i++){
        if(lista[i].type === 'Action Figures'){
            listFigures.push(lista[i])
        }
        else{
            listFrames.push(lista[i])
        }
    }
    return [listFrames,listFigures]
}


const secaoListFrame = document.getElementsByTagName('section')[0]
const secaoListFigure = document.getElementsByTagName('section')[1]


let objetoFrames = separaItens(itens)[0]
let objetoFigures = separaItens(itens)[1]


let listaUlFigures = document.createElement('ul');
listaUlFigures.classList.add('lista-elementos')

for(let i = 0; i < objetoFigures.length; i++) {

  let imagem = document.createElement('img');
  imagem.src = objetoFigures[i].image;
  imagem.classList.add('img-produto')

  let nome = document.createElement('span');
  nome.innerText = objetoFigures[i].name;

  let valor = document.createElement('p');
  valor.innerText = objetoFigures[i].price;

  let itemListaFigures = document.createElement('li'); 
  itemListaFigures.classList.add('elemento');

  itemListaFigures.appendChild(imagem);
  itemListaFigures.appendChild(nome);
  itemListaFigures.appendChild(valor);

  listaUlFigures.appendChild(itemListaFigures); 
}



let listaUlFrames = document.createElement('ul');
listaUlFrames.classList.add('lista-elementos')

for(let i = 0; i < objetoFrames.length; i++) {

  let imagem = document.createElement('img');
  imagem.src = objetoFrames[i].image;
  imagem.classList.add('img-produto')

  let nome = document.createElement('span');
  nome.innerText = objetoFrames[i].name;

  let valor = document.createElement('p');
  valor.innerText = objetoFrames[i].price;

  let itemListaFrames = document.createElement('li'); 
  itemListaFrames.classList.add('elemento');

  itemListaFrames.appendChild(imagem);
  itemListaFrames.appendChild(nome);
  itemListaFrames.appendChild(valor);

  listaUlFrames.appendChild(itemListaFrames); 
}

const paintingsTitulo = document.createElement('h1')
paintingsTitulo.innerText = 'Paintings'

const figuresTitulo = document.createElement('h1')
figuresTitulo.innerText = 'Action Figures'

const divFigures = document.createElement('div')
divFigures.classList.add('div-secao-elementos')
divFigures.appendChild(figuresTitulo)
divFigures.appendChild(listaUlFigures)

const divFrames = document.createElement('div')
divFrames.classList.add('div-secao-elementos')
divFrames.appendChild(paintingsTitulo)
divFrames.appendChild(listaUlFrames)

secaoListFigure.appendChild(divFigures);
secaoListFrame.appendChild(divFrames);




