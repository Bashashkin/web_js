// Ждём полной загрузки DOM перед выполнением скрипт
document.addEventListener('DOMContentLoaded', () => {
    const images = [
        { url: 'img/supra.jpg', category: 'toyota' },
        { url: 'img/mr2.jpg', category: 'toyota' },
        { url: 'img/impreza.jpg', category: 'subaru' },
        { url: 'img/r34.jpg', category: 'nissan' },
        { url: 'img/350z.jpg', category: 'nissan' },
    ];

    // Находим элемент галереи в DOM, куда будут добавляться изображения
    const gallery = document.getElementById('gallery');

    // Находим все кнопки управления фильтрацией
    const buttons = document.querySelectorAll('#controls button');

    /**
     * Функция для отображения изображений на странице
     * @param {string} category - категория для фильтрации ('all', 'nature', 'animals', etc.)
     */
    const displayImages = (category) => {
        // Очищаем галерею перед добавлением новых изображений
        gallery.innerHTML = '';

        // Фильтруем изображения в зависимости от выбранной категории
        const filteredImages = category === 'all'
            ? images // Если выбрано "all", отображаем все изображения
            : images.filter(image => image.category === category); // Иначе фильтруем по категории

        // Проходим по отфильтрованным изображениям и добавляем их в галерею
        filteredImages.forEach(image => {
            // Создаём элемент <img> для каждого изображения
            const imgElement = document.createElement('img');
            imgElement.src = image.url; // Устанавливаем путь к изображению
            imgElement.alt = image.category; // Добавляем текстовое описание (атрибут alt)
            imgElement.classList.add('image-item'); // Добавляем класс для стилизации
            gallery.appendChild(imgElement); // Добавляем изображение в контейнер галереи
        });
    };

    // Назначаем обработчики событий для всех кнопок
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category; // Получаем значение data-category из кнопки
            displayImages(category); // Обновляем галерею с выбранной категорией
        });
    });

    // Отображаем все изображения при загрузке страницы
    displayImages('all');
});
