<template>
  <div class="chats">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Chats',
  data () {
    return {
      msg: 'Select a chat below'
    }
  }
}
</script>
