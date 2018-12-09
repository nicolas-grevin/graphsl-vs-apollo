<template>
  <form v-on:submit="submitData">
    <label>Firstname : <input v-model="astronaut.firstname" /></label>
    <label>Lastname : <input v-model="astronaut.lastname" /></label>
    <label>Email : <input v-model="astronaut.email" /></label>

    <button type="submit">Edit</button>
  </form>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'AstronautEdit',
    props: {},
    async created() {
      await this.$store.dispatch('FETCH_ASTRONAUT', { id: this.$route.params.id })
      await this.$store.getters.GET_ASTRONAUT
    },
    computed: {
      ...mapState(['astronaut'])
    },
    methods: {
      async submitData(event) {
        event.preventDefault()
        console.log(this.astronaut)
        this.$data.astronaut = await this.$store.dispatch('UPDATE_ASTRONAUT', { id: this.astronaut.id, astronaut: { firstname: this.astronaut.firstname, lastname: this.astronaut.lastname, email: this.astronaut.email }})
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
