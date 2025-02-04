# Работа с состоянием в React

## Инициализация проекта

Документация по созданию приложения описана в [документации "React начало"](../../15-01-2025/FirstReactApp/README.md)

## Состояние компоненты
<span style="color: #00aaff">**React**</span> полезен тем, что он скрывает за собой всю реализацию по работе с состояниями.
Рассмотрим пример реализации простого динамического списка на чистом **JavaScript**.

```js
const rootList = document.getElementById('rootList');
const addButton = document.getElementById('addButton');

const todos = [
    'Сходить в школу',
    'Сходить на занятие по программированию от Т-Банк',
    'Катнуть с друзьями в Dota',
    'Сделать домашку',
];

// Функция для создания HTML-элемента списка
function getHtmlListItem(content) {
    return `<li class="listItem">${content}</li>`;
}

// Функция, которая рисует весь список
function renderListItems(items) {
    if (items.length === 0) {
        rootList.innerHTML = '<p>Ваш список дел пуст</p>';
        return;
    }

    let rootListContentHtml = '';

    for (let i = 0; i < items.length; i++) {
        rootListContentHtml += getHtmlListItem(items[i]);
    }

    rootList.innerHTML = rootListContentHtml;
}

// Функция, которая добавляет новый элемент в список
// при этом выполняет небольшую валидацию входных данных
function addListItem(value) {
    if (value.length === 0) return;
    todos.push(value);
}

// Обработка события "клилк" по кнопке 
addButton.addEventListener('click', () => {
    addListItem(anyValue); // Сначала обновляем набор данных
    renderListItems(todos); // Потом перерисовываем список заново
});

// Не забываем выполнить предварительную отрисовку
renderListItems(todos) 
```

Этот пример не очень большой, но он отражает всю суть работы с состояниями. 
> Что мы сделали, чтобы этот минимальный пример работал
- Получили ссылки на все элементы управления
- Создали factory-функцию, которая отдает шаблон компоненты, в нашем случае минимальный шаблон. 
Это функция ```getHtmlListItem```
- Написали функцию, которая отрисовывает весь список данных, при этом добавили минимальную валидацию. Функция ```renderListItems```
- Создали функцию ```addListItem```, которая обновляет список данных
- Обработали событие ```click```, при котором происходит добавление новых данных и перерисовка списка в HTML

И это все только для одного списка, который обладает минимальной интерактивностью. Нужно за многим следить, а если приложение разростается, то уже сложно будет концентрироваться и на бизнес-логике приложения, и на работе с состояниями.

Но мы можем использовать <span style="color: #00aaff">**React**</span> с его состояниями. Выполним тот же самый пример, но на <span style="color: #00aaff">**React**</span>

```jsx
import React, { useState } from "react";

function RootList() {
    const [todos, setTodos] = useState([]); // Используем useState

    function addTodo() {
        setTodos([...todos, anyItem]);
    }

    return (
        <div>
            <button onClick={addTodo}>Добавить задачу</button>
            <ul>
                {todos.length === 0 && <p>Ваш список дел пуст</p>}
                {todos.map((todoItem, i) => 
                    <li key={i}>{todoItem}</li>
                )}
            </ul>
        </div>
    );
}

export default RootList;
```

Этот пример показывает, что для организации работы с состоянием, почти ничего не нужно делать, <span style="color: #00aaff">**React**</span> взял всю работу на себя со своим ```useState```.

>Разберем этот пример более подробно

```useState``` в аргументы принимает значение для начального состояния и возвращает интересный массив. В этом массиве
- Первое значение - это актуальное состояние
- Второе значение - это функция для обновления состояния

Но как мы дошли до такой странной записи?
```js
const [todos, setTodos] = useState([]);
```

Все очень просто, JavaScript имеет такой синтаксический сахар, что если раскрыть массив мы можем сразу разложить его элементы по переменным.

