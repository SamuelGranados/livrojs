function mostrarPromocao() {
    // Cria referencia aos elementos da pagina 
    var inMedicamento = document.getElementById("inMedicamento")
    var inPreco = document.getElementById("inPreco")
    var outPromocao = document.getElementById("outPromocao")
    var outLeve = document.getElementById("outLeve")

    // obtem conteudo dos campos de entradas 
    var medicamento = inMedicamento.value 
    var preco = Number(inPreco.value)

    // calcula o valor a ser pago 
    var valor = Math.floor(preco * 2) + "." + "00"

    outPromocao.textContent = "Promoçao de " + medicamento 
    outLeve.textContent = "Leve 2 por apenas R$: " + valor
}

// cria uma referencia ao elemnto btMostrar
var btMostrar = document.getElementById("btMostrar")

// registra um evento associado ao botao, para uma funçao
btMostrar.addEventListener("click", mostrarPromocao)