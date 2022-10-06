var body = document.querySelector("body");
var lista = document.querySelector("ul");
var botaoSend = document.querySelector(".button-send");
var mainScreen = document.querySelector(".main-screen");
var secondaryScreen = document.querySelector(".secundary-screen");
var span = document.querySelector(".rating");

habilitarDesabilitarBotao(true)
botaoSend.addEventListener("click", trocarDeTela);
lista.addEventListener("click", validaBotao);
body.addEventListener("click",desativaEnviar)

function habilitarDesabilitarBotao(estado){
    botaoSend.disabled = estado;
}

function trocarDeTela(){
    mainScreen.classList.add("hidden");
    secondaryScreen.classList.remove("hidden");
}

function pegaClique(clique){
    return clique.target; 
}

function validaBotao(botao){
    if (pegaClique(botao).localName == "button") {
        var pegatexto =  pegaClique(botao).textContent;
        span.textContent = pegatexto
        habilitarDesabilitarBotao(false)
    }
}

function desativaEnviar(clique){
    if(pegaClique(clique).localName != "button"){
      habilitarDesabilitarBotao(true)
    }  
}



