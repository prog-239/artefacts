# HTTP-запросы

## fetch API

Для http-запросов со стороны сайта нужно использовать [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).

### Пример для GET-запроса

```js
// Файл script.js

// Указываем напрямую, что будем делать GET-запрос
fetch('https://anysite.com/api/cities', {
    method: 'GET'
});

// Если не указать тип запроса, то автоматически будет GET-запрос
fetch('https://anysite.com/api/cities');
```

### Пример для POST-запроса

```js
// Файл script.js

const cityData = {
    name: 'Saint Petersburg',
    population: 5600000,
    yearFounded: 1703,
}

// Указываем напрямую, что будем делать POST-запрос
fetch('https://anysite.com/api/cities/add', {
    method: 'POST',
    body: JSON.stringify(cityData),
});

// body принимает только строчное значение, поэтому нужно выполнить JSON.stringify() для 
// перевода JSON-объекта в строку, чтобы можно было отправить на сервер
```

## Form API
index.html
```html
<form id="loginForm">
    <input name="login" type="text">
    <button type="submit">Войти</button>
</form>
```

script.js
```js
const loginForm = document.getElementById("loginForm");

// У form есть событие отправки - submit, на которое можно подписаться
loginForm.addEventListener('submit', () => {
    // Забираем значение, которое ввели в поле login
    const loginValue = loginForm['login'].value 

    // ВАЖНО! значение атрибута name в input должно совпадать
    // с ключом, которое используем для получить value
    //
    //               Это          должно быть равно           Этому
    //                |                                         |
    //                V                                         V
    // <input name="login" type="text">             loginForm['login'].value
});
```

## Задание галерея с изображениями собачек

Необходимо сделать галерею с фотографиями пёсиков из dogapi


Примерная схема:

              КАРТИНКА

        <BACK        FORWARD>


Кнопка вперед:
- Получает ссылку на новую картинку
- Показывает новую картину
- Записывает ссылку в массив
- Если текущий индекс картинки в массиве меньше чем ```pictures.length - 1```, тогда показывать картинку ```pictures[i]```

Кнопка назад:
- Показывает картинку ```pictures[i - 1]```
- Если следующая картинка с индексом ```[-1]``` или массив пустой, то ничего не делает
