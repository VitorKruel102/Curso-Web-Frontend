// AULA 360 - INTRODUÇÃO - OPERADORES DE COMPARAÇÃO
const numberOne = 5;
const numberTwo = 9;

if (numberOne == numberTwo){console.log('Igual');}
if (numberOne === numberTwo){console.log('Valor e Type Iguais');}
if (numberOne != numberTwo){console.log('Diferente');}
if (numberOne !== numberTwo){console.log('Valor e Type Diferetes');}
if (numberOne > numberTwo){console.log('Maior que');}
if (numberOne < numberTwo){console.log('Menor que');}
if (numberOne <= numberTwo){console.log('Menor ou igual que');}
if (numberOne >= numberTwo){console.log('Maior ou igual que');}

// AULA 362 - OPERADORES LÓGICOS
const result = (numberOne == numberTwo) // Return boolean

if ((numberOne > numberTwo) && (numberOne >= numberTwo)){console.log('E');}
if ((numberOne > numberTwo) || (numberOne >= numberTwo)){console.log('Ou');}
if (!(numberOne > numberTwo)){console.log('! Negação');}

// AULA 366 - CONDICIONAIS
if (numberOne > numberTwo){
    console.log('NumberOne Maior');
} else if (numberOne < numberTwo){
    console.log('NumberOne Menor');
} else {
    console.log('São Iguais');
}

// AULA 373 - SWITCH
const key = '1';

switch (key) {
    case '1':
        console.log('Domingo');
        break;
    case '2':
        console.log('Segunda-Feira');
        break;

    default:
        break;
}

// AULA 375 - WHILE
let index = 0;
while (index < 10){
    console.log('OLA');
    index++;
}

do {
    console.log('EXECUTA PELO MENOS UMA VEZ')
    index++;
} while (index > 10)

// AULA 378 - FOR
const LISTA = [1, 2, 3, 4, 5]
for (let i=0; i < LISTA.length; i++) {
    console.log(LISTA[i]);
}