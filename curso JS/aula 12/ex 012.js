var agora = new Date() 
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12){
    console.log(`boa dia`)
}else if (hora <= 18){
    console.log('bom tarde')
}else{
    console.log('bom noite')
}