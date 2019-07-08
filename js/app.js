const cards = document.querySelectorAll('.card');

const myInterval = setInterval(function() {
    for (let card of cards) {
        if (!card.classList.contains('stop')) {
            card.classList.toggle('flipped');
        }
    }
}, 1000);


setTimeout(function() {
    clearInterval(myInterval);
}, 30000);