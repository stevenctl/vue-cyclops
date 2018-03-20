<template>
  <svg class="cyclops-icon" aria-hidden="true"><use v-bind="{'xlink:href' : '#' + icon}"/></svg>
</template>

<script>
export default {
  name: 'cyclops-icon',
  props: ['icon'],
}
</script>



