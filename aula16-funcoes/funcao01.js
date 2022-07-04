// Funções são ações exeutadas assim que são chamadas
// ou em decorrêcia de algum evento
//
// As funções tem como base os seguintes fatores:
// - Chamada
// - Conjunto de Parâmetros
// - Ação
// - Retorno
//
// Obs.: Algumas funções não têm parâmetros e/ou retornos
//

function parOuImpar(n) {
    if (n % 2 == 0) {
        return 'Par!'
    }else{
        return 'Ímpar!'
    }
} 


let res = parOuImpar(2); // pode ser console.log(parOuImpar(2)) direto;
console.log(res);