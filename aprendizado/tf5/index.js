function calc(){
    pas = document.getElementById('paisa')
    pa = Number(pas.value)
    txa = document.getElementById('taxa1')
    t1 = Number(txa.value)
    pbs = document.getElementById('paisb')
    pb = Number(pbs.value)
    txb = document.getElementById('taxa2')
    t2 = Number(txb.value)
    ano = 1

    r = document.getElementById('res')
    if(t1 >= 2 || t1 <= 0.9 || t1 >= 2 || t1 <= 0.9){
        alert('nao')
    } else{
    for(c = pa; c <= pb; c *= t1){
        pb *= t2
        ano++
    }
    r.innerHTML = `No ano ${ano}. O pais A (taxa: ${t1}) com populacao de ${c.toFixed(2)}, ultrapassa o pais B (taxa: ${t2}) com populacao de ${pb.toFixed(2)}.`  
    r.style.textAlign = 'justify'
    r.style.width = '30vh'
    r.style.margin = '2vh'
    r.style.padding = '20px'
    r.style.background = 'gray'
    r.style.color = 'white'
}
}