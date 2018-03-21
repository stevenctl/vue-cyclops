<template>
  <ul class="list-info">
    <li v-for="(value, name, i) in items" :key="i" v-if="items && items.length > 0">
      <div class="info-label">{{name}}</div>
      <div class="info-value">{{value}}</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'cyclops-info-list',
  props: ['items']
}
</script>



