<template>
  <div class="astronauts">
    <h1>astronauts</h1>
    <router-link :to="{name: 'astronautNew' }">New Astronaut</router-link>
    <!--<div>{{ astronaut }}</div>-->
    <!--<List :items="astronauts" />-->
    <Table :items="astronauts" :keys="astronautKeys" route-item="astronautItem" />
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

import Action from '@/components/Table/Action';

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
  async created() {
    await this.$store.dispatch('FETCH_ASTRONAUTS', { offset: this.$data.offset, limit: this.$data.limit })
    await this.$store.getters.GET_ASTRONAUTS
    await this.$store.getters.GET_ASTRONAUT_KEYS
  },
  computed: {
    ...mapState(['astronauts', 'astronautKeys'])
  }
}
</script>

<style lang="scss" scoped>

</style>
