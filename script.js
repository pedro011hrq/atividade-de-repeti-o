// estruturas condicionais
//estrutura de decisão

// usando o IF
var jogador1 = 0;
var jogador2 = 3;
var placar;

if (jogador1 = -1) {
    if (jogador1 > 0) {
          console.log('jogador 1 marcou ponto');
    } else {
          console.log('jogador 2 marcou ponto');
    }
} else {
    console.log('ninguem marcou ponto');
}

// aninhado if's
// if ternário
jogador1 != -1 && jogador2 !=-1 ? 
console.log('os jogadores são válidos') :
console.log('os jogadores não são validos');

if(jogador1 > 0 && jogador1 == 0){
    console.log(' o jogador 1 marcou um ponto');
    placar = jogador1 > jogador2;
}
// usando o else if
else if (jogador2 > 0 && jogador1 == 0){
    console.log('o jogador 2 marcou ponto');
    placar = jogador2 > jogador1;
}
// usando o else 
else {
    console.log('ninguem marcou ponto');
}

var vaxco = 0;
var parmeiras = 0;
var placar;

//usando switch case
switch (placar) {
    case placar = vaxco > parmeiras:
        console.log('vaxco ganhou')
        
        break;
    case placar = parmeiras > vaxco:
        console.log('parmeiras ganhou')
        break;
    default:
        console.log('Ninguem ganha, que pena...')
        break;
}

// estrutura de repetição
let array = ['valor1' , 'valor2' , 'valor3' , 'valor4']
let object = {propriedade1: 'valor1', propriedade2: 'valor2'};
// for - executa até que seja false
for (let i = 0; i <= array.length; i++) {
    console.log(i);
    
}
// for/in - executa repetição a partir de uma propriedade
//com array
for (i in array){
    console.log(i);
    
    
}
// com object 
for (i in object){
    console.log(i);
}
// while - executa enquanto for verdadeiro
var a = 0;
while (a < 10) {
    a++;
    console.log(a);
}
// do - execute até que seja falsa
console.log('===================')
var b = 0;
do {
    b++
    console.log(b);
} while (b < 10);
