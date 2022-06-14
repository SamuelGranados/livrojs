function calcularMedia() {
    // cria uma referencia aos elementos da pagina 
    var inNome = document.getElementById("inNome")
    var inNota1 = document.getElementById("inNota1")
    var inNota2 = document.getElementById("inNota2")
    var outMedia = document.getElementById("outMedia")
    var outSituacao = document.getElementById("outSituacao")

    // obtem os conteudos dos campos de edicao da pagina 
    var nome = inNome.value 
    var nota1 = Number(inNota1.value) 
    var nota2 = Number(inNota2.value )

    // calcula a media das notas 
    var total = (nota1 + nota2)
    var media = total / 2

    // apresenta a media (altera o conteudo do elemento outMedia)
    outMedia.textContent = "Média das Notas: " + media.toFixed(1) 

    // cria condiçao 
    if (media >= 7){
        // altera o texto e estilo da cor do elemento outSituacao
    outSituacao.textContent = "Parabens " + nome + "! Você foi Aprovado(a)"
    outSituacao.style.color = "blue"
    } else {
        outSituacao.textContent = "Ops " + nome + "...Você foi Reprovado(a)"
        outSituacao.style.color = "red"
    }
}

// vamos criar uma referencia ao elemento btExibir (botao)
var btExibir = document.getElementById("btExibir")

// registra um evento associado ao botao, para carregar uma funçao 
btExibir.addEventListener("click", calcularMedia)