function enviar(){
    n = document.querySelector('#inome')
    n1 = String(n.value)
    i = document.querySelector('#idade')
    i1 = Number(i.value)
    s = document.querySelector('#isalar')
    s1 = Number(s.value)
    rs = document.getElementsByName('rads')

    opts = [document.getElementsByTagName('option')[0]]
    opts[1] = document.getElementsByTagName('option')[1]
    opts[2] = document.getElementsByTagName('option')[2]
    opts.push(document.getElementsByTagName('option')[3])
    op = String(opts.value)

    b = document.getElementsByTagName('body')[0]
    b.style.background = 'gray'


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

    } else if (rs[0].checked && op.indexOf(0)){
        r.innerHTML = `Ola, ${n1}. Como consta na verificacao, voce e um ser humano do sexo ${genero = 'masculino'}, com ${i1} anos, com salario estimado em ${s1} reais. Por fim, atualmente ${op[0] = 'solteiro(a)'}.`
    } else{
        r.innerHTML = `Ola, ${n1}. Como consta na verificacao, voce e um ser humano do sexo ${genero = "feminino"}, com ${i1} anos, com salario estimado em ${s1} reais. Por fim, atualmente ${op.indexOf(0)}.`
        
    }
    r.style.textAlign = 'center'
    r.style.width = '50vw'
    r.style.marginTop = '20px'
    r.style.padding = '20px'
    r.style.font = '17pt Arial'

}