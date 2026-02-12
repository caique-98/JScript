function verificar(){
    num = document.getElementById('numer')
    r = document.getElementById('res')
    n = Number(num.value)
    if(num.value.length == 0 || num.value >= 11 || num.value < 0){
        window.alert('Valor invalido. Digite entre 1 e 10. Considerando 0.')
        r.innerHTML = `O valor que voce escolheu foi ${n = 0}.`
        
    } else{

        r.innerHTML = `O valor que voce escolheu foi ${n}.`
    }
}