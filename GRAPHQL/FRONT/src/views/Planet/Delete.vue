<template>

</template>

<script>
  export default {
    name: 'PlanetDelete',
    async created() {
      await this.$store.dispatch('FETCH_PLANET', { id: this.$route.params.id })
      await this.$store.getters.GET_PLANET
      await this.$store.dispatch('DELETE_PLANET', { id: this.$route.params.id })
      this.$router.push({ name: 'planetList' })
    }
  }
</script>

<style lang="scss" scoped>

</style>
