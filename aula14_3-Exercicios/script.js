

function contar() {


    var inicio = document.getElementById('inicio');

    var fim = document.getElementById('fim');

    var passo = document.getElementById('passo');

    var titulo_res = document.getElementById('titulo_resultado');

    var resultado = document.getElementById('resultado');

    resultado.innerHTML = '';

    inicio = Number(inicio.value);
    fim = Number(fim.value);
    passo = Number(passo.value);

    if (inicio == 0 || fim == 0 ) {
        window.alert('[ERRO] Faltam dados!')
    } else if (passo <= 0) {
        window.alert('Passo Inválido! Passo tem que ser maior ou igual a 1')
        passo.innerHTML = '';
        passo = 1;

    } else {

        titulo_res.innerHTML = `Contando:`;
        // resultado.innerHTML = `OI ${inicio}, ${fim}, ${passo}`;

        if (inicio < fim) {
            for (inicio; inicio <= fim; inicio = inicio + passo) {
                //emoji no js \u{referência} obs.: tem que estar entre crases ``

                resultado.innerHTML += `${inicio} → `;

            }

        } else {
            for (inicio; inicio >= fim; inicio = inicio - passo) {

                resultado.innerHTML += `${inicio} → `;

            }
        }
        resultado.innerHTML += ' FIM ';
    }
}


//1 → 3 → 5 → 7 → 9