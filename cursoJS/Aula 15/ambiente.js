var num = [5,8,0,9]
num[4] = 4 //adicionar 
num.push(1) // adicionar no fim
console.log(num.length) // ver o tamanho
num.sort() // organizar em ordem crescente
console.log(num)

/*
for(var i = 0; i< num.length; i++){
    console.log(num[i])
}
*/
/*
for(var i in num){
    console.log(num[i])
}
*/

var pos = num.indexOf(8)
console.log(pos)