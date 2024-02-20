<script setup>
import { onMounted, ref, defineModel } from 'vue';

const profilesData = ref({ count: 0, profiles: [] }); // count - number and profiles - array

// function fetchAllProfiles() {
//   fetch('/api/profiles', { method:'GET' })
//       .then((response) => response.json())
//       .then((data) => {
//           profilesData.value = data;// count - number and profiles - array
//       });
// }

// onMounted(() => {
//   fetchAllProfiles();
// });

const searchWithButtonModel = defineModel('formButton');
const inlineSearchModel = defineModel('inlineSearch');

function searchProfiles(search) {
  fetch('/api/profiles?search=' + search, { method:'GET' })
    .then((response) => response.json())
    .then((data) => {
      profilesData.value = data;
    });
}

function handleSearchButton() {
  searchProfiles(searchWithButtonModel.value);
}

function handleInputSearch() {
  searchProfiles(inlineSearchModel.value);
}
</script>

<template>
  <div class="container">
    <div class="forms">
      <form class="searchForm formWithButton" @submit.prevent>
        <input 
          class="searchField"
          type="text" 
          name="search" 
          placeholder="Введите" 
          autocomplete="off"
          v-model="searchWithButtonModel"
        >
        <button @click="handleSearchButton">Найти</button>
      </form>
  
      <form class="searchForm">
        <input 
          class="searchField"
          type="text" 
          name="search" 
          placeholder="Введите" 
          autocomplete="off"
          v-model="inlineSearchModel"
          @input="handleInputSearch"
        >
      </form>
      <p>Количество результатов {{ profilesData.count }}</p>
    </div>
    
    <div class="results">
      <div v-for="profile in profilesData.profiles" class="resultCard">
        {{ profile.fullname }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
}

.forms {
  position: sticky;
  backdrop-filter: blur(10px);
  top: 0;
  padding: 10px 5px;
}

.searchForm {
  background-color: #303133;
  border-radius: 8px;
  border: 2px solid #51425f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px 10px 5px;
  height: 44px;
  box-sizing: border-box;
}

.searchForm button {
  height: 30px;
  color: #e0e0e0;
  background-color: transparent;
  border: none;
  cursor: pointer;

}

.formWithButton {
  margin-bottom: 40px;
  padding-right: 5px;
}

.searchField {
  flex: 1;
  border: none;
  background-color: transparent;
}

.results {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  max-width: 500px;
  margin: auto;
}

.resultCard {
  background-color: #28292b;
  border-radius: 10px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  text-align: center;
}
</style>
