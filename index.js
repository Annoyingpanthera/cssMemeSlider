document.addEventListener("DOMContentLoaded", function () {
    const sliderButtons = document.querySelectorAll('.slider_button');
    const images = document.querySelectorAll('.img');
    let currentIndex = 0;

    function showImage(index) {
        // Скрываем все изображения, кроме активного
        images.forEach((img, i) => {
            if (i !== index) {
                img.classList.remove('active');
            }
        });

        // Показываем только выбранное изображение
        images[index].classList.add('active');
        currentIndex = index;
    }

    sliderButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            showImage(index);
        });
    });

    // Показываем первое изображение при загрузке страницы
    showImage(currentIndex);
});
