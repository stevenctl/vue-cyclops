<template>
  <ol v-if="this.ordered != undefined" :class="cssClass">
    <li v-for="(item, i) in items" :key="i" v-if="items && items.length > 0">
      {{item}}
    </li>
    <slot></slot>
  </ol>
  <ul v-else :class="cssClass">
    <li v-for="(item, i) in items" :key="i" v-if="items && items.length > 0">
      {{item}}
    </li>
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'cyclops-list',
  props: ['ordered', 'unordered', 'unstyled', 'inline', 'comma', 'items'],
  computed: {
    cssClass(){
          return (this.unstyled != undefined ? "list-unstyled" : "")
                 + (this.inline != undefined ? " list-inline" : "")
                 + (this.comma != undefined ? " list-comma" : "")
                    
      }
  }
}
</script>



