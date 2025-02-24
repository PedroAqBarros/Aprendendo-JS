//estrutura de repetição com teste lógico no início
var c = 1
while (c <= 6) {
    console.log(`Passo ${c}`)	
    c++
}
//estrutura de repetição com teste lógico no final
do{
    console.log(`Passo ${c} do, só executa uma vez antes de verificar c, pq c = 7`)
    c++
}while(c <= 6)
//estrutura de repetição com variável de controle
for (var c=1; c <= 6; c++){
    console.log(`Passo ${c} for`)
}