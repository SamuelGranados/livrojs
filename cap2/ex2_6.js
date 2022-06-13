function calcularValor() {
    // criar referencias aos elementos da pagina 
    var inUso = document.getElementById("inUso")
    var inTempo = document.getElementById("inTempo")
    var outValor = document.getElementById("outValor")

    // obtem conteudos dos campos de entradas 
    var uso = Number(inUso.value)
    var tempo = Number(inTempo.value)

    // calcula o valor a ser pago 
    var valor = Math.floor(uso * 60 / 4)
    var tempo = Math.floor(tempo + valor) 

    // altera o conteudo de linha de resposta 
    outValor.textContent = "Valor a Pagar R$: " + valor
}

// cria referencia ao elemento btCalcular 
var btCalcular = document.getElementById("btCalcular")

// registra um evento associado ao botao, para carregar uma funçao
btCalcular.addEventListener("click", calcularValor)

// nao concluido