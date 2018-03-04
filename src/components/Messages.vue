<template>
  <div class="messages">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Messages',
  data () {
    return {
      msg: 'Select a message and continue the conversation'
    }
  }
}
</script>
