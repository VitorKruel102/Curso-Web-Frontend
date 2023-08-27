// Funcão Literal:
function somar(n1, n2) {
    // Corpo da funcao
    return n1 + n2;
}

console.log(somar(10, 20))

// Funcão Anônima:
let log_teste = function(msg){
    console.log('Testando: ', msg)
};

log_teste('Inicializar')