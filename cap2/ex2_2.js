function converterDuracao() {
    // cria referencia aos elementos da pagina 
    var inTitulo = document.getElementById("inTitulo")
    var inDuracao = document.getElementById("inDuracao")
    var outTitulo = document.getElementById("outTitulo")
    var outResposta = document.getElementById("outResposta")

    // obtem conteudos dos campos de entradas
    var titulo = inTitulo.value 
    var duracao = Number(inDuracao.value)
    
    // arredonda para abaixo o resultado da divisao 
    var horas = Math.floor(duracao / 60)

    // obtem o resto da divisao entres os numeros 
    var minutos = duracao % 60 
    
    // alterar o conteudo dos paragrafos de respostas 
    outTitulo.innerHTML = titulo 
    outResposta.innerHTML = horas + " Hora(s) e " + minutos + " Minuto(s)" 
}

// cria uma referencia ao elemento btConverter (botao)
var btConverter = document.getElementById("btConverter")
// resgistra um evento associado ao botao, para carregar uma funçao 
btConverter.addEventListener("click", converterDuracao)