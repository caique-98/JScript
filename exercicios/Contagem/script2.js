function calcular(){
    var ini = document.getElementById('iinicio')
    var fim = document.getElementById('ifim')
    var pass = document.getElementById('ipasso')
    var res = document.getElementById('res')

    

    if(ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){ // Obriga o usuario a escolher um valor.
        window.alert('valor invalido!')
    } else{
        res.innerHTML = `Contando: `

        var i = Number(ini.value) // Necessario para transformar em numero, mesmo ja sendo um numero.
        var f = Number(fim.value)
        var p = Number(pass.value)
        if(p <= 0){ // O site ira travar sem esta porra!
            window.alert('caralhoooo. Considerarei passo = 1.')
            p = 1
        }
        if(i < f){ // Se inicio for menor que fim.
            for(var c = i; c <= f; c += p){ // Le se: (c) é igual a (i). Se (c) for menor ou igual a (f). (c) Ira somar e receber o valor de (p).
                res.innerHTML += `${c} \u{1F449}`
            }
        } else{ // Se fim for menor que inicio.
            for(var c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}` // Emoji mao com dedo.
            }
        }
        res.innerHTML += `\u{1F3C1}` // Bandeira final
    }
    
    
    

}