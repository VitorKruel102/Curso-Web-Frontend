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

// Função autoexecutável:
// IIFE:
(function(){
    log_teste(msg='Nome')

    var isValid = false

    function somar(args){
        let resultado = 0
        let x = 0

        // arguments = Retorna os argumentos passados em uma array;
        while (arguments[x]) {
            resultado += arguments[x]
            x++
        };
        console.log(resultado)
    }
    somar(10, 20, 10, 30)
})();

