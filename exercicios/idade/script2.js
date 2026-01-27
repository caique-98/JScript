function verificar(){
    data = new Date()
    ano = data.getFullYear()

    fano = document.getElementById('txtano')
    res = document.querySelector('div#res')
    masc = document.querySelector('input#mas')
    femi = document.querySelector('input#fem')

    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Insira um valor valido!')
    } else {
        fsex = document.getElementsByName('radsex')
        idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada foi de: ${idade} anos.`
        genero = ''
        if (fsex[0].checked){
            genero = 'masculino'
        } else {
            genero = 'feminino'
        }
        res.innerHTML = `Detectamos o genero ${genero} com ${idade} anos.`
    }
}