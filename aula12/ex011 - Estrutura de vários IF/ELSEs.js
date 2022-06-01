var idade = 15;
if (idade < 16) {
    console.log("Não pode Votar")
}else if (idade > 15 && idade < 18){
    console.log("Voto Facultativo")
}else if (idade >= 18 && idade < 65){
    console.log("Voto Obrigatório")
}else {
    console.log("Voto Facultativo")
}

// Estrutura de Multiplas condições:
// if (condição) {bloco de ação}
// else if (condição) {bloco de ação}
// else {bloco de ação}