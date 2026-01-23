agora = new Date()
hora = agora.getHours()
console.log(`Agora sao ${hora} horas.`)
if (hora <= 5){
    console.log('Boa madru')
} else if (hora <= 12){
    console.log('Bom dia.')
} else if (hora <= 17){
    console.log('Boa tarde.')
} else if(hora >= 18 && hora <= 23){ // Utilize "=" para ser o mais especifico e logico possivel. Se possivel, utilize o "switch(){}", sem esquecer do "break".
    console.log('Boa noite')
} else{
    console.log('O limite e de 23h59m!')
}
 