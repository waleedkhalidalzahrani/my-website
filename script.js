document.getElementById('recommendationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const recommendationInput = document.getElementById('recommendationInput');
    const newRecommendationText = recommendationInput.value;

    if (newRecommendationText) {
        const newRecommendation = document.createElement('div');
        newRecommendation.classList.add('recommendation');
        newRecommendation.innerHTML = `<p>${newRecommendationText}</p>`;

        document.getElementById('recommendations').appendChild(newRecommendation);
        recommendationInput.value = '';

        alert('Thank you for your recommendation!');
    }
});
