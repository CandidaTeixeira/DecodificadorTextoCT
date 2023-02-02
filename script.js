const imagem = document.querySelector('.default');
const texto = document.querySelector('.text-area');
const input = document.querySelector('#mensagem');

input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' || e.key === 'Tab') {
        return true;
    }

    if ("1234567890qwertyuioplkjhgfdsazxcvbnm ".indexOf(e.key) < 0) {
        e.preventDefault();
        return false;
    }
});

function exibeCaixaTexto() {
    imagem.style.display = 'none';
    texto.style.display = 'block';

    input.focus();
}

function exibeImagem() {
    imagem.style.display = 'block';
    texto.style.display = 'none';
}

function limpar() {
    input.value = '';
    exibeImagem();
}

function copiar(botao) {
    botao.innerText = "Texto copiado com sucesso!";
    botao.classList.add("copiar-ativo");
    setTimeout(() => {
        botao.innerText = "Copiar";
        botao.classList.remove("copiar-ativo");
    }, 2000);
    navigator.clipboard.writeText(input.value);
}

function mostrarMensagem(mensagem) {
    const span = document.querySelector('.mensagem-span');
    span.innerText = mensagem;
    span.style.opacity = 1;
    setTimeout(() => {
        span.style.opacity = 0;
    }, 1500);
}

function encriptar() {
    const matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    criptografia(matriz);
}

function decriptar() {
    const matriz = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    criptografia(matriz);
}

function criptografia(matriz) {
    for (const subMatriz of matriz) {
        if (input.value.includes(subMatriz[0])) {
            input.value = input.value.replaceAll(subMatriz[0], subMatriz[1]);
        }
    }    
}
