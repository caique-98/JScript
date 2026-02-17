function enviar(){
    n = document.querySelector('#inome')
    n1 = String(n.value)
    i = document.querySelector('#idade')
    i1 = Number(i.value)
    s = document.querySelector('#isalar')
    s1 = Number(s.value)
    s1.toFixed(2).replace('.', ',')
    ss = parseFloat(s1)
    rs = document.getElementsByName('rads')
    selc = document.getElementById('isel')
    
    op = selc.value // Pegando a option pelo valor que o usuario seleciona no <select>.

    r = document.querySelector('div#res')
    genero = ''

    
    if(n.value.length == 0 || i.value.length == 0 || s.value.length == 0){
        window.alert('nao')
        
        
    } else if(n.value.length < 3 || n.value.length > 150){
        alert('?')


    } else if(i.value < 0 || i.value > 128){
        alert('??')

    } else if(s.value <= 0){
        alert('???')

    } else if(rs[0].checked){
        r.innerHTML = `Olá, ${n1}. Como consta na verificação, você é do sexo ${genero = 'masculino'}, atualmente ${op}. Com idade atual de ${i1} anos. E renda auto-declarada em R$${ss.toFixed(2)}.`


        r.style.textAlign = 'JUSTIFY'
        r.style.width = '50vw'
        r.style.marginTop = '20px'
        r.style.padding = '20px'
        r.style.font = '17pt Arial'
        r.style.background = 'gray'
        r.style.color = 'white'
    } else{
        r.innerHTML = `Olá, ${n1}. Como consta na verificação, você é do sexo ${genero = 'feminino'}, atualmente ${op}. Com idade atual de ${i1} anos. E renda auto-declarada em R$${ss.toFixed(2)}.`
        r.style.textAlign = 'JUSTIFY'
        r.style.width = '50vw'
        r.style.marginTop = '20px'
        r.style.padding = '20px'
        r.style.font = '17pt Arial'
        r.style.background = 'purple'
        r.style.color = 'white'
    }

    

    }
    
