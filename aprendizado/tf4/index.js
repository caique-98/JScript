a = 80000 // pop. de A
b = 200000 // pop. de B
ta = 1.030 // taxa anual
ano = 1 // ano contabilizado
x = 1.015

for(c = a; c <= b; c *= ta){
    b *= x
    console.log(`O valor do pais A (${c}). Valor pais B (${b}). Ano ${ano}`)
    ano++
}
console.log(`Foram necessarios ${ano} anos para que o pais A ultrapassasse o pais B.`)
console.log(`O valor de reviravolta: O pais A (${c}), ultrapassa o valor de pais B (${b}), no ano ${ano}.`)
