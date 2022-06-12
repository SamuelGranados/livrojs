function mostrarPromocao() {

    // cria referencia aos elementos manipulados pelo programa 

    var inVeiculo = document.getElementById("inVeiculo")
    var inPreco = document.getElementById("inPreco")
    var outVeiculo = document.getElementById("outVeiculo")
    var outEntrada = document.getElementById("outEntrada")
    var outParcela = document.getElementById("outParcela")

    // obtem conteudo dos campos de entrada 

    var veiculo = inVeiculo.value 
    var preco = Number(inPreco.value)
    
    // calcula o valor da entrada e das parcelas 

    var entrada = preco / 2 
    var parcelas = (preco * 2) / 12
    
    // altera o conteudo dos paragrafos de resposta 

    outVeiculo.textContent = "Promoçao: " + veiculo
    outEntrada.textContent = "Entrada de R$: " + entrada
    outParcela.textContent = "+ 12x de R$: " + parcelas

}

// cria uma referencia ao elemento btVerPromocao (botao)

var btVerPromocao = document.getElementById("btVerPromocao")

// registra um evento associado ao botao, para carregar uma funçao 

btVerPromocao.addEventListener("click", mostrarPromocao)