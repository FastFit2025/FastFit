let currentScreen = 1;

function goToNextScreen() {
    if (currentScreen === 2 && document.querySelector('input[name="objetivo"]:checked').value === 'restaurantes') {
        window.location.href = 'restaurantes.html'; 
    } else {
        document.getElementById(`screen${currentScreen}`).classList.remove('active');
        currentScreen++;
        if (document.getElementById(`screen${currentScreen}`)) {
            document.getElementById(`screen${currentScreen}`).classList.add('active');
        }
    }
}

function goToPreviousScreen() {
    if (currentScreen > 1) {
        document.getElementById(`screen${currentScreen}`).classList.remove('active');
        currentScreen--;
        document.getElementById(`screen${currentScreen}`).classList.add('active');
    }
}

function adjustMenu() {
    alert('Função para ajustar o cardápio ainda em desenvolvimento!');
}

function finishApp() {
    alert('Seu plano foi salvo!');
    window.location.href = 'restaurantes.html'; 
}

