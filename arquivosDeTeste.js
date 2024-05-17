const arr = [
    { price: 1, nome: 'João' },
    { price: 2, nome: 'Maria' },
    { price: 3, nome: 'José' },
    { price: 4, nome: 'Pedro' }
]

// Variável para armazenar o total
let total = 0;

for(let index = 0; index < arr.length; index++) {
    const currentElement = document.createElement('li')
    const price = document.createElement('p')
    const lista = document.getElementsByTagName('ul')[0]

    const addButton = document.createElement('button')
    addButton.innerText = 'Add'
    addButton.setAttribute('class', 'add')

    const removeButton = document.createElement('button')
    removeButton.innerText = 'Remove'

    price.innerText = arr[index].price
    currentElement.appendChild(price)
    currentElement.appendChild(addButton)
    lista.appendChild(currentElement)

    addButton.addEventListener('click', () => {
       const cartItem = document.getElementsByClassName('carrinho')[0]

       // Adiciona o preço do item ao total
       total += arr[index].price;

       // Atualiza o elemento de exibição do total
       const priceElement = document.querySelector('.total');
       priceElement.innerText = total;

        currentElement.removeChild(addButton);
        currentElement.appendChild(removeButton);

       cartItem.appendChild(currentElement);
       cartItem.appendChild(priceElement);
    });

    removeButton.addEventListener('click', () => {
       const cartItem = document.getElementsByClassName('carrinho')[0]

       // Remove o preço do item ao total
       total -= arr[index].price;

       // Atualiza o elemento de exibição do total
       const priceElement = document.querySelector('.total');
       priceElement.innerText = total;
 
       if (cartItem.contains(currentElement)) {
           cartItem.removeChild(currentElement);
       }

       cartItem.appendChild(priceElement);
    });
}

