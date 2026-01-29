function verificar(){
    data = new Date()
    ano = data.getFullYear()

    fano = document.getElementById('txtano')
    res = document.querySelector('div#res')
    
    
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Insira um valor valido!')
    } else {
        
        
        fsex = document.getElementsByName('radsex')
        idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada foi de: ${idade} anos. <br>`
        res.style.textAlign = 'center'
        
        genero = ''
        img = document.createElement('img') // Os elementos img.src ='' nao funcionou aqui por algum motivo...   Entao crie um elemento img e atribua uma src a partir do JavaScript.
        img.setAttribute('id', 'foto') // O equivalente a id="foto"
        if (fsex[0].checked){
            genero = 'masculino'
            img.style.marginTop = '20px'
            if (idade >= 0 && idade < 14){
                img.setAttribute('src', 'crianca-m.webp')
                
            } else if (idade < 30) {
                img.setAttribute('src', 'jovem-m.webp')
            } else if (idade < 60){
                img.setAttribute('src', 'adulto-m.avif')
            } else{
                img.setAttribute('src', 'velho-m.jpg')
            }
        } else {
            genero = 'feminino'
            if (idade >= 0 && idade < 14){
                img.setAttribute('src', 'crianca-f.jpg')
            } else if (idade < 30) {
                img.setAttribute('src', 'jovem-f.webp')
            } else if (idade < 60){
                img.setAttribute('src', 'adulta-f.webp')
            } else{
                img.setAttribute('src', 'velha-f.jpg')
            }
        }
        
        res.appendChild(img)
    }
}