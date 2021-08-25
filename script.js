function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','img/bebehomem.png')
            }else if (idade >= 10 && idade < 21){
                // Jovem
                img.setAttribute('src','img/jovemhomem.png')
            }else if (idade < 50) {
                // Adulto
                img.setAttribute('src','img/homem.png')
            }else {
                //Idoso
                img.setAttribute('src','img/idosohomem.png')
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','img/bebemulher.png')
            }else if (idade >= 10 && idade < 21){
                // Jovem
                img.setAttribute('src','img/jovemmulher.png')
            }else if (idade < 50) {
                // Adulto
                img.setAttribute('src','img/mulher.png')
            }else {
                //Idoso
                img.setAttribute('src','img/idosomulher.png')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
        img.style.paddingTop = '10px'
    }


}