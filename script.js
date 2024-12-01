document.addEventListener("DOMContentLoaded", () => {
    const scrollAmount = 220; // Adjust according to the card width + gap

    // Trending Now Section
    const movieContainer = document.getElementById('movieContainer');
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');

    leftArrow.addEventListener('click', () => {
        movieContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    rightArrow.addEventListener('click', () => {
        movieContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    // Only On Netflix Section
    const movieContainerNetflix = document.getElementById('movieContainerNetflix');
    const leftArrowNetflix = document.getElementById('leftArrowNetflix');
    const rightArrowNetflix = document.getElementById('rightArrowNetflix');

    leftArrowNetflix.addEventListener('click', () => {
        movieContainerNetflix.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    rightArrowNetflix.addEventListener('click', () => {
        movieContainerNetflix.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
});


