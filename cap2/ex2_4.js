function calcularPreco() {
    // criar uma referencia aos elementos da pagina 
    var inQuilo = document.getElementById("inQuilo")
    var inConsumo = document.getElementById("inConsumo")
    var outValor = document.getElementById("outValor")

    // obtem conteudos dos campos de entrada 
    var quilo = Number(inQuilo.value)
    var consumo = Number(inConsumo.value)

    // calcular valor a ser pago 
    var valor = (quilo / 1000) * consumo

    // altera o conteudo da linha de respostas 
    outValor.textContent = "Valor a pagar R$: " + valor.toFixed(2)
}

// criar referencia ao elemento btCalcular 
var btCalcular = document.getElementById("btCalcular")

// resgistra um evento associado ao botao, para carregar uma funçao 
btCalcular.addEventListener("click", calcularPreco)