<script setup>
import { ref } from 'vue';

const loginModel = defineModel('loginModel');
const passwordModel = defineModel('passwordModel');

const errorMessage = ref('');

function handleSubmit(event) {
  event.preventDefault();

  const isValidData = loginModel.value !== undefined && passwordModel.value !== undefined
    && (loginModel.value.length >= 3 && passwordModel.value.length >= 6);

  if (isValidData) {
    console.log(loginModel.value, passwordModel.value);
    errorMessage.value = '';
  } else {
    errorMessage.value = 'Слишком короткие данные';
  }
}
</script>

<template>
 <form @submit="handleSubmit">
  <div>
    <input type="text" v-model="loginModel" />
  </div>
  <div>
    <input type="password" v-model="passwordModel" />
  </div>
  <div>
    <button type="submit">Войти</button>
  </div>
  <p style="color: red">{{ errorMessage }}</p>
 </form>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
