
// Если не передать параметры для fetch
// то по-умолчанию будет GET-запрос
// fetch('https://dog.ceo/api/breeds/image/random');


const dogPoster = document.getElementById('dogPoster');

// Обработка fetch запроса
fetch('https://dog.ceo/api/breeds/image/random')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
        // Получили ответ вида
        /**
         * {
         *  message: "",
         *  status: "success"
         * }
         */

        console.log(data.message);
        dogPoster.setAttribute('src', data.message);
    });

