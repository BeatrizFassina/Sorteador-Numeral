function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de >= ate){
        alert('O número em "Do número" deve ser menor que "Até o número."');
        return;
    } else if (quantidade > (ate - de +1)){
        alert('A quantidade escolhida está maior que o intervalo entre os números propostos');
        return;
    }

    let sorteados = [];
    let numeros;

    for (let i = 0; i < quantidade; i++){
       numeros = obterNumeroAleatorio(de, ate);

       while (sorteados.includes(numeros)){
        numeros = obterNumeroAleatorio(de, ate);
       }

       sorteados.push (numeros); 
    }
    
    let resultado = document.getElementById('resultado'); 
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}