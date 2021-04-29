<template>
  <div class="create-page-wrapper">
    <h1>Создать новую запись</h1>
    <form @submit.prevent="createNewTusk">

      <div class="login-group">
        <label for="title">Заголовок</label>
        <input type="text" id="title" v-model="title" />

        <small class="input-error" v-if="errors.eTitle" >{{errors.eTitle}}</small>
      </div>

      <div class="login-group">
        <label for="date">Дата</label>
        <input type="date" id="date" v-model="date" />

        <small class="input-error" v-if="errors.eDate" >{{errors.eDate}}</small>
      </div>

      <div class="login-group">
        <label for="text">Текст</label>
        <textarea id="text" cols="30" rows="10" v-model="description"></textarea>
        <small class="input-error" v-if="errors.eDescription" >{{errors.eDescription}}</small>
      </div>

      <button type="submit" class="btn-login">Создать</button>
      <router-link style="margin-left:20px" to="/" class="btn-login">Назад</router-link>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: '',
    date: '',
    description: '',
    id: Date.now(),
    errors: {
      eTitle: '',
      eDate: '',
      eDescription: ''
    }
  }),
  methods: {
    async createNewTusk() {

      this.title.length <= 0 ? (this.errors.eTitle = "Впишите данные в поле Title") : (this.errors.eTitle = "");
      this.date.length <= 0 ? (this.errors.eDate = "Впишите данные в поле Date") : (this.errors.eDate = "");
      this.description.length <= 0 ? (this.errors.eDescription = "Впишите данные в поле Description") : (this.errors.eDescription = "");

      if (this.title && this.date && this.description) {
        const newTusk = {
          title: this.title,
          date: this.date,
          description: this.description,
          id: this.id,
        }
        await this.$store.dispatch('createTusk', newTusk)
        this.$router.push('/')
      }

      
    }
  }
};
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