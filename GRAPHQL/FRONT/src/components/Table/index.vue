<template>
  <table>
    <thead>
      <tr>
        <th v-for="itemKey in keys">{{ itemKey }}</th>
      </tr>
    </thead>

    <tbody>
      <tr :key="item.id" v-for="(item, itemKey) in items">
        <td v-for="(value, key) in item">
          <router-link v-if="key === 'id' && item.actions.show !== undefined" :to="{ name: item.actions.show.name, params: item.actions.show.params }">{{ itemKey + 1 }}</router-link>
          <template v-if="key === 'id' && item.actions.show === undefined">{{ itemKey }}</template>
          <template v-if="key !== 'id' && key !== 'actions'">{{ value }}</template>
          <template v-if="key === 'actions'">
            <router-link v-for="action in item.actions" :to="{ name: action.name, params: action.params }">{{ action.name }}</router-link>
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import Action from './Action'

  export default {
    name: 'Table',
    components: {},
    props: {
      items: {
        type: Array,
        default: [],
        required: true
      },
      keys: {
        type: Array,
        default: [],
        required: true
      },
      routeItem: {
        type: String,
        default: undefined
      },
      actions: {
        type: Action
      }
    },
  }
</script>

<style scoped>
  table {
    width: 100%;
  }
</style>
