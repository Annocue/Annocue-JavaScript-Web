<template>
  <section class="section">
    <div class="columns">
      <div class="column is-one-third">

        <div class="card">
          <div class="card-header is-centered">
            <h2 class="card-header-title is-centered">Please Login</h2>
          </div>
          <div class="card-content">
            <form v-on:submit.prevent>
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input class="input" type="email" v-model="email">
                </div>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <div class="control">
                  <input class="input" type="password" v-model="password">
                </div>
              </div>
              <button type="submit" class="button is-primary" v-on:click="signIn">Login</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import Firebase from 'firebase'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn () {
      Firebase.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            this.$router.replace('/dashboard')
          }
        )
        .catch(
          (error) => {
            console.log(error.code)
            console.log(error.message)
            this.$router.replace('/sign-in')
          }
        )
    }
  }
}
</script>
