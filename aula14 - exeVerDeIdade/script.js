    var header = document.getElementsByTagName('header')[0];
    var footer = document.getElementsByTagName('footer')[0];
    var body = document.getElementsByTagName('body')[0];
    var caixa = document.getElementsByClassName('caixa')[0];
    var ano_nasc = document.getElementById('ano_nasc');
    var img = document.getElementsByClassName('imagem')[0];
    

    var msg = document.getElementById('msg');



function verificar() {
    var data = new Date();
    var ano_atual = data.getFullYear();

    var ano = Number(ano_nasc.value); // tratar números tem que estar dentro da função
    var genero = document.querySelector('input[name="genero"]:checked').value; // pegar radio buttons tem que estar dentro da função
    var idade = ano_atual - ano; 

    if (ano > ano_atual || ano == 0 || idade > 115 ) {
        window.alert(`ERRO! Verifique os dados e tente novamente.`) // validando dados
    } else 

    if (genero == 'masc') {
        if (idade <= 1) {
            body.style.background = "blue";
            body.style.color = "white";
            img.src = "img/bebe_masc.jfif";

            msg.innerHTML = `É um <strong>Bebê</strong> de <strong>${idade}</strong> ano`;
            
        }else if (idade > 1 && idade <= 7 ){
            body.style.background = "blue";
            body.style.color = "white";
            img.src = "img/crianca_masc.jfif";

            msg.innerHTML = `É um <strong>Menino</strong> de <strong>${idade}</strong> anos`;

        }else if (idade < 18 ){
            body.style.background = "blue";
            body.style.color = "white";
            img.src = "img/jovem_masc.jpg";

            msg.innerHTML = `É um <strong>Jovem</strong> de <strong>${idade}</strong> anos`;

        }else if (idade < 35){
            body.style.background = "blue";
            body.style.color = "white";
            img.src = "img/adulto_masc.jfif";

            msg.innerHTML = `É um <strong>Homem Adulto</strong> de <strong>${idade}</strong> anos`;

        }else if (idade <= 60) {
            body.style.background = "blue";
            body.style.color = "white";
            img.src = "img/coroa_masc.jpg";

            msg.innerHTML = `É um <strong>Coroa</strong> de <strong>${idade}</strong> anos`;
        }else {
            body.style.background = "blue";
            body.style.color = "white";
            img.src = "img/velho.jpg";

            msg.innerHTML = `É um <strong>Senhor</strong> de <strong>${idade}</strong> anos`;
        }
    }else if (genero == 'fem') {
        if (idade <= 1) {
            body.style.background = "pink";
            body.style.color = "white";
            img.src = "img/bebe_fem.jpg";

            msg.innerHTML = `É uma <strong>Bebê</strong> de <strong>${idade}</strong> ano`;
            
        }else if (idade > 1 && idade <= 7 ){
            body.style.background = "pink";
            body.style.color = "white";
            img.src = "img/crianca_fem.jpg";

            msg.innerHTML = `É uma <strong>Criança Feminina</strong> de <strong>${idade}</strong> anos`;
        }else if (idade < 18){
            body.style.background = "pink";
            body.style.color = "white";
            img.src = "img/jovem_fem.jpg";

            msg.innerHTML = `É uma <strong>Jovem </strong> de <strong>${idade}</strong> anos`;

        }else if (idade < 35){
            body.style.background = "pink";
            body.style.color = "white";
            img.src = "img/adulto_fem.jfif";

            msg.innerHTML = `É uma <strong>Mulher Adulta </strong> de <strong>${idade}</strong> anos`;
        }else if (idade <= 60) {
            body.style.background = "pink";
            body.style.color = "white";
            img.src = "img/coroa_fem.jpeg";

            msg.innerHTML = `É uma <strong>Mulher Coroa</strong> de <strong>${idade}</strong> anos`;
        }else {
            body.style.background = "pink";
            body.style.color = "white";
            img.src = "img/velha.jpg";

            msg.innerHTML = `É uma <strong>Senhora</strong> de <strong>${idade}</strong> anos`;
        }
    }
    
    
    
}
