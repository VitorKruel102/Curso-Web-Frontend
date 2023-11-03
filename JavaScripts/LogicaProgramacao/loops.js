let indice = 1;

// Se for maior que 1000, não irá rodar;
while (indice <= 1000) {
    document.write(numero);
    indice++;
}

// Vai rodar pelo menos uma vez;
do {
    document.write(
        'Vai rodar pelo menos uma vez' +
        'mesmo que o indice seja maior' +
        'que 1000'
    );
} while (indice <= 1000)


const array = ['1', '2', '3'] ;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    document.write(element)
}