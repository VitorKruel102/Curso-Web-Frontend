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

