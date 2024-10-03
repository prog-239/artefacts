<script setup>
defineProps({
    value: String,
    onClick: Function, // Определили callback функцию для обрабоатки кликов по кнопкам
});
</script>

<template>
<button class="button" @click="onClick(value)">
    {{ value }}
</button>
</template>

<style scoped>
.button {
    display: flex;
    font-size: 26px;
    justify-content: center;
    align-items: center;
    height: 60px;
    border: 1px solid #2c3e50;
    border-radius: 14px;
    flex: 1;
    background-color: #181818;
    color: rgba(235, 235, 235, 0.64);
    cursor: pointer;
}
</style>