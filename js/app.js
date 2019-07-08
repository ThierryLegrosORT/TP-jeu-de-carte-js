const cards = document.querySelectorAll('.card');

const myInterval = setInterval(function() {
    for (let card of cards) {
        card.classList.toggle('flipped');
    }
}, 1000);


setTimeout(function() {
    clearInterval(myInterval);
}, 10000);