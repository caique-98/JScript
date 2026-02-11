num = [5, 9, 1] // Array = Vetor.

num[3] = 2 // Poe um elemento numa ordem especifica do array, nesse caso aqui, "[3]".
num.push(8) // Poe um elemento no final do array.


console.log(`Nosso array em ordem crescente `) // Deixa a ordem do array em crescente. 5, 8, 4 -> 4, 5, 8.

console.log(`A quantia de array's sao: ${num.length}.`) // Conta a quantia de elementos no array.

console.log(`Nosso array e: ${num}.`)

console.log(`Nosso primeiro elemento e ${num[0]}.`) // A ordem comeca a partir de 0, e nao de 1!

/*

for(pos=0; pos<num.length; pos++){ //   Length e o comprimento / tamanho do vetor/array. Le se: pos e igual a 0, enquanto pos for menor que o comprimento, ele ira incrementar o valor e receber.
    console.log(`A posicao ${pos} tem o valor ${num[pos]}.`)
} 
*/

for(pos in num){ // Le se: para cada POS em NUM, me de console.log().
    console.log(`A posicao ${pos} tem o valor ${num[pos]}.`)

}

console.log(`${num.indexOf(8)}`) // Da como se estivesse na ultima posicao (4), pois a contagem e a partir de 0, e nao de 1.
console.log(`${num.indexOf(7)}`) // Valor nao encontrado.