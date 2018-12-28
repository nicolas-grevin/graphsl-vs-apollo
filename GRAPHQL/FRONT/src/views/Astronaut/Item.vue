<template>
  <ul>
    <li><span>id : </span>{{astronaut.id}}</li>
    <li><span>firstname : </span>{{astronaut.firstname}}</li>
    <li><span>lastname : </span>{{astronaut.lastname}}</li>
    <li><span>email : </span>{{astronaut.email}}</li>
  </ul>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'AstronautItem',
    components: {},
    props: {},
    data() {
      return {
        astronaut: undefined,
      }
    },
    computed: {
      ...mapGetters({
        getAstronaut: 'astronauts/getAstronaut'
      })
    },
    async created() {
      if (this.getAstronaut === undefined) {
        // fetch astronaut
      } else {
        this.astronaut = this.getAstronaut
      }
    },
  }
</script>

<style scoped>

</style>
