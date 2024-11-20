// Функции

// Простая функция
// Лучше не использовать в классах
function handleClick(arg) {
    // Тело функции
    return;
}

handleClick(123) // Круглые скобки в конце названия функции - оператор вызова функции

// Литерал функции
// Лучше не использовать в классах
const handleMouseMove = function(arg) {
    // Тело функции
    return undefined; // когда не пишем return, он есть по-умолчанию
}

handleMouseMove(123)

// Стрелочные функции
// Можно использовать в классах
const handleDoubleClick = (arg) => { // => - это опертор return
    // this работает как во всем мире программирования
    console.log('Hello arrow function');
    return;
}

// Еще один вид стрелочной функции
const getSum = (a, b) => a + b;


// CALLBACK - Обратный вызов

function showTitle(getTitle) {
    const title = getTitle();
    console.log(title);
}

const getTitleForCar = () => 'Super Car!';

const getTiteleForJupiter = (fn) => {
    console.log('Loading data');
    return 'Big planet';
}

// Базовый пример
showTitle(getTitleForCar);
showTitle(getTiteleForJupiter);

// Пример с callback
// button.addEventListener('click', handleClick);