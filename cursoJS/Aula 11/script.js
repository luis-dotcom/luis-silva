function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if(hora >=0 && hora < 12){
   //BOM DIA 
   img.src = 'manha.png'
   document.body.style.background = '#ffab2e'
}else if(hora >= 12 && hora <= 18){
    //BOA NOITE
    img.src = 'tardi.png'
    document.body.style.background = '#ffb812'
}else{
    //BOA NOITE
    img.src = 'noiti.png'
    document.body.style.background = '#201934'
}
}