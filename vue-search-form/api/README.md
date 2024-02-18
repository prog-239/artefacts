# API для разработки поисковой строки

Api запускается на порту **4000**. Данные для api можно обновить, список данных находится в файле [mockDB](./mockDB.js).

## Запуск Api

- Необходимо установить зависимости, откройте командную строку в директории с api и выполните команду
```bash
npm install
```

- Запуск Api
```bash
npm run start
```

## Работа с Api

Для выполнения поиска необходимо выполнить любой из запросов


### /profiles

Получение полного всего списка

Запрос: https://localhost:4000/api/profiles

Ответ:
```json
{
    "count": 20, // Количество найденных данных
    "profiles": [], // Набор данных
}
```

Запрос для клиентского приложения на JavaScript
```js
// Общий пример с гипотетической setData
function fetchAllProfiles() {
    fetch('https://localhost:4000/api/profiles', { method:'GET' })
        .then((response) => response.json())
        .then((data) => {
            setData(data);
        });
}
```

```js
// Пример для Vue
const profilesData = ref();

function fetchAllProfiles() {
    fetch('https://localhost:4000/api/profiles', { method:'GET' })
        .then((response) => response.json())
        .then((data) => {
            profilesData.value = data;
        });
}
```

Либо более лаконичный вариант с ассинхронными функциями

```js
// Пример для Vue
const profilesData = ref();

async function fetchAllProfiles() {
    const response = await fetch('https://localhost:4000/api/profiles', { method:'GET' });
    const data = await response.json();
    
    profilesData.value = data;
}
```

<hr>

### /profiles?search=example
Поиск данных

Запрос: https://localhost:4000/profiles?search=harry

Ответ:
```json
{
    "count": 1,
    "profiles": [
        {
            "fullname": "Harry James Potter",
            "cafedra": "Gryffindor"
        }
    ],
}
```

Запрос для клиентского приложения на JavaScript
```js
// Общий пример с гипотетической setData
function searchProfiles(search) {
    fetch('https://localhost:4000/api/profiles?search=' + search, { method:'GET' })
        .then((response) => response.json())
        .then((data) => {
            setData(data);
        });
}
```

```js
// Пример для Vue
const profilesData = ref();

function searchProfiles() {
    fetch('https://localhost:4000/api/profiles?search=' + search, { method:'GET' })
        .then((response) => response.json())
        .then((data) => {
            profilesData.value = data;
        });
}
```

Либо более лаконичный вариант с ассинхронными функциями

```js
// Пример для Vue
const profilesData = ref();

async function searchProfiles() {
    const response = await fetch('https://localhost:4000/api/profiles?search=' + search, { method:'GET' });
    const data = await response.json();
    
    profilesData.value = data;
}
```

