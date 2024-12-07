let listaNumeroSorteado = []
let numeroMaximo = 10
let numeroSecreto = gerarNumeroAleatorio()
let tentativa = 1
 
mensagemDeInicio()

function exibirTextoNatela(tag, texto){
    let campoTela = document.querySelector(tag);
    campoTela.innerHTML = texto;
}

function mensagemDeInicio(){
    exibirTextoNatela('h1','jogo do número secreto')
    exibirTextoNatela('p', `Escolha um número de 1 a ${numeroMaximo}`)
}

function verificarChute(){
    let chute = document.querySelector('input').value 
    
    if(chute == numeroSecreto){
        exibirTextoNatela('h1', 'acertou!')
        let palavraTentativa = tentativa > 1 ? ' tentativas' : 'tentativa'
        let  mensagem = (`voce descobriu o numero secreto com apenas ${tentativa} ${palavraTentativa}`)
        exibirTextoNatela('p', mensagem)
        document.getElementById('reiniciar').removeAttribute('disabled')



    }  else {
     if(chute > numeroSecreto){
        exibirTextoNatela('p', 'o numero secreto e menor')
       } else {
         exibirTextoNatela('p', 'o numero secreto e maior')
       }
    }
     tentativa++
     limparcampo()
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1)
    let quantidadeDeElementosDaLista = listaNumeroSorteado.length
    
    if(quantidadeDeElementosDaLista ==numroMaximo){
        listaNumeroSorteado = []
    }

    if(listaNumeroSorteado.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio()
    }
    else{
        listaNumeroSorteado.push(numeroEscolhido)
        return numeroEscolhido
    }
}

function limparcampo(){
    chute = document.querySelector('input')
    chute.value = ''
}

function novojogo(){
    numeroSecreto = gerarNumeroAleatorio()
    limparcampo()
    tentativa = 1
    mensagemDeInicio()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

