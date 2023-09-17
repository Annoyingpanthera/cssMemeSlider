document.addEventListener("DOMContentLoaded", function () {
    const sliderButtons = document.querySelectorAll('.slider_button');
    const images = document.querySelectorAll('.img');
    const titleSlider = document.querySelector('.title_slider span');

    let currentIndex = 0;

    function showImage(index) {
        // Скрываем все изображения и текст, кроме активных
        images.forEach((img, i) => {
            if (i !== index) {
                img.classList.remove('active');
            }
        });

        // Показываем только выбранное изображение и текст
        images[index].classList.add('active');
        titleSlider.textContent = images[index].querySelector('.caption').textContent;
        titleSlider.classList.remove('text-animation'); // Убираем класс анимации
        void titleSlider.offsetWidth; // Принудительная перерисовка
        titleSlider.classList.add('text-animation'); // Добавляем класс анимации

        // Убираем класс 'active' у всех кнопок
        sliderButtons.forEach(btn => btn.classList.remove('active'));
        // Добавляем класс 'active' только выбранной кнопке
        sliderButtons[index].classList.add('active');

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
