/*
Questão 4: Escreva um código JavaScript utilizando o operador ternário para 
determinar se um número é positivo, negativo ou zero. A variável numero 
contém o valor a ser verificado. Atribua o resultado à variável resultado.
*/
let numero=4;
let estado = numero > 0 ? "Positivo" : (numero < 0 ? "Negativo" : "Zero");
console.log(estado);