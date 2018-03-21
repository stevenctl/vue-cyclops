<template>
  <svg :class="cssClass" aria-hidden="true"><use v-bind="{'xlink:href' : '#' + icon}"/></svg>
</template>

<script>
var types = ['warning', 'danger', 'green', 'info']
var sizes = ['md', 'lg', 'xl']
export default {
  name: 'cyclops-icon',
  props: [...types, ...sizes, 'icon', 'spin'],
  computed: {
    cssClass(){
      var color = types.find((t) => this.$props[t] != undefined)
      var size = sizes.find((s) => this.$props[s] != undefined)
      return "cyclops-icon" + 
                (color ? " " + color : "")
                + (size ? " " + size : "")
                + (this.spin != undefined ? " cyclops-spin" : "")
    }
  }
}
</script>



