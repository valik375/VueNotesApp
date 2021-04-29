<template>
  <div class="login-contaier">
    <div class="login-form">
      <form action="" @submit.prevent="submitHandler">
        <h3>Login</h3>
        <div class="login-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="getEmail">

          <small class="input-error" v-if="eEmail.length">{{eEmail}}</small>

        </div>
        <div class="login-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="getPassword">

          <small class="input-error" v-if="ePassword.length">{{ePassword}}</small>

        </div>
        <div class="btn-group">
          <button class="btn-login" type="submit" :disabled="formValidation">Submit</button>
          <router-link class="register-btn" to="/register">Registration</router-link>
        </div>

      </form>
    </div>
    <div class="login-image">
      <img src="../assets/undraw_Login_re_4vu2.svg" alt="Login image">
    </div>
  </div>
</template>

<script>

export default {
  data: () => ({
    getEmail: '',
    getPassword: '',
    eEmail: '',
    ePassword: ''
  }),
  methods: {
    async submitHandler() {
      if(this.getEmail.length <= 0) {
        this.eEmail = 'Заполните поле Email'
      } else {
        this.eEmail = ''
      }
      if(this.getPassword.length <= 0) {
        this.ePassword = 'Заполните поле Password'
      } else {
        this.ePassword = ''
      }

      if(this.getEmail.length > 0 && this.getPassword.length > 0) {
        const formData = { 
          email: this.getEmail,
          password: this.getPassword
        }
        try {
          await this.$store.dispatch('login', formData)
          this.$router.push('/')
        }catch(e) {}
      }
    }
  },
  computed: {
    formValidation() {
      return this.getEmail.length <= 0 && this.getPassword.length <= 0
    }
  }
};
</script>

<style lang="less">

.login-image{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-image img {
  width: 80%;
  object-fit: contain;
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
.login-form form{
  width: 60%;
  background-color: #fff;
  padding: 30px 20px;
  color: #000;
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
