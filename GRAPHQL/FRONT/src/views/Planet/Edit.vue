<template>
  <form v-on:submit="submitData">
    <label>Name : <input v-model="planet.name" /></label>

    <button type="submit">Edit</button>
  </form>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'PlanetEdit',
    props: {},
    async created() {
      await this.$store.dispatch('FETCH_PLANET', { id: this.$route.params.id })
      await this.$store.getters.GET_PLANET
    },
    computed: {
      ...mapState(['planet'])
    },
    methods: {
      async submitData(event) {
        event.preventDefault()
        console.log(this.planet)
        this.$data.planet = await this.$store.dispatch('UPDATE_PLANET', { id: this.planet.id, planet: { name: this.planet.name }})
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
