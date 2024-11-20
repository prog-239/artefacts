// Очень старый пример для объявления классов

function Car(wheelsCount) {
    this.wheelsCount = wheelsCount;
}

Car.prototype.ride = function() {
    console.log('ride');
}

const lada = new Car(4);

console.log(lada.wheelsCount);
lada.ride();
