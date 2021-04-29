<template>
  <div class="container" v-for="t in tusk" :key="t.id">
    <form @submit.prevent="editTusk">

      <div class="login-group">
        <label for="title">Заголовок</label>
        <input type="text" id="title" v-model="tuskTitle" />
      </div>

      <div class="login-group">
        <label for="date">Дата</label>
        <input type="date" id="date" v-model="tuskDate" />
      </div>

      <div class="login-group">
        <label for="text">Текст</label>
        <textarea id="text" cols="30" rows="10" v-model="tuskDescription"></textarea>
      </div>

      <button type="submit" class="btn-login">Править</button>
      <router-link style="margin-left:20px" to="/" class="btn-login">Назад</router-link>
      
      <button type="button" class="btn-login red" style="margin-left:20px" @click="deleteTusk(t.id)" >Удалить</button>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    tusk: [],
    tuskTitle: '',
    tuskDate: '',
    tuskDescription: '',
    tuskId: ''
  }),
  async mounted() {
    if(!Object.keys(this.$store.getters.tusks).length) {
      await this.$store.dispatch('getUserTusks')
    }
    this.tusk.push(this.tusks[this.$route.params.id])
    this.tuskTitle = this.tusk[0].title
    this.tuskDate = this.tusk[0].date
    this.tuskDescription = this.tusk[0].description
    this.tuskId = this.tusk[0].id
  },
  methods: {
    async deleteTusk(id) {
      await this.$store.dispatch('deleteTusk', id)
      this.$router.push('/')
    },
    async editTusk() {
      const editedTusk = {
        title: this.tuskTitle,
        date: this.tuskDate,
        description: this.tuskDescription,
        id: this.tuskId
      }
      await this.$store.dispatch('editTusk', editedTusk)
      this.$router.push('/')
    }
  },
  computed: {
    tusks() {
      return this.$store.getters.tusks
    },
  }
}
</script>

<style lang="less">
.create-page-wrapper {
  margin-top: 60px;
}
.create-page-wrapper form {
  margin-top: 40px;
  width: 60%;
  background-color: #fff;
  padding: 30px 20px;
  color: #000;
}
.btn-group{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.register-btn{
  display: inline-block;
  border-bottom: 2px solid #000;
  color: #000;
}
.input-error{
  margin-top: 5px;
  color: #ef2a2a;
}
.login-contaier {
  display: grid;
  height: 100vh;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
}
.login-form {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #6bd6ff;
}
.login-form h3{
  font-size: 24px;
  margin-bottom: 20px;
}
.login-group{
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
}
.login-group label{
  margin-bottom: 8px;
}
.login-group input{
  outline: none;
  padding: 10px;
  border: 2px solid #44cbff;
  background-color: rgba(255, 255, 255, .8);
}
.login-group textarea{
  outline: none;
  padding: 10px;
  border: 2px solid #44cbff;
  background-color: rgba(255, 255, 255, .8);
  resize: none;
}
.btn-login{
  padding: 8px 10px;
  font-size: 18px;
  font-weight: bold;
  border: 3px solid #6bd6ff;
  background:transparent;
  color: #6bd6ff;
  transition: all .4s ease;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif !important;
}
.btn-login:hover{
  color: #fff;
  background: #6bd6ff;
}

</style>