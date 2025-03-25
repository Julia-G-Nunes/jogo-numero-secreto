let listadeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = GerarNumeroAleatorio();
let tentativas = 1;

function ExibirTextoNaTela (tag, texto) {
let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
}

function ExibirMensagemInicial () {
    ExibirTextoNaTela("h1", "JOGO DO NÚMERO SECRETO");
    ExibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

ExibirMensagemInicial();


function GerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listadeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
    listadeNumerosSorteados = [];
}   

    if (listadeNumerosSorteados.includes(numeroEscolhido)) {
        return GerarNumeroAleatorio();
} else {
    listadeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
}
}

function verificarChute() { 
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto) {    
        ExibirTextoNaTela ("h1", "Acertou");
        let PalavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTela = (`Você descobriu o numero secreto com ${tentativas} ${PalavraTentativa}`);
        ExibirTextoNaTela ("p", mensagemTela);
        document.getElementById("reiniciar").removeAttribute("disabled");


    }else { 
        if (chute > numeroSecreto) {
        ExibirTextoNaTela("p", "O numero secreto é menor");
    }else{      
        ExibirTextoNaTela("p", "O número secreto é maior");

 }
 tentativas++
 LimparCampo ()
 }
}

function LimparCampo() {
   let chute = document.querySelector("input");
    chute.value = "";  
}

function reiniciarJogo() {
    numeroSecreto = GerarNumeroAleatorio();
    LimparCampo ();
    tentativas = 1;
    ExibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true)

}
