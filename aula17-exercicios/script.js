function adicionar() {
    let num = document.getElementById('numero');
    let conjunto = [];
    if (num.value.length === 0) { 
        window.alert(`Digite um valor de 1 a 100`);
    } else if (Number(num.value) > 100 || Number(num.value) < 0) {
        window.alert(`Número inválido, informe um valor de 1 a 100`);
    } else if (conjunto.valueOf(num) != -1 ) {
        window.alert(`O número informado já se encontra adicionado! Informe outro valor.`);

    } else {
        conjunto.push(num);
        let lista = document.getElementById('num_lista');
        let item = document.createElement(option);
        item.text = `Valor ${num} adicionado`;
        lista.appendChild(item);
    }

}

