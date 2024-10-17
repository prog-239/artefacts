# Материалы с занятия 16.10.2024

### Задание

Написать простой clicker, который будет вывовдить количество нажатий.

#### Небольшой пример:


```html
<!-- Базовый HTML -->
<body>
    <div class="clicker" id="clickable">0</div>
</body>
```

```js
// Создаем переменную для сбора количества кликов
let count = 0;

// Получаем ссылку на элемент в JavaScript
const clickableElement = document.getElementById("clickable");

// Привязываем событие "click" к элементу
clickableElement.addEventListener("click", () =>{ 
    count += 1; // Либо можно count++

    /** 
     * Свойство innerText - это внутренняя часть любого
     * тэга, в котором может быть текст
     * 
     * Пример
     * 
     * <div>а это innerText данного тега</div>
     */
    clickableElement.innerText = count;
});
```

#### Задание со звездочкой <span style="color: red">*</span>
Добавить кнопку, которая будет уменьшать значение

#### Задание с двумя звездочками <span style="color: red">*</span> 
Добавить условия для изменения числа кликов, значение ```count``` должно быть ```>= 0 и <= 10```