<template>
  <div class="tusks-container">
    <div class="tusk-item">
      <h3>{{ title }}</h3>
      <p class="tusk-date">Date: {{ date }}</p>
      <p class="tusk-description" :class="showText ? 'show' : ''">
        Description: {{ description }}
      </p>
      <router-link :to="'/tusk/' + id" class="btn-tusk">Редактировать</router-link>
      <button v-if="textLength" style="margin-left: 20px" class="btn-tusk" @click="showText = !showText">Показать текст</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'title', 'description', 'date'],
  data: () => ({
    showText: false,
  }),
  computed: {
    textLength() {
      return this.description.length > 106
    }
  }
};
</script>