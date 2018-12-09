<template>
  <main class="list__main">
    <div class="list__main__row" v-for="item in items">
      <div class="list__main___row__item" v-for="value in item" v-bind:style="{ with: items.length + 'px' }">
        {{ value }}
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: "ListMain",
    components: {},
    props: {
      items: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .list__main__row {
    display: flex;

    &__item {
      width: 10px;
    }
  }
</style>
