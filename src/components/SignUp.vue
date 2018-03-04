<template>
  <section class="section">
    <div class="columns">
      <div class="column is-one-third">

        <div class="card">
          <div class="card-header is-centered">
            <h2 class="card-header-title is-centered">Create an Account</h2>
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
              <button type="submit" class="button is-primary" v-on:click="signUp">Submit</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import Firebase from 'firebase'
import { utility } from '../utility'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp () {
      Firebase.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            let userId = Firebase.auth().currentUser.uid
            let docId = utility.uuidv4()
            console.log('userId', userId)
            console.log('docId', docId)

            this.$store.getters.getDb.collection('users').doc(docId)
              .set({
                userId,
                docId,
                email: this.email,
                phone: null,
                handle: null,
                preferences: null,
                templates: null,
                scripts: null,
                chats: null,
                events: null,
                messages: null,
                links: null,
                connections: null
              })
              .then(() => {
                console.log('User document successfuly created: ', docId)
                this.$router.replace('/dashboard')
              })
          }
        )
        .catch(
          (error) => {
            console.log(error.code)
            console.log(error.message)
            this.$router.replace('/sign-up')
          }
        )
    }
  }
}
</script>
