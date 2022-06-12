// declara a funçao mostrar ola 
function mostrarOla() {
    // obtem o conteudo do campo com id nome 
    var nome = document.getElementById("nome").value
    // exibe no paragrafo resposta: "ola" e o nome informado
    document.getElementById("resposta").textContent = "Olá " + nome
}
// cria uma referencia ao botao (com id=) mostrar 
var mostrar = document.getElementById("mostrar")
// registra um referencia para o botao "mostrar" um ouvinte para o evento click
// que ao ser clicado ira chamar a funçao mostrarOla
mostrar.onclick = mostrarOla
