// 1: Création des cartes
// 2: Génération des nombres aléatoires
// 3: Unicité des nombres
// 4: Création des doublons (pairs de carte)
// 5: Mélange des cartes
// 6: Affichage des cartes

const NB_CARDS = 10;

const cards = [];
const tabRandomNB = [];

let firstFlippedCard = null;

function init() {
    loadSound();

    for (let i = 0; i < NB_CARDS; i++) {
        createCard();
    }
}

function loadSound() {
    const bgSound = document.createElement('audio');
    const youWonSound = document.createElement('audio');

    bgSound.src = 'sound/jungle.mp3';
    youWonSound.src = 'sound/you-won.mp3';

    bgSound.autoplay = true;
    bgSound.volume = 0.;

    document.body.appendChild(bgSound);
    document.body.appendChild(youWonSound);
}

confirm('Vous avez gagné ! Voulez-vous rejouer ?');

function createCard() {
    const card = document.createElement('div');
    const backCard = document.createElement('div');
    const frontCard = document.createElement('div');

    card.appendChild(backCard);
    card.appendChild(frontCard);

    card.classList.add('card');
    backCard.classList.add('back');
    frontCard.classList.add('front');

    cards.push(card);
    handleCard(cards.length - 1);
}

function handleCard(index) {
    const card = cards[index];

    addClickListener(card);
    generateRandomNB(card, index);
    shuffleCards();
    displayCards();
}

function addClickListener(card) {
    card.addEventListener('click', function() {
        card.classList.toggle('flipped');

        if (firstFlippedCard) {
            if (firstFlippedCard.textContent === this.textContent) {
                firstFlippedCard = null;
            } else {
                setTimeout(() => {
                    firstFlippedCard.classList.remove('flipped');
                    this.classList.remove('flipped');
                    firstFlippedCard = null;
                }, 1000);
            }

        } else {

            firstFlippedCard = this;
        }
    });
}

function generateRandomNB(card, index) {
    let randomNB = tabRandomNB[tabRandomNB.length - 1];

    if (index % 2 === 0) {
        do {
            randomNB = Math.ceil(Math.random() * 20);
        }
        while (tabRandomNB.includes(randomNB));

        tabRandomNB.push(randomNB);
    }

    card.querySelector('.front').textContent = randomNB;
}

function shuffleCards() {
    cards.sort(function() {
        return Math.random() - 0.5;
    });
}

function displayCards() {
    cards.forEach(function(card) {
        document.querySelector('.wrapper').appendChild(card);
    });
}

init();