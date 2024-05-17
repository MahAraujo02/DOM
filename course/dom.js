const log = document.createElement('img')
log.src = 'assets/886ebca1371473a2d7903732abfb951a.jpg'

const titulo = document.createElement('p')
titulo.innerText = 'Vida'

const strong = document.createElement('strong')
strong.innerText = 'Fruta'

const frutas = document.createElement('ul')
const container = document.createElement('div')

const telaBody = document.createElement('div')

let itens = ['Banana','Morango','Goiaba','Pessego']

for ( let i = 0; i < itens.length; i++){
    let li = document.createElement('li')
    li.innerText = itens[i]
    frutas.appendChild(li)
}

titulo.appendChild(strong)


container.appendChild(log)
container.appendChild(titulo)
container.appendChild(frutas)
telaBody.appendChild(container)
document.body.appendChild(telaBody)


log.classList.add('img-log')
titulo.classList.add('titulo_frutas')
container.classList.add('tela')
frutas.classList.add('lista')
telaBody.classList.add('body_tela')


