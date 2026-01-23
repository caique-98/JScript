agora = new Date()
diaSem = agora.getDay()

/*
    dom = 0
    seg = 1
    ter = 2
    qua = 3
    qui = 4
    sex = 5
    sab = 6
*/

// Obrigatorio utilizar o "break".

switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terca')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('#ERRO Dia invalido!')
        break
}