>Рассмотрим простой пример, как работает этот синтаксис:
```js
// У нас есть массив с тремя элементами
const heroes = [
    { name: 'Harry', age: 16 },
    { name: 'Hermione', age: 16 },
    { name: 'Ron', age: 16 },
]

// Теперь разложим сразу все элементы массива по переменным
const [harry, hermione, ron] = heroes;

console.log(harry.name) // output: Harry
```
А вот как работает без такого синтаксического сахара тот же самый пример
```js
// У нас есть массив с тремя элементами
const heroes = [
    { name: 'Harry', age: 16 },
    { name: 'Hermione', age: 16 },
    { name: 'Ron', age: 16 },
]

const harry = heroes[0];
const hermione = heroes[1];
const ron = heroes[2];

console.log(harry.name) // output: Harry
```

И точно также мы работаем с ```useState``` из <span style="color: #00aaff">**React**</span>. Так как мы знаем, что useState вернет массив  ```[актуальноеСостояние, установитьСостояния]```, мы сразу раскладываем его значения по переменным как в примере ниже (ну и выше конечно же).

```jsx
import React, { useState } from "react";

function RootList() {
    const [todos, setTodos] = useState([]);
    // ...
}

export default RootList;
```

### Как обновить состояние?

Чтобы правильно обновить состояние, нам нужно учитывать несколько моментов:

>Если состояние состоит из значения примитива ```Boolean```, ```String```, ```Number```, то мы в фукцию для обновления состояния передаем актуальное значение

```js
// ...
function Counter() {
    const [count, setCount] = useState(0);

    function updateCount() {
        const newCount = count + 1;
        setCount(newCount);
        // или 
        setCount(count + 1);
    }
    // ...
}
// ...
```

Еще пример
```js
// ...
function Popup() {
    const [show, setShow] = useState(false);

    function openPopup() {
        setShow(true);
    }
    // ...
}
// ...
```

>Если состояние это объект или массив, то стоит учитывать то, что у нас уже есть какое-то состояние и его нужно сохранить

Хороший пример мы уже рассмотрели выше, но еще раз продублируем
```jsx
import React, { useState } from "react";

function RootList() {
    const [todos, setTodos] = useState([]);

    function addTodo() {
        // Мы копируем прошлый массив в новый
        // и сразу в конец нового массива добавляем новое значение
        // и передаем это в функцию для обновления состояния
        setTodos([...todos, anyItem]);
    }

    return (
        <div>
            <button onClick={addTodo}>Добавить задачу</button>
            <ul>
                {todos.length === 0 && <p>Ваш список дел пуст</p> /* отрисовка контента по условию */}
                
                {todos.map((todoItem, i) => 
                    <li key={i}>{todoItem}</li>
                )}
            </ul>
        </div>
    );
}

export default RootList;
```

## Зачем эти сложности? Можно ли в <span style="color: #00aaff">React</span> без состояния?

Рассмотрим некорректный❌ пример - открытие/закрытие модального окна

```jsx
import React from "react";
import "./someStyles.css";

function ScreenWithModal() {
    // Попробуем без useState открывать/закрывать модальное окно
    // Так делать не надо, это просто плохой пример ❌
    let modalOpened = false;

    function toggleModal() {
        modalOpened = !modalOpened;
    }

    return (
        <div className="screen">
            <button className="btnOpenModal" onClick={toggleModal}>
                Open modal
            </button>

            <div className={"modal " + (modalOpened ? "modalOpened" : "")}>
                <div className="modalContent">
                    Some modals content
                </div>
            </div>
        </div>
    );
}

export default ScreenWithModal;
```

Этот пример не сработает, так как ```modalOpened``` обычная JavaScript переменная и <span style="color: #00aaff">React</span> компонента не отреагирует на обновление обычной переменной. Именно для таких случаев и нужны состояние. <span style="color: #00aaff">React-компоненты</span> реагируют только на внешние свойства, которые поподают в компоненту через ```props```, также реагирую на использование ```useState```.

Перепишем пример выше правильно ✅

```jsx
import React, { useState } from "react";
import "./someStyles.css";

function ScreenWithModal() {
    // Правильная реализация ✅
    const [modalOpened, setModalOpened] = useState(false);
    
    function toggleModal() {
        setModalOpened(!modalOpened);
    }

    return (
        <div className="screen">
            <button className="btnOpenModal" onClick={toggleModal}>
                Open modal
            </button>

            <div className={"modal " + (modalOpened ? "modalOpened" : "")}>
                <div className="modalContent">
                    Some modals content
                </div>
            </div>
        </div>
    );
}

export default ScreenWithModal;
```

