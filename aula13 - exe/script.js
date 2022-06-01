//Pra uma função ser carregada automaticamente add no body a propriedade onload="função()"

var saudacao = document.getElementsByClassName('saudacao')[0];
var horas = document.getElementsByClassName('horas')[0];
var img = document.getElementsByClassName('imagem')[0];

var corpo = document.querySelector('body');
var caixa = document.querySelector('main>div');
var header = document.querySelector('header');
var footer = document.querySelector('footer');

var horario = new Date();
var hora = horario.getHours();
var minutos = horario.getMinutes();

//hora = 1;

if (hora < 12 && hora >= 5) {
    saudacao.innerHTML = `Bom Dia!`;
    horas.innerHTML = `São ${hora} horas e ${minutos} minutos`;

    header.style.background = 'rgb(215, 133, 40)';
    footer.style.background = 'rgb(215, 133, 40)';
    caixa.style.background = 'rgb(215, 133, 40)';
    img.src = "img/dia.jpg"

}else if (hora >= 12 && hora < 18) {
    saudacao.innerHTML = `Boa Tarde!`;
    horas.innerHTML = `São ${hora} horas e ${minutos} minutos`;

    header.style.background = 'rgb(0, 170, 255)';
    footer.style.background = 'rgb(0, 170, 255)';
    caixa.style.background = 'rgb(0, 170, 255)';
    img.src = "img/tarde.jpg"

}else if(hora >= 18) {
    saudacao.innerHTML = `Boa Noite!`;
    horas.innerHTML = `São ${hora} horas e ${minutos} minutos`;

    header.style.background = 'rgb(17, 17, 112)';
    footer.style.background = 'rgb(17, 17, 112)';
    caixa.style.background = 'rgb(17, 17, 112)';
    img.src = "img/noite.jpg";
    corpo.style.color = 'white';
}else if (hora >= 0) {
    saudacao.innerHTML = `Boa Madrugada!`;
    horas.innerHTML = `São ${hora} horas e ${minutos} minutos`;

    header.style.background = 'black';
    footer.style.background = 'black';
    caixa.style.background = 'black';
    img.src = "img/madrugada.jpg";
    corpo.style.color = 'yellow';
}else {
    saudacao.innerHTML = `[ERRO]!`;
    horas.innerHTML = `Hora Inválida`;
}

