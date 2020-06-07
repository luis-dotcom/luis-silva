function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e digite novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            if(idade>=0 && idade<=3){
                //bebe
                img.setAttribute('src','bebe-m.png')
                document.body.style.background = 'blue'
                genero = 'Bebe'
            }else if(idade<=12){
                //criança
                img.setAttribute('src','criança-m.png')
                document.body.style.background = 'blue'
                genero = 'Criança'
            }else if(idade<=17){
                //adolecente
                img.setAttribute('src','jovem-m.png')
                document.body.style.background = 'blue'
                genero = 'Jovem'
            }else if(idade<=50){
                //adulto
                img.setAttribute('src','adulto-m.png')
                document.body.style.background = 'blue'
                genero = 'Adulto'
            }else{
                //idoso
                img.setAttribute('src','idoso-m.png')
                document.body.style.background = 'blue'
                genero = 'Idoso'
            }    
        }else if(fsex[1].checked){
            if(idade>=0 && idade<=3){
                //bebe
                img.setAttribute('src','bebe-f.png')
                document.body.style.background = 'pink'
                genero = 'Bebe'
            }else if(idade<=12){
                //criança
                img.setAttribute('src','criança-f.png')
                document.body.style.background = 'pink'
                genero = 'Criança'
            }else if(idade<=17){
                //adolecente
                img.setAttribute('src','jovem-f.png')
                document.body.style.background = 'pink'
                genero = 'Jovem'
            }else if(idade<=50){
                //adulto
                img.setAttribute('src','adulto-f.png')
                document.body.style.background = 'pink'
                genero = 'Adulto'
            }else{
                //idoso
                img.setAttribute('src','idoso-f.png')
                document.body.style.background = 'pink'
                genero = 'Idosa'
            }    
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}