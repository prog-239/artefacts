const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const login = loginForm['login'].value;
    const pass = loginForm['pass'].value;

    console.log('Отправилось', login, pass);

    const loginData = {
        login,
        pass,
    };

    fetch('https://example.nothing/api/login', {
        method: 'POST',
        body: s(loginData),
    })
    .then(() => {})
    .catch((error) => { console.error(error) });
});

