const n1 = 2;
const n2 = 2;

/*
    '2' == 2 --> true
     2  == 2 --> true
    '2' === 2 --> false
     2  === 2 --> true
*/

if (n1 == n2) { // Compara apenas valores
    console.log('True')
} else {
    console.log('False')
}

if (n1 === n2) { // Compara valores e tipos
    console.log('True')
} else {
    console.log('False')
}


/*
    '2' != 2 --> false
     2  != 2 --> false
    '2' !== 2 --> true
     2  !== 2 --> false
*/
if (n1 != n2) { // Compara apenas valores
    console.log('True')
} else {
    console.log('False')
}

if (n1 !== n2) { // Compara valores e tipos
    console.log('True')
} else {
    console.log('False')
}

