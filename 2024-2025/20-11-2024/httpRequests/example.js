// Как было раньше
const xhr = new XMLHttpRequest();
xhr.open('get', 'https://example.com/api/cities')
xhr.onload = () => {
    // тут ждем ответ
}

// Как работают сейчас

// Пример GET-запроса
fetch('https://example.com/api/cities', {
    method: 'GET',
});

// Пример POST-запрос
fetch('https://example.com/api/cities', {
    method: 'POST',
    body: JSON.stringify({
        name: 'new gorod',
        population: 2000000
    })
});
