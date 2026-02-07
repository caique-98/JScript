function calcular(){
    ini = document.querySelector('input#inicio')
    Number(ini.value)
    fim = document.querySelector('input#fim')
    Number(fim.value)
    pass = document.querySelector('input#passo')
    Number(pass.value)

    res = document.querySelector('div#res')

    // A contagem deve comecar pela variavel inicio.
    // A contagem deve ir da variavel inicio ate a variavel fim.
    // A contagem deve ser feita conforme a variavel passo. Ex: se inicio for 1, fim for 10, e passo for 1. Entao... 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Agora se passo for 2: 1, 3, 5, 7, 9, 10.

    
    
    for(cont >= ini; cont <= fim; cont += pass){
        res.innerText  = 'oi'
    }

}