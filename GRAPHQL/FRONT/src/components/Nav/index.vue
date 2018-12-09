<template>
  <ul>
    <li v-for="(route, key) in routes" :key="key">
      <router-link :to="route.path" v-if="route.enableToNav">{{ route.name }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    routes: Array
  }
}
</script>

<style lang="scss" scoped>

</style>
