let tasks = [
  {
    titulo: "Comprar comida para o gato",
    tipo: "Urgente"
  },
  {
    titulo: "Limpar o quarto",
    tipo: "urgente"
  },
  {
    titulo: "Consertar Computador",
    tipo: "normal"
  },
  {
    titulo: "Guardar dinheiro do lanche",
    tipo: "Urgente"
  },
  {
    titulo: "Beber água",
    tipo: "prioritario"
  }
];

function reloadList() {
  const ul = document.querySelector('ul')
  ul.innerHTML = ""

  tasks.sort((a, b) => {
    const prioridade = { 'urgente': 0, 'prioritario': 1, 'normal': 2 };
    return prioridade[a.tipo.toLowerCase()] - prioridade[b.tipo.toLowerCase()];
});

for(let i = 0; i < tasks.length; i++){
  const item = document.createElement('li')
  item.classList.add('item-lista')
  item.innerText = tasks[i].titulo

  const flag = document.createElement('span')
  flag.classList.add('flag-lista')

  const excluir = document.createElement('i')
  excluir.classList.add('fas', 'fa-trash')

  if(tasks[i].tipo.toLowerCase() == 'urgente'){
    flag.style.backgroundColor = 'red'
  }
  if(tasks[i].tipo.toLowerCase() == 'prioritario'){
    flag.style.backgroundColor = 'yellow'
  }
  if(tasks[i].tipo.toLowerCase() == 'normal'){
    flag.style.backgroundColor = 'green'
  }

  item.appendChild(flag)
  item.appendChild(excluir)
  ul.appendChild(item)

  }
}

reloadList()

function adicionaNovaTarefa() {

  const titulo = document.getElementById('titulo-texto').value
  const tipo = document.getElementById('tipo-tarefa').value

    let objeto = 
    {
      titulo: titulo,
      tipo: tipo
    }

    tasks.push(objeto)

    reloadList()

}

const adicionar = document.getElementById('botao')

adicionar.addEventListener('click', () => {
  adicionaNovaTarefa()
  reloadList()
})
