function fusoHorario() {
    // crie uma referencia aos elementos da pagina 
    var inHoraBrasil = document.getElementById("inHoraBrasil")
    var outResposta = document.getElementById("outResposta")

    // obtem e converte o conteudo do campo 
    var horaBrasil = Number(inHoraBrasil.value)

    // se nao preenchou ou Not-a-Number (NaN)
    if (inHoraBrasil.value == "" || isNaN(horaBrasil)) {
        alert("Informe a hora no brasil correctamente!") //exibe alerta
        inHoraBrasil.focus()  // posiciona em inHoraBrasil
        return
    }
    var horaFranca = horaBrasil + 5 // calcula o horario na frança

    // se passar das 24 horas na franca ... 
    if (horaFranca > 24) {
        horaFranca = horaFranca - 24 // substrai 24
    }
    // exibe resposta (altera conteudo do elemento outResposta)
    outResposta.textContent = "Hora na França: " + horaFranca.toFixed(2) 
}

// cria uma referencia ao elemento btExibir e registra evento associado a function 
var btExibir = document.getElementById("btExibir")
btExibir.addEventListener("click", fusoHorario)

