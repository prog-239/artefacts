const metricBox = document.getElementById('metricBox');
const detectBtn = document.getElementById('detectBtn');
const display = document.getElementById('display');

let inCard = false;
let inButton = false;
let coords = [0, 0];

const displayMetrics = () => {
    // console.log(coords, inCard, inButton);

    display.innerText = `
        Координаты курсора X:${coords[0]} Y:${coords[1]} \n
        Курсор на карточке: ${inCard} \n
        Курсор на кнопке: ${inButton}
    `;
}

metricBox.addEventListener('mousemove', (event) => {
    coords[0] = event.offsetX;
    coords[1] = event.offsetY;
    inCard = true;
    displayMetrics();
});

metricBox.addEventListener('mouseleave', () => {
    coords = [0, 0];
    inCard = false;
    displayMetrics();
});

detectBtn.addEventListener('mouseenter', () => {
    inButton = true;
    displayMetrics();
});

detectBtn.addEventListener('mouseleave', () => {
    inButton = false;
    displayMetrics();
});