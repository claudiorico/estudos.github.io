function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        var imagem = ''
        img.setAttribute('id', 'foto')
        img.setAttribute('width', '200px')

        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                imagem = 'menino_criança.png'
            } else if (idade<21){
                //Jovem
                imagem = 'homem_jovem.png'
            } else if (idade<50){
                //Homem
                imagem = 'homem.png'
            } else {
                //Idoso
                imagem = 'homem_idoso.png'
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                imagem = 'mulher_criança.png'
            } else if (idade<21){
                //Jovem
                imagem = 'mulher_jovem.png'
            } else if (idade<50){
                //Mulher
                imagem = 'mulher.png'
            } else {
                //Idoso
                imagem = 'mulher_idosa.png'
            }            
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        img.setAttribute('src', imagem)
        res.appendChild(img)
    }

}