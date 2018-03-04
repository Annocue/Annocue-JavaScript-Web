<template>
  <div class="connections">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Connections',
  data () {
    return {
      msg: 'Your connections must have an email, handle or phone number'
    }
  }
}
</script>
