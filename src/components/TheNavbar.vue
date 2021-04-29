<template>
  <header>
    <nav class="navbar">
      <h3 class="logo">Logo</h3>
      <ul class="navbar-items">
        <li>
          <router-link to="/">Записи</router-link>
        </li>
        <li>
          <router-link to="/create">Создать запись</router-link>
        </li>
        <li class="exit" @click="logout">
          <a>Выход</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.push('/login')
    },
  }
}
</script>

<style lang="less">
.exit {
  cursor: pointer;
}
</style>
