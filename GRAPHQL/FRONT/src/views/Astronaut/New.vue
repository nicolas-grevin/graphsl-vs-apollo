<template>
  <form v-on:submit="submitData">
    <div v-if="error" class="error">{{error}}</div>
    <label>Firstname : <input v-model="firstname" /></label>
    <label>Lastname : <input v-model="lastname" /></label>
    <label>Email : <input v-model="email" /></label>

    <button type="submit">Create</button>
  </form>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AstronautNew',
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      planets: [],
      error: undefined,
    }
  },
  computed: {
    ...mapGetters({
      getAstronaut: 'astronauts/getAstronaut'
    })
  },
  methods: {
    async submitData(event) {
      event.preventDefault()
      try {
        await this.$store.dispatch('astronauts/createAstronaut', { astronaut: { firstname: this.$data.firstname, lastname: this.$data.lastname, email: this.$data.email }})
        this.$router.push({ name: 'astronautItem', params: { id: this.getAstronaut.id }})
      } catch (e) {
        console.log(e);
        this.error = e.message;
      }

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
