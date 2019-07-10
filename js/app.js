// const cards = document.querySelectorAll('.card');

// const myInterval = setInterval(function() {
//     for (let card of cards) {
//         if (!card.classList.contains('stop')) {
//             card.classList.toggle('flipped');
//         }
//     }
// }, 1000);


// setTimeout(function() {
//     clearInterval(myInterval);
// }, 30000);

const NB_CARDS = 10;

const cards = [];
const tabRandomNB = [];

// Methode 1
function init() {
    for (let i = 0; i < NB_CARDS; i++) {
        createCard();
    }
}


function createCard() {
    const card = document.createElement('div');
    const backCard = document.createElement('div');
    const frontCard = document.createElement('div');


    card.appendChild(backCard);
    card.appendChild(frontCard);

    card.classList.add('card');
    // card.className = 'card';
    backCard.classList.add('back');
    frontCard.classList.add('front');

    cards.push(card);
    handleCard(cards.length - 1);

    document.querySelector('.wrapper').appendChild(card);
}

function handleCard(index) {
    const card = cards[index];
    let randomNB = tabRandomNB[tabRandomNB.length - 1];

    if (index % 2 === 0) {
        do {
            randomNB = Math.ceil(Math.random() * 20);

        } while (tabRandomNB.includes(randomNB));

        tabRandomNB.push(randomNB);

    }

    card.querySelector('.front').textContent = randomNB;

    card.addEventListener('click', function() {
        this.classList.toggle('flipped');
    });

}

init();

// Methode 2
// function createCard() {
//     const card = `
//     <div class="card">
//     <div class="back"></div>
//     <div class="front">14</div>
// </div>
// `;

//     document.querySelector('.wrapper').innerHTML = card;
// }

// createCard();
// createCard();
// createCard();