// Função para carregar e exibir os feedbacks armazenados no localStorage
function loadFeedbacks() {
    const feedbacks = localStorage.getItem('feedbacks');
    if (feedbacks) {
        document.getElementById('feedbacks').innerHTML = feedbacks;
    }
}

// Função para enviar feedback
function submitFeedback() {
    const feedbackText = document.getElementById('feedbackText').value;

    if (feedbackText.trim() === '') {
        alert('Por favor, digite seu feedback!');
        return;
    }

    const feedbackElement = document.createElement('p');
    feedbackElement.textContent = feedbackText;

    // Adiciona o feedback à área de feedbacks
    const feedbacksDiv = document.getElementById('feedbacks');
    feedbacksDiv.appendChild(feedbackElement);

    // Armazena os feedbacks no localStorage
    const feedbacks = feedbacksDiv.innerHTML;
    localStorage.setItem('feedbacks', feedbacks);

    // Limpa o campo de feedback
    document.getElementById('feedbackText').value = '';
}

// Carrega os feedbacks quando a página for carregada
window.onload = loadFeedbacks;

