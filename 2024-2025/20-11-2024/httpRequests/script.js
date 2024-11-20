const dogPoster = document.getElementById('dogPoster');
const refreshButton = document.getElementById('refreshButton');

function fetchRandomDogPoster() {
    refreshButton.innerText = 'Загрузка...';

    fetch('https://dog.ceo/api/breeds/image/random')
        .then((res) => res.json())
        .then((data) => {
            dogPoster.src = data.message;
            refreshButton.innerText = 'Обновить';
        });
}

refreshButton.addEventListener('click', fetchRandomDogPoster);