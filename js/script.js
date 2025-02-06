const accordions = document.querySelectorAll('.accordion');
accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('.accordion-body');
        body.classList.toggle('active');
    })
})


const botaoVisibilidade = document.querySelector('.opcao__visibilidade');
const imagemVisivel = document.querySelector('.imagem__visibilidade');
const saldoValor = document.querySelector('.saldo');
const botaoPagamento = document.querySelector('.pagamento');


const campoUsuario = document.querySelector('#perfil');
const usuario = document.querySelector('#nome');
const botaoCadastrar = document.querySelector('#botaoCadastrar')
const botaoEntrar = document.querySelector('#botaoEntrar')

botaoVisibilidade.addEventListener('click', tornarVisivel);
botaoCadastrar.addEventListener('click', nomearUsuario)

function nomearUsuario(){
    // localStorage.setItem('usuario', usuario.value);
    window.location.href = 'conta.html';
}

window.addEventListener("DOMContentLoaded", () => {
    const campoUsuario = document.querySelector('#perfil');
    const nomeSalvo = localStorage.getItem("usuario"); // Recupera o nome armazenado

    if (nomeSalvo) {
        campoUsuario.innerHTML = nomeSalvo; // Exibe o nome na página
    }
});



function tornarVisivel() {
    if (imagemVisivel.src.includes('visivel.png')) {
        imagemVisivel.src = '/images/oculto.png'; 
        saldoValor.innerHTML = '-'; 
    } else {
        imagemVisivel.src = '/images/visivel.png'; 
        saldoValor.innerHTML = 'R$ 0,00'; 
    }
}
