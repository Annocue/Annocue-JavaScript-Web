<template>
  <header>
    <nav>
      <router-link to="/" v-if="!user">Home</router-link>
      <router-link to="dashboard" v-if="user">Dashboard</router-link>
      <router-link to="chats" v-if="user">Chats</router-link>
      <router-link to="events" v-if="user">Events</router-link>
      <router-link to="messages" v-if="user">Messages</router-link>
      <router-link to="links" v-if="user">Links</router-link>
      <router-link to="connections" v-if="user">Connections</router-link>
      <router-link to="sign-in" v-if="!user">Sign-in</router-link>
      <router-link to="sign-up" v-if="!user">Sign-up</router-link>
      <a v-on:click="signOut" v-if="user">Sign-out</a>
    </nav>
  </header>
</template>

<script>
import Firebase from 'firebase'

export default {
  computed: {
    user () {
      return this.$store.getters.getUser
    }
  },
  methods: {
    signOut () {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.$router.replace('sign-in')
        })
    }
  }
}
</script>
