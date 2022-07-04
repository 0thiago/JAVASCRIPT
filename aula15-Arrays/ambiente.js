// vetor = [valor0, valor¹, valor²]
//0, ¹ e ²  são os indíces

let num = [5, 8, 2, 9, 3];

num[5] = 6; //insere o valor '6' na posição '5' do array

num.push(4); //insere um valor na última posição do array

num.length; //retorna o número de índices (quantos valores) o array tem
console.log(`O array tem ${num.length} valores dentro dele`);

console.log(`Os valores são: ${num}`);

num.sort(); //organiza os valores dentro do array em ordem crescente
console.log(`Valores organizados em ordem crescente: ${num.sort()}`);

console.log(`O primeiro valor do array organizado é: ${num[0]}`);

//exibindo todos os valores do array - início "PERCURSO"

for (let pos=0; pos<num.length; pos++) {
    console.log(`\nA posição ${pos} tem o valor ${num[pos]}`);
}
//exibindo todos os valores do array - fim

//=======-=-=-=--=-=-========-=-=-=--=-=-========-=-=-=--=-=-========-=-=-//

//exibindo todos os valores do array - Let x In y - Início:

for (let pos in num)//para cada POS em NUM faça:
 {
    console.log(`\nLetPosInNum: A posição ${pos} tem o valor ${num[pos]}`);
 }
 //exibindo todos os valores do array - Let x In y - Fim

num.indexOf(6); //Pesquisa no array se existe o valor 6 e exibe qual a posição dele

let pos = num.indexOf(6);
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
}else {
console.log(`\nO valor 6 existe e está na posição ${num.indexOf(6)}\n`);
}