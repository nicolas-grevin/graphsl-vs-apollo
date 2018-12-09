<template>
  <header class="list__header">
    <div class="list__header__item-key" :key="key" v-for="(itemKey, key) in itemKeys">{{ itemKey }}</div>
  </header>
</template>

<script>
  export default {
    name: 'ListHeader',
    props: {
      itemKeys: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .list__header {
    display: flex;

    &__item-key {
      flex-grow: 1;
    }
  }
</style>
