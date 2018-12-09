<template>
  <section class="list">
    <ListHeader :item-keys="Object.keys(items[0])"/>
    <ListMain :items="items" />
    <!--<footer class="list-footer">-->

    <!--</footer>-->
  </section>
</template>

<script>
import ListHeader from './Header'
import ListMain from './Main'

export default {
  name: 'List',
  components: {
    ListHeader,
    ListMain
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
