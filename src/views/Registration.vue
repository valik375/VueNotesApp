<template>
  <div class="login-contaier">
    <div class="login-form">
      <form action="" @submit.prevent="userRegistration">
        <h3>Registration</h3>

        <div class="login-group">
          <label for="name">Name</label>
          <input type="name" id="name" v-model="name" />

          <small class="input-error" v-if="errors.eName">{{
            errors.eName
          }}</small>
        </div>

        <div class="login-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" />

          <small class="input-error" v-if="errors.eEmail">{{
            errors.eEmail
          }}</small>
        </div>
        <div class="login-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" />

          <small class="input-error" v-if="errors.ePassword">{{
            errors.ePassword
          }}</small>
        </div>

        <div class="login-group">
          <label for="passwor-repeat">Repeat password</label>
          <input type="password" id="passwor-repeat" v-model="repeatPassword" />

          <small class="input-error" v-if="errors.eIncorrectPassword">{{
            errors.eIncorrectPassword
          }}</small>
          <small class="input-error" v-if="errors.eRepeatPassword">{{
            errors.eRepeatPassword
          }}</small>
        </div>
        <div class="btn-group">
          <button class="btn-login" type="submit">Submit</button>
          <router-link class="register-btn" to="/login">Login</router-link>
        </div>
      </form>
    </div>
    <div class="login-image">
      <img src="../assets/undraw_Sign_in_re_o58h.svg" alt="Login image">
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
    errors: {
      eName: "",
      eEmail: "",
      ePassword: "",
      eRepeatPassword: "",
      eIncorrectPassword: "",
    },
  }),
  methods: {
    async userRegistration() {
      this.name.length <= 0
        ? (this.errors.eName = "Впишите данные в поле Name")
        : (this.errors.eName = "");
      this.email.length <= 0
        ? (this.errors.eEmail = "Впишите данные в поле Email")
        : (this.errors.eEmail = "");
      this.password.length <= 0
        ? (this.errors.ePassword = "Впишите данные в поле Password")
        : (this.errors.ePassword = "");
      this.repeatPassword.length <= 0
        ? (this.errors.eRepeatPassword =
            "Впишите данные в поле Repeat password")
        : (this.errors.eRepeatPassword = "");

      this.password !== this.repeatPassword
        ? (this.errors.eIncorrectPassword = "Впишите коректный пароль")
        : (this.errors.eIncorrectPassword = "");

      if (this.name && this.email && this.password === this.repeatPassword) {
        const createUser = {
          name: this.name,
          email: this.email,
          password: this.password,
        };
        try {
          await this.$store.dispatch("register", createUser);
          this.$router.push("/");
        } catch (e) { console.log(e);}
      }
    },
  },
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
.btn-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.register-btn {
  display: inline-block;
  border-bottom: 2px solid #000;
  color: #000;
}
.input-error {
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
.login-form form {
  width: 60%;
  background-color: #fff;
  padding: 30px 20px;
  color: #000;
}
.login-form h3 {
  font-size: 24px;
  margin-bottom: 20px;
}
.login-group {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
}
.login-group label {
  margin-bottom: 8px;
}
.login-group input {
  outline: none;
  padding: 10px;
  border: 2px solid #44cbff;
  background-color: rgba(255, 255, 255, 0.8);
}
.btn-login {
  padding: 8px 10px;
  font-size: 18px;
  font-weight: bold;
  border: 3px solid #6bd6ff;
  background: transparent;
  color: #6bd6ff;
  transition: all 0.4s ease;
  cursor: pointer;
  font-family: "Montserrat", sans-serif !important;
}
.btn-login:hover {
  color: #fff;
  background: #6bd6ff;
}
</style>