<script setup>
import CalculatorDisplay from './CalculatorDisplay.vue';
import CalculatorButton from './CalculatorButton.vue';
import { ref } from 'vue';

// Определяем переменные состояния
// за которыми будут следить компоненты Vue

// Отдельно создадим переменную состояния для 
// CalculatorDisplay, чтобы не смешивать 
// логику для переменных калькулятора и отображения
const displayValue = ref('0');

const selectedOperation = ref('');
const temp = ref('');
const firstArg = ref(0);

function addSymbolToTemp(symbol) {
    if (symbol === '0' && temp.value === '') return;

    temp.value += symbol;
    displayValue.value = temp.value;
}

// parseInt() - парсит значение строки в числовое значение
// аналог на питонячьем int()

function selectOperation(operationSymbol) {
    if (temp.value === '')
        firstArg.value = 0;
    else
        firstArg.value = parseInt(temp.value);
    selectedOperation.value = operationSymbol;
    temp.value = '';
    displayValue.value = '0';
}


function getResult() {
    const secondArg = parseInt(temp.value);
    
    // Оператор switch
    // на питонячьем будет как match
    switch(selectedOperation.value) {
        case '+':
            temp.value = firstArg.value + secondArg;
            displayValue.value = temp.value;
            break;

        case '-':
            temp.value = firstArg.value - secondArg;
            displayValue.value = temp.value;
            break;
    }

    firstArg.value = 0;
    selectOperation.value = '';
}

function cleanCalculator() {
    displayValue.value = '0';
    temp.value = '';
    selectOperation.value = '';
    firstArg.value = 0;
}

</script>

<template>
<div class="calculator">
    <div class="displayBlock">
        <CalculatorDisplay :value="displayValue" />
    </div>
    <div class="buttonsRow">
        <CalculatorButton value="7" :on-click="addSymbolToTemp" />
        <CalculatorButton value="8" :on-click="addSymbolToTemp" />
        <CalculatorButton value="9" :on-click="addSymbolToTemp" />
    </div>
    <div class="buttonsRow">
        <CalculatorButton value="4" :on-click="addSymbolToTemp" />
        <CalculatorButton value="5" :on-click="addSymbolToTemp" />
        <CalculatorButton value="6" :on-click="addSymbolToTemp" />
    </div>
    <div class="buttonsRow">
        <CalculatorButton value="1" :on-click="addSymbolToTemp" />
        <CalculatorButton value="2" :on-click="addSymbolToTemp" />
        <CalculatorButton value="3" :on-click="addSymbolToTemp" />
    </div>
    <div class="buttonsRow">
        <CalculatorButton value="+" :on-click="selectOperation" />
        <CalculatorButton value="0" :on-click="addSymbolToTemp" />
        <CalculatorButton value="-" :on-click="selectOperation" />
    </div>
    <div class="buttonsRow">
        <CalculatorButton value="c" :on-click="cleanCalculator"/>
        <CalculatorButton value="=" :on-click="getResult"/>
    </div>
</div>
</template>

<style scoped>
.calculator {
    width: 400px;
    padding: 10px;
    border: 1px solid #2c3e50;
    border-radius: 14px;
}

.displayBlock {
    margin-bottom: 5px;
}

.buttonsRow {
    display: flex;
    gap: 8px;
    padding: 5px 0;
}
</style>