var idade;

idade = 8;

var estudante = false;

// if (idade >=18){
//     console.log("Pode dirigir")
// }else{
//     console.log("Não pode dirigir")
// }

// if(idade < 12){

//     console.log("Criança")

// }else if(idade >= 12 && idade <18){

//     console.log("Adolescente")

// }else{

//     console.log("Adulto")
//     console.log("Pode dirigir")

// }
// if(idade < 12){
//     console.log("Gratuito")
// }
// else if(idade >= 12 && idade <= 21 && estudante==true){
//     console.log("Meia entrada")
// }else{
//     console.log("Inteira")
// }

if(idade <= 13){

    if(estudante==true){
        console.log("Ensino Fundamental")
    }else{
        console.log("Pré escola")
    }
}else{
    if(estudante==true){
        console.log("Ensino Médio")
    }
}