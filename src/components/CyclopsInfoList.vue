<template>
  <ul class="list-info">
    <li v-for="(infoVal, infoName, i) in items" :key="i">
      <div class="info-label">{{infoName}}</div>
      <div class="info-value">{{infoVal}}</div>
    </li>
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'cyclops-info-list',
  props: ['items']
}
</script>



