/*
console.log("tudo")
console.log("tudo")
console.log("tudo")
console.log("tudo")
console.log("tudo")
console.log("tudo")
*/
/*
var c =1
while(c <= 6){
    console.log(`Passo ${c}`)
    c++
}
*/
/*
var c =1
do{
    console.log(`Passo ${c}`)
    c++
}while(c <= 7)
*/
/*
console.log('Vai...')
for(c = 1; c<=5; c++){
    console.log(c)
}
console.log('FIM...')
*/

function contar(){
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('resultado')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel Contar!!'
        //window.alert('[ERRO] Faltam dados!')    
    }else {
        res.innerHTML = 'Contando: '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <=0){
            window.alert('Passo inválido!!')
            p = 1
        }
        if(i<f){//CONTAGEM CRESCENTE
            for(var c=i;c<=f;c+=p){
                res.innerHTML += `${c} -- `
            }
        }else{//CONTAGEM DECRESCENTE
            for(var c=i;c>=f;c-=p)
                res.innerHTML += ` ${c}`
            }    
    }  
}