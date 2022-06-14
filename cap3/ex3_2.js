function calcularPeso() {
    // cria uma referencia aos elementos manipulados pela function 
    var inNome = document.getElementById("inNome")
    var rbMasculino = document.getElementById("rbMasculino")
    var rbFeminino = document.getElementById("rbFeminino")
    var inAltura = document.getElementById("inAltura")
    var outResposta = document.getElementById("outResposta")

    // obtem conteudos dos campos de ediçao da pagina 
    var nome = inNome.value 
    var masculino = rbMasculino.checked 
    var feminino = rbFeminino.checked
    var altura = Number(inAltura.value)

    // verifica se o nome foi preenchido e sexo selecionado 
    if (nome == "" || (masculino == false && feminino == false)) {
        alert("Por favor, informe o nome e selecione o sexo correctamente!")
        inNome.focus()
        return
    }

    // se altura vazio (0) ou NaN: Not-a-Number (um texto for informado, por exemplo)
    if ( altura == 0 || isNaN(altura)) {
        alert("Por favor, informe a altura conrrectamente...")
        inAltura.focus
        return
    }
    
    // se masculino ( significa se masculino == true)
    if (masculino) {
        var peso = 22 * Math.pow(altura, 2)  // Math.pow eleva ao quadrado
    } else {
        var peso = 21 * Math.pow(altura, 2) 
    }

    // apresenta a resposta (altera o conteudo da linha outResposta)
    outResposta.textContent = nome + ": Seu peso ideal é " + peso.toFixed(3) + "kg" 
}

// cria referencia ao elemento btCalcular e registra evento associado a btCalcular
var btResultado = document.getElementById("btCalcular")
btCalcular.addEventListener("click", calcularPeso)