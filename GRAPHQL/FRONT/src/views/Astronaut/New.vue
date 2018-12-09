<template>
  <form v-on:submit="submitData">
    <label>Firstname : <input v-model="firstname" /></label>
    <label>Lastname : <input v-model="lastname" /></label>
    <label>Email : <input v-model="email" /></label>

    <button type="submit">Create</button>
  </form>
</template>

<script>
export default {
  name: 'AstronautNew',
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      planets: [],
    }
  },
  methods: {
    async submitData(event) {
      event.preventDefault()
      await this.$store.dispatch('CREATE_ASTRONAUT', { astronaut: { firstname: this.$data.firstname, lastname: this.$data.lastname, email: this.$data.email }})
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
