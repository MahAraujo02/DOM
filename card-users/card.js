const users = [
    {
     name: 'Madalena',
     profile: 'Admin',
     sector: 'Administration'
   },
   {
     name: 'Rafael',
     profile: 'user',
     sector: 'Finance'
   },  
   {
     name: 'Baltazar',
     profile: 'user',
     sector: 'Reception'
   },  
   {
     name: 'Carmen',
     profile: 'Admin',
     sector: 'Business'
   }    
 ]

 //percorrer a lista e criar o card
 function criarCard(){
    const listaCard = document.querySelector('ul')
    listaCard.setAttribute('id', 'lista')

    for(let i = 0; i < users.length; i++){
        const card = document.createElement('li')
        card.classList.add('card')

        const name = document.createElement('span')
        name.innerText = users[i].name

        const sector = document.createElement('span')
        sector.innerText = users[i].sector

        const profile = document.createElement('span')
        profile.innerText = users[i].profile

        if(users[i].profile == 'Admin' && users[i].sector == 'Administration'){
            card.setAttribute('id','important')
            
        }
        if(users[i].profile == 'Admin'){
          card.classList.add('admin')
      }

      if(users[i].profile == 'user'){
        card.classList.add('user')
    }

        card.appendChild(name)
        card.appendChild(profile)
        card.appendChild(sector)
        listaCard.appendChild(card)
    }
 }

 criarCard()
