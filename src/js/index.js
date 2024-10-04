const cards = document.querySelector('.cards');

fetch('src/data/jogadores-brasil.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(jogador => {
            const card = createCard(jogador);

            cards.appendChild(card);
        });
    });

function createCard(jogador) {
    const card = document.createElement('div');
    card.classList.add('card');

    const posicaoP = document.createElement('span');
    posicaoP.classList.add('posicaoP');
    posicaoP.textContent = jogador.posicao;

    const posicaoG = document.createElement('span');
    posicaoG.classList.add('posicaoG');
    posicaoG.textContent = jogador.posicao;

    const escudo = document.createElement('img');
    escudo.classList.add('escudo');
    escudo.src = `./src/img/escudos/${jogador.escudo}.png`;
    escudo.alt = `Escudo do clube ${jogador.clube}`;

    const jogadorImg = document.createElement('img');
    jogadorImg.classList.add('jogador');
    jogadorImg.src = `./src/img/jogadores/${jogador.foto}.png`;
    jogadorImg.alt = `Foto do jogador ${jogador.nome}`;

    const nomeJogador = document.createElement('h3');
    nomeJogador.classList.add('nomeJogador');
    nomeJogador.textContent = jogador.nome;

    const numero = document.createElement('h4');
    numero.classList.add('numero');
    numero.textContent = jogador.numero;

    card.appendChild(posicaoP);
    card.appendChild(posicaoG);
    card.appendChild(escudo);
    card.appendChild(jogadorImg);
    card.appendChild(nomeJogador);
    card.appendChild(numero);

    return card;
}

function scrollUp() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function buttonUp() {
    const btn = document.querySelector('.btn-up');
    btn.addEventListener('click', scrollUp);
}

buttonUp();
