let num = document.querySelector('input#fnum');
let flista = document.querySelector('select#flista');
let res = document.querySelector('div#resultado');
let valores = [];


function isNumber(n){
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    }else{
        return false;
    }
}

//verifica se o valor informado (n) está na lista, se ele retornar (-1) é por que não foi encontrado
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true;
    }else{
        return false;
    }
}

function adicionar() {
    // a exclamação antes do inLista significa não (false)
    if (isNumber(num.value) && !inLista(num.value, valores)) {
        
        valores.push(Number(num.value)); //adiciona o número no array
        let item = document.createElement('option'); //cria um elemento option
        item.text = `Valor ${num.value} adicionado.`; //seta o valor do option criado        
        flista.appendChild(item); //adiciona o option no select (flista)
        res.innerHTML = ``;
        
    }else{
        window.alert(`Invalid number or it is already in the list.`);
    }
    num.value = ``;
    num.focus();
}

function finalizar(){
    if (valores.length == 0){
        window.alert(`Adicione valores antes de finalizar!`);
    }else{
        let total = valores.length; // quantos elementos tem no array
        let soma = 0;
        let media = 0;
        let maior = valores[0];
        let menor = valores[0];

        for (let pos in valores){
            soma += valores[pos];
            if (valores[pos] > maior){
                maior = valores[pos];
            }
            if (valores[pos] < menor){
                menor = valores[pos];
            }
        }

        media = Number(soma)/Number(total);
        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${total} valores cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        res.innerHTML += `<p>A soma dos valores informados é ${soma}.</p>`;
        res.innerHTML += `<p>A média dos valores informados é ${media}.</p>`;

    }
}