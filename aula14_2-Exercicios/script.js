/* Usando Textarea
function calcular() {
    var numero = document.getElementById('nbr_numero');
    var tabuada = document.getElementById('txt_resultado');

    tabuada.innerHTML = '';

    if (numero.value.length == 0) {
        window.alert(`Informe um número`);
    } else {

        numero = Number(numero.value);

        contador = Number(0);

        for (contador; contador <= 10; contador++) {
            var resultado = Number(numero * contador);
            tabuada.innerHTML += `${numero} x ${contador} = ${resultado}\n`;
        }
    }

}

*/

function calcular() {
    var numero = document.getElementById('nbr_numero');
    var tabuada = document.getElementById('txt_resultado');

    tabuada.innerHTML = '';

    if (numero.value.length == 0) {
        window.alert(`Informe um número`);
    } else {

        numero = Number(numero.value);

        contador = Number(0);

        for (contador; contador <= 10; contador++) {
            var resultado = Number(numero * contador);
            var item = document.createElement('option');
            item.text = `${numero} x ${contador} = ${resultado}\n`;
            item.value = `tab${contador}` //acrescentando um valor aos options (importante para o php)
            tabuada.appendChild(item);
            
        }
    }

}