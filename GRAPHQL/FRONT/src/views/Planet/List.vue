<template>
  <div class="planets">
    <h1>Planets</h1>
    <router-link :to="{name: 'planetNew' }">New Planet</router-link>
    <Table :items="planets" :keys="planetKeys" />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Table from '@/components/Table'

  export default {
    name: 'PlanetList',
    components: {
      Table
    },
    props: {},
    data() {
      return {
        offset: 0,
        limit: 10,
      }
    },
    async created() {
      await this.$store.dispatch('FETCH_PLANETS')
      await this.$store.getters.GET_PLANETS
      await this.$store.getters.GET_PLANET_KEYS
    },
    computed: {
      ...mapState(['planets', 'planetKeys'])
    }
  }
</script>

<style scoped>

</style>
