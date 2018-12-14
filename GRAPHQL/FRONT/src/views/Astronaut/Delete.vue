<template>

</template>

<script>
  export default {
    name: 'AstronautDelete',
    async created() {
      await this.$store.dispatch('FETCH_ASTRONAUT', { id: this.$route.params.id })
      await this.$store.getters.GET_ASTRONAUT
      await this.$store.dispatch('DELETE_ASTRONAUT', { id: this.$route.params.id })
      this.$router.push({ name: 'astronautList' })
    }
  }
</script>

<style lang="scss" scoped>

</style>
