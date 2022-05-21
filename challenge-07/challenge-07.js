/*
Crie um array com 5 items (tipos variados).
*/
var myarray=['maçã', 'banana', 'laranja','Ari','campeão']

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(itens){
  myarray.push(itens)
  return myarray;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log (addItem([19, {color: 'azul'} , function(){}]));

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do terceiro array é [ELEMENTO]."
*/
console.log('O segundo elemento do segundo array é '+myarray[05][01]   +'.')

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem ' +myarray.length +' itens.');

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem ' + myarray[05].length+ ' itens.')

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );

num=10;
while(num <= 20){ num % 2===0? console.log(num):''; num ++;}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
num=10;
while(num < 20){ num % 2!==0? console.log(num):''; num ++;}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );

var contador=100;
for(var contador=100;contador<=120; contador++){ contador % 2===0?
  console.log(contador):'';
}

console.log( 'Números ímpares entre 111 e 125:' );

var contador=100;
for(var contador=100;contador<=120; contador++){ contador % 2!==0?
  console.log(contador):'';
}

