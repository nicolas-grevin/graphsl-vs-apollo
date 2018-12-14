<template>
  <form v-on:submit="submitData">
    <label>Name : <input v-model="name" /></label>

    <button type="submit">Create</button>
  </form>
</template>

<script>
  export default {
    name: 'PlanetNew',
    data() {
      return {
        name: ''
      }
    },
    methods: {
      async submitData(event) {
        event.preventDefault()
        await this.$store.dispatch('CREATE_PLANET', { planet: { name: this.$data.name }})
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
