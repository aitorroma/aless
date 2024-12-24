const prizes = {
    1: `Buon Natale, Alessia! 

    CONGRATULAZIONI! 
    
    Hai vinto un BUONO REGALO di 

    € 100 

    per acquistare prodotti per sopracciglia!
    Potrai scegliere tutto ciò che desideri: matite, gel, pennelli e molto altro! `,
    
    2: `Buon Natale, Alessia! 

    CONGRATULAZIONI! 
    
    Hai vinto una LAMPADA LED PROFESSIONALE per

    SOPRACCIGLIA E CIGLIA

    <div class="gift-image">
        <img src="https://m.media-amazon.com/images/I/61Obq9jTZ+L._AC_UL320_.jpg" alt="Lampada LED Professionale">
    </div>

    <div class="features-title">Caratteristiche:</div>
    <div class="features-list">
        <div class="feature-item">Illuminazione LED regolabile</div>
        <div class="feature-item">Supporto flessibile</div>
        <div class="feature-item">Perfetta per il trucco e la cosmesi</div>
        <div class="feature-item">Ideale per il lavoro professionale</div>
    </div>

    Un regalo speciale per il tuo lavoro! 

    <a href="https://www.amazon.it/dp/B0D83TNDGN" target="_blank" class="amazon-button">
        <i class="fab fa-amazon"></i> Acquista su Amazon
    </a>`
};

// Función para verificar si ya se seleccionó un regalo
function checkSelectedGift() {
    const selectedGift = localStorage.getItem('selectedGift');
    if (selectedGift) {
        // Ocultar el mensaje inicial y mostrar el regalo seleccionado
        document.querySelector('.christmas-message').style.display = 'none';
        document.getElementById('gift1').classList.add('disabled');
        document.getElementById('gift2').classList.add('disabled');
        
        // Mostrar el mensaje del regalo
        const resultDiv = document.getElementById('result');
        const messageElement = document.getElementById('selected-gift-message');
        
        // Formatear el mensaje según el regalo
        if (selectedGift === '1') {
            messageElement.innerHTML = prizes[1].split('\n').map(line => 
                `<div class="${line.includes('€ 100') ? 'prize-amount' : 
                             line.includes('BUONO REGALO') ? 'prize-title' : 
                             line.includes('CONGRATULAZIONI') ? 'congratulations' : 
                             'prize-text'}">${line.trim()}</div>`
            ).join('');
        } else {
            messageElement.innerHTML = prizes[2];
        }
        
        resultDiv.classList.remove('hidden');
        
        // Animar el regalo seleccionado
        const selectedGiftElement = document.getElementById(`gift${selectedGift}`);
        selectedGiftElement.style.transform = 'scale(1.1)';
        selectedGiftElement.style.transition = 'transform 0.3s ease';
    }
}

function selectGift(giftNumber) {
    // Guardar la selección en localStorage
    localStorage.setItem('selectedGift', giftNumber.toString());
    
    // Disabilita entrambi i regali
    document.getElementById('gift1').classList.add('disabled');
    document.getElementById('gift2').classList.add('disabled');
    
    // Mostra il messaggio del regalo selezionato
    const resultDiv = document.getElementById('result');
    const messageElement = document.getElementById('selected-gift-message');
    
    // Aplica el formato del mensaje
    if (giftNumber === 1) {
        messageElement.innerHTML = prizes[giftNumber].split('\n').map(line => 
            `<div class="${line.includes('€ 100') ? 'prize-amount' : 
                         line.includes('BUONO REGALO') ? 'prize-title' : 
                         line.includes('CONGRATULAZIONI') ? 'congratulations' : 
                         'prize-text'}">${line.trim()}</div>`
        ).join('');
    } else if (giftNumber === 2) {
        messageElement.innerHTML = prizes[giftNumber];
    }
    
    resultDiv.classList.remove('hidden');
    
    // Anima il regalo selezionado
    const selectedGift = document.getElementById(`gift${giftNumber}`);
    selectedGift.style.transform = 'scale(1.1)';
    selectedGift.style.transition = 'transform 0.3s ease';
    
    // Nascondi il messaggio iniziale
    document.querySelector('.christmas-message').style.display = 'none';
}

function resetSelection() {
    // Habilitar ambos regalos
    document.getElementById('gift1').classList.remove('disabled');
    document.getElementById('gift2').classList.remove('disabled');
    
    // Ocultar el resultado
    document.getElementById('result').classList.add('hidden');
    
    // Resetear las transformaciones
    document.getElementById('gift1').style.transform = 'none';
    document.getElementById('gift2').style.transform = 'none';
}

// Verificar si hay un regalo seleccionado al cargar la página
document.addEventListener('DOMContentLoaded', checkSelectedGift);
