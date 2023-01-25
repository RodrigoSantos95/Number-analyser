let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista (n, v) {
    if (v.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já adicionado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.push() == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
       res.innerHTML += `<p>Ao todo temos ${valores.length} números cadastrados<p>`
       let min = Math.min(...valores)
       let max = Math.max(...valores)
       res.innerHTML += `<p>O menor valor cadastrado foi ${min}<p>`
       res.innerHTML += `<p>O maior valor cadastrado foi ${max}<p>`
       let soma = 0
       let media = 0
       for (let c=0; c < valores.length; c++) {
        soma += valores[c]
        media = soma/valores.length
       }
       res.innerHTML += `<p>Somando todos os valores, temos ${soma}<p>`
       res.innerHTML += `<p>A média dos valores é ${media}`
    }
}