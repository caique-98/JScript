function carregar(){
    corpo = document.getElementsByTagName('body')[0]
    caixa = document.getElementsByTagName('div')[0]
    msg = document.querySelector('div#msg')
    img = document.querySelector('img#hora')
    data = new Date()
    hora = data.getHours()
    msg.style.color = 'white'

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora <= 5){
        img.src = 'noite.avif'
        
    } else if (hora <= 12){
        img.src = 'manha.jpg'
        corpo.style.backgroundImage = 'linear-gradient(to bottom, rgb(77, 189, 233), rgb(214, 147, 70), rgb(2, 17, 4))'
        caixa.style.background = 'rgb(161, 143, 108)'
    } else if (hora <= 18){
        img.src = 'tarde.avif'
        corpo.style.backgroundImage = 'linear-gradient(to bottom, rgb(223, 133, 59), rgb(41, 26, 7), rgb(78, 44, 6))'
    } else {
        img.src = 'noite.avif'
        corpo.style.backgroundImage = 'linear-gradient(to bottom, rgb(89, 102, 107), rgb(20, 42, 48), rgb(1, 10, 2))'
        caixa.style.background = 'rgb(18, 29, 36)'
    }


}
