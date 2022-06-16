function calcularRaiz() {
    // cria uma referencia aos elementos da pagina 
    var inNumero = document.getElementById("inNumero")
    var outResposta = document.getElementById("outResposta")

    // obtem o conteudo do campo inNumero
    var numero = Number(inNumero.value)

    // se nao preencheu ou Not-a-Number (NaN)
    if (numero == 0 || isNaN(numero)) {
        alert("Informe um numero valido") // exibe alerta 
        inNumero.focus() // posiciona no campo inNumero
        return // retorna
    }
    var raiz = Math.sqrt(numero) // calcula a raiz quadrada do numero 

    // se valor da variavel raiz igual a este valor arredondado para baixo..
    if (raiz = Math.floor(raiz)) {
        outResposta.textContent = "Raiz: " + raiz // mostra raiz
    } else {
        // senao exibe mensagem indicando q nao ha raiz
        outResposta.textContent = "Não há raiz exata para " + numero
    }
}
// cria uma referencia ao elemento btExibir e registra evento que ira carregar a function
var btExibir = document.getElementById("btExibir")
btExibir.addEventListener("click", calcularRaiz)