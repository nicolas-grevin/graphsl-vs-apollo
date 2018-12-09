<template>
  <div>
    {{astronaut.id}}
    {{astronaut.firstname}}
    {{astronaut.lastname}}
    {{astronaut.email}}
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'AstronautItem',
    components: {},
    props: {},
    async created() {
      await this.$store.dispatch('FETCH_ASTRONAUT', { id: this.$route.params.id })
      await this.$store.getters.GET_ASTRONAUT
    },
    computed: {
      ...mapState(['astronaut'])
    }
  }
</script>

<style scoped>

</style>
