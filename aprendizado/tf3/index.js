function enviar(){
    n = document.querySelector('#inome')
    n1 = String(n.value)
    i = document.querySelector('#idade')
    i1 = Number(i.value)
    s = document.querySelector('#isalar')
    s1 = Number(s.value)
    rs = document.getElementsByName('rads')
    slct = document.querySelector('isel')

    r = document.querySelector('div#res')


    
    if(n.value.length == 0 || i.value.length == 0 || s.value.length == 0){
        window.alert('nao')
        genero = ''
        
    } else if(n.value.length < 3 || n.value.length > 150){
        alert('?')


    } else if(i.value < 0 || i.value > 150){
        alert('??')

    } else if(s.value <= 0){
        alert('???')

    } else if(rs[0] == rs[0].checked){
        alert('????')
        
    } else if (rs[0].checked){
        r.innerHTML = `Ola, ${n1}. Como consta na verificacao, voce e um ser humano do sexo ${genero = 'masculino'}, com ${i1} anos, com salario estimado em ${s1} reais.`
    } else{
        r.innerHTML = `Ola, ${n1}. Como consta na verificacao, voce e um ser humano do sexo ${genero = "feminino"}, com ${i1} anos, com salario estimado em ${s1} reais. Por fim, atualmente ${slct}.`
        
    }
    r.style.textAlign = 'center'
    r.style.width = '50vw'
    r.style.marginTop = '20px'
    r.style.padding = '20px'
    r.style.font = '17pt Arial'

}