let botao = document.getElementById('botao')
botao.addEventListener('click', somar)

function somar () {
    let tn1 = document.getElementById('text1')
    let tn2 = document.getElementById('text2')
    let res = document.getElementById('result')

    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    
    let soma = n1 + n2
    res.innerHTML = soma
    res.style.background = 'pink'
}

