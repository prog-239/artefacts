<script setup>
defineProps({
    value: String,
});
</script>

<template>
<p class="display">{{ value }}</p>
</template>

<style scoped>
.display {
    margin: 0;
    text-align: right;
    padding: 5px 10px;
    font-size: 30px;
    border: 1px solid #2c3e50;
    border-radius: 14px;
}
</style>