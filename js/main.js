let currentSlide = 1;

function nextSlide(nextSlideNumber) {
    const current = document.getElementById(`slide${currentSlide}`);
    const nextSlide = document.getElementById(`slide${nextSlideNumber}`);
    
    // Verificar si la diapositiva actual y la siguiente diapositiva existen
    if (!current || !nextSlide) {
        console.error('Diapositiva no encontrada');
        return;
    }

    // Aplicar la transición de deslizamiento
    current.classList.remove('active');
    nextSlide.classList.add('active');
    
    // Actualizar la diapositiva actual
    currentSlide = nextSlideNumber;
}

// Inicializar la primera diapositiva
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.question-slide');
    slides.forEach((slide, index) => {
        if (index === 0) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
});