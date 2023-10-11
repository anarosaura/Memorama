let canFlip = true;
let firstCard = null;
let secondCard = null;

function revealImage(card) {
    if (!canFlip) return;

    const img = card.querySelector('img'); // Imágenes

    if (!firstCard) {
        // Si no hay primera carta seleccionada, se guarda esta como la primera
        firstCard = card;
        img.classList.remove('hidden');
        img.classList.add('visible');
    } else if (firstCard !== card) {
        // Si hay una primera carta y no es la misma que la actual
        secondCard = card;
        img.classList.remove('hidden');
        img.classList.add('visible');

        if (firstCard.querySelector('img').src === secondCard.querySelector('img').src) {
            // Si las imágenes son iguales, se dejan visibles
            firstCard = null;
            secondCard = null;
            // Se verifica que disminuya el número de tarjetas ocultas
            console.log(document.querySelectorAll('.tarjeta img.hidden').length);
            // Se verifica si todas las cartas están volteadas
            if (document.querySelectorAll('.tarjeta img.hidden').length === 0) {
                // Cuando todas las cartas están volteadas, muestra una alerta
                alert("¡Ganaste! Todas las cartas están volteadas.");
            }
        } else {
            // Si las imágenes no son iguales, se ocultan después de un breve período de tiempo
            canFlip = false;
            setTimeout(() => {
                firstCard.querySelector('img').classList.remove('visible');
                firstCard.querySelector('img').classList.add('hidden');
                secondCard.querySelector('img').classList.remove('visible');
                secondCard.querySelector('img').classList.add('hidden');
                firstCard = null;
                secondCard = null;
                canFlip = true;
            }, 1000); // Espera 1 segundo antes de ocultar las cartas
        }
    }
}
