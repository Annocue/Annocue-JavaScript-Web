<template>
  <main id="app" class="section">
    <!-- <img src="./assets/logo.png"> -->
    <h1 style="font-style: italic; color: Crimson">Annocue</h1>
    <nav-main></nav-main>
    <router-view></router-view>
  </main>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'app',
  components: {
    navMain: Header
  },
  methods: {
    setUser () {
      this.$store.dispatch('setUser')
    },
    setDb () {
      this.$store.dispatch('setDb')
    },
    setDocId () {
      this.$store.dispatch('setDocId')
    }
  },
  created () {
    // when the app is created run the set user method
    // this uses Vuex to check if a user is signed in
    // check out mutations in the store.js file
    this.setUser()
    this.setDb()
    this.setDocId()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
