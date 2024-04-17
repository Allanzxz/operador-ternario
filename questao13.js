/*
Questão 13: Escreva um código JavaScript utilizando o operador ternário para 
determinar se uma pessoa é elegível para a aposentadoria. A variável idade 
contém a idade da pessoa e a variável sexo indica o sexo ( 'masculino' ou 
'feminino'). Atribua o resultado à variável elegivel.
*/
let idade=20;
let estado = elegivel = (idade >= 60 && sexo === 'feminino') || (idade >= 65 && sexo === 'masculino') ? 'Elegível para aposentadoria' : 'Não elegível para aposentadoria';
console.log(estado);