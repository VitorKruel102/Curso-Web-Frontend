// Mini Calculadora
function calcular(simbolo, primeiro_numero, outro_numero) {
    let numero_calculado = null
    switch (simbolo){
        case '+':
            numero_calculado = primeiro_numero + outro_numero;
            break;
        case '-':
            numero_calculado = primeiro_numero - outro_numero;
            break;
        case '*':
            numero_calculado = primeiro_numero * outro_numero;
            break;
        case '/':
            numero_calculado = primeiro_numero / outro_numero;
    }
    return numero_calculado
}