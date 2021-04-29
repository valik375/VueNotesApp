<template>
  <div class="home-page-container">
    <h1>Здавствуйте {{name}}, здесь все ваши записи</h1>
    
    <div class="tusks-wrapper" v-if="tusks !== null">
      <TuskComponent
        v-for="tusk in tusks" 
        :key="tusk.id"
        :id="tusk.id"
        :title="tusk.title"
        :date="tusk.date"
        :description="tusk.description"
      />
    </div>
    <p v-else class="none-tusks">Записей пока нет</p>
  </div>
</template>

<script>
import TuskComponent from '../components/TuskComponent.vue'

export default {
  data: () => ({
    
  }),
  async mounted() {
    
    if(!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch('getUserName')
    }
    if(!Object.keys(this.$store.getters.tusks).length) {
      await this.$store.dispatch('getUserTusks')
    }
  },
  computed: {
    tusks() {
      return this.$store.getters.tusks
    },
    name() {
      return this.$store.getters.info.name
    }
  },
  components: {
    TuskComponent
  }
}
</script>

<style lang="less">
.none-tusks{
  width: 100%;
  margin-top: 40px;
  text-align: center;
}
.btn-tusk {
  display: inline-block;
  color: #fff;
  border: 3px solid #fff;
  padding: 8px 12px;
  transition: all .4s ease;
  background-color: transparent;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
}
.red{
  color: red !important;
  border: 3px solid red !important;
}
.red:hover{
  color: #fff !important;
  background: red !important;
}
.btn-tusk:hover {
  color: #55b0d3;
  background: #fff;
}
.home-page-container {
  margin-top: 60px;
}
.tusks-container{
  margin-top: 40px;
  width: 100%;
  height: 100%;
}
.tusk-item{
  width: 100%;
  padding: 30px;
  background-color: #55b0d3;
  margin-bottom: 30px;
  border-radius: 10px;
  box-shadow: 2px 2px 4px 1px rgba(34, 60, 80, 0.2);
  color: #fff;
}
.tusk-item h3{
  font-size: 24px;
  margin-bottom: 10px;
}
.tusk-item .tusk-date{
  font-size: 16px;
  margin-bottom: 20px;
  font-weight: 500;
}
.tusk-item .tusk-description{
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: 500;
  text-overflow: ellipsis; 
  width: 100%; 
  white-space: nowrap; 
  overflow:hidden;
}
.tusk-description.show{
  text-overflow: unset;
  white-space: initial;
}
</style>