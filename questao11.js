/*
Questão 11: Escreva um código JavaScript utilizando o operador ternário para 
determinar se uma pessoa é um bebê, criança, adolescente, adulto ou idoso. A 
variável idade contém a idade da pessoa. Atribua o resultado à variável 
categoria. 
*/
let idade=20;
let categoria = idade < 2 ? 'Bebê' : (idade < 13 ? 'Criança' : (idade < 18 ? 'Adolescente' : (idade < 65 ? 'Adulto' : 'Idoso')));
console.log(categoria);