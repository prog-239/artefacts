class Car {
    constructor(wheelsCount) {
        this.wheelsCount = wheelsCount;
    }

    // Вот с этим примером ошибка
    // diagnostic = function () {
    //     console.log(this.wheelsCount)
    // }

    // Стрелочные функции
    diagnostic = () => {
        console.log(this.wheelsCount)
    }
}

class AutoBox {
    diagnosticCar(fnDiagnostic) {
        fnDiagnostic();
    }
}

const lada = new Car(4);
const garage = new AutoBox();

garage.diagnosticCar(lada.diagnostic);
