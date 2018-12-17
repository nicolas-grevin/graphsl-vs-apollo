<template>
  <div class="astronauts">
    <h1>astronauts</h1>
    <router-link :to="{name: 'astronautNew' }">New Astronaut</router-link>
    <Table v-if="astronauts" :items="astronauts" route-item="astronautItem" />
    <div>
      <!--<p>{{ numberPage }}</p>-->
      <!--<p>{{ numberAstronauts }}</p>-->
      <div>
        <!--<Paginate-->
          <!--:page-count="numberPage"-->
          <!--:click-handler="changePage"-->
          <!--:prev-text="'Prev'"-->
          <!--:next-text="'Next'"-->
          <!--:container-class="'className'"-->
        <!--/>-->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Table from '@/components/Table'
import Paginate from 'vuejs-paginate'

export default {
  name: 'AstronautList',
  components: {
    Table,
    Paginate
  },
  data() {
    return {
      offset: 0,
      limit: 20
    }
  },
  created() {
    this.$store.dispatch('astronauts/fetchAstronauts', { offset: this.$data.offset, limit: this.$data.limit })
  },
  computed: {
    ...mapState({
      astronauts: state => state.astronauts.astronauts
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
