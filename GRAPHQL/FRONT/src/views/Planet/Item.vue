<template>
  <div>
    {{planet.id}}
    {{planet.name}}
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'PlanetItem',
    components: {},
    props: {},
    async created() {
      await this.$store.dispatch('FETCH_PLANET', { id: this.$route.params.id })
      await this.$store.getters.GET_PLANET_KEYS
    },
    computed: {
      ...mapState(['planet'])
    }
  }
</script>

<style scoped>

</style>
