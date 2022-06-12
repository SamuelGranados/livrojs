// le um valor de jantar 
var jantar = Number(prompt("Valor do jantar R$: "))
// calcular os dados 
var garcom = jantar * 0.10
var total = jantar + garcom 
// Apresentar a resposta
alert("Taxa Garçom R$: " + garcom.toFixed(2) + "\nTotal R$: " + total.toFixed(2))