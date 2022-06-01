var agora = new Date()
var hora = agora.getHours();
var minuto = agora.getMinutes();

console.log(`\nSão exatamente ${hora} horas e ${minuto} minutos\n`);
if (hora < 12 && hora > 5) {
    console.log("Bom dia!\n");
}else if (hora > 18) {
    console.log("Boa noite!\n");
}else if (hora < 5) {
    console.log("Boa madrugada!\n");
}else {
    console.log("Boa Tarde!\n");
}