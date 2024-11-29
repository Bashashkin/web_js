document.addEventListener('DOMContentLoaded', () => {
    // Ссылка на список задач и переменная для хранения перетаскиваемого элемента
    const todoList = document.getElementById('todo-list');
    let draggingItem = null;
  
    // Обработчик события начала перетаскивания
    todoList.addEventListener('dragstart', (e) => {
      // Когда перетаскивание начинается, мы сохраняем ссылку на перетаскиваемый элемент
      draggingItem = e.target;
  
      // Добавляем класс 'dragging', чтобы изменить стиль элемента (например, сделать его полупрозрачным)
      draggingItem.classList.add('dragging');
    });
  
    // Обработчик события окончания перетаскивания
    todoList.addEventListener('dragend', () => {
      // Когда перетаскивание заканчивается, удаляем класс 'dragging'
      draggingItem.classList.remove('dragging');
      
      // Очищаем переменную draggingItem, так как элемент больше не перетаскивается
      draggingItem = null;
    });
  
    // Обработчик события перетаскивания (когда элемент перемещается в пределах списка)
    todoList.addEventListener('dragover', (e) => {
      // Предотвращаем стандартное поведение браузера (например, чтобы элементы не открывались как файлы)
      e.preventDefault();
  
      // Находим ближайший элемент, относительно которого будет происходить вставка перетаскиваемого элемента
      const closestItem = getClosestItem(e.clientY);
  
      // Если найден ближайший элемент, и он не совпадает с перетаскиваемым элементом
      if (closestItem && closestItem !== draggingItem) {
        // Вставляем перетаскиваемый элемент перед ближайшим элементом
        todoList.insertBefore(draggingItem, closestItem);
      }
    });
  
    // Функция для нахождения ближайшего элемента, куда вставить перетаскиваемый элемент
    function getClosestItem(yPosition) {
      // Получаем все элементы списка, кроме перетаскиваемого
      const items = [...todoList.querySelectorAll('.todo-item:not(.dragging)')];
  
      // Находим ближайший элемент в зависимости от вертикальной позиции мыши
      return items.reduce((closest, item) => {
        const box = item.getBoundingClientRect();  // Получаем позицию элемента относительно окна
        const offset = yPosition - box.top - box.height / 2;  // Вычисляем смещение относительно центра элемента
  
        // Если элемент ближе к точке перетаскивания, обновляем closest
        if (offset < 0 && offset > closest.offset) {
          return { item, offset };
        } else {
          return closest;
        }
      }, { item: null, offset: Number.NEGATIVE_INFINITY }).item;
    }
  });
  