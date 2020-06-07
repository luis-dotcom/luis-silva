var num = document.getElementById('fnum')
var lista = document.getElementById('valores')
var res = document.getElementById('res')
var valores = []


function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function add(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
    }else{
        window.alert("Valor inválido")
    }
    num.value = ''
    num.focus()
}

function fim(){
    if(valores.length == 0){
        window.alert('Adicione valores')
    }else{
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for(var pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma/tot
        res.innerHTML = ""
        res.innerHTML += `<p>Quantidade de números cadastrados = ${tot}<p>`
        res.innerHTML += `<p>O maior valor = ${maior}<p>`
        res.innerHTML += `<p>O menor valor = ${menor}<p>`
        res.innerHTML += `<p>Soma dos valores = ${soma}<p>`
        res.innerHTML += `<p>Média dos valores = ${media}<p>`
        
    }
}