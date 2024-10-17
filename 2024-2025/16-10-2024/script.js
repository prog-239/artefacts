// document - это объект JavaScript, который является html-страницей
// getElementById("значение из id, который указан для тега") - метод, который вернет в JavaScript ссылку на html-элемент

const square = document.getElementById("square"); // получаем ссылку на html-элемент с id "square"

/**
 * Схема создание обработчика событий
 * 
 * htmlElement.addEventListener("click", function() { 
 *    тут код для события, который будет выполняться при каждом
 *    нажатии на объект
 * }) 
 */

let count = 0;

square.addEventListener("click", function() {
    // console.log('click!');
    // count++;
    // console.clear();
    // count += 1;
    // console.log(count);

    square.classList.toggle("squareTurned");
});
