<template>
  <section class='section'>
    <div>
      <!-- <form v-on:submit.prevent> -->
        <label class='label'>{{ msg }}</label>
        <div>
          <input type='checkbox' id='checkbox' v-model='checked'>
          <label for='checkbox'>{{ checked }}</label>
        </div>
        <div>
          <textarea
            v-model='scripts'
            placeholder='enter your scripts JSON object here'
            cols='100'
            rows='10'>
          </textarea>
        </div>
        <div>
          <textarea
            v-model='templates'
            placeholder='enter your HTML templates here'
            cols='100'
            rows='20'>
          </textarea>
        </div>
        <button type='submit' class='button is-primary' v-on:click='save'>Save</button>
      <!-- </form> -->
    </div>
  </section>
</template>

<script>

export default {
  name: 'Dashboard',
  data () {
    return {
      msg: 'Welcome to your dashboard!',
      checked: true,
      templates: null,
      scripts: null
    }
  },
  methods: {
    save () {
      let docId = this.$store.getters.getDocId

      if (docId !== null && this.templates !== null && this.scripts !== null) {
        this.$store.getters.getDb.collection('users').doc(docId)
          .update({
            templates: this.templates,
            scripts: this.scripts
          })
          .then((docRef) => {
            console.log('User document successfuly updated: ', docId)
          })
          .catch((error) => {
            console.error('Error updating document: ', error)
          })
      }
    }
  }
}
</script>
