<template>
  <button @click="$emit('click')" :class="cssClass"><slot></slot></button>
</template>

<script>
var types = ['default', 'primary', 'warning', 'danger', 'inverse', 'outline', 'link']
var sizes = ['lg', 'sm', 'mini']


export default {
  name: 'cyclops-button',
  props: [...types, ...sizes],
  computed: {
      cssClass(){
          console.log(this.$props)
          var color = types.find((t) => this.$props[t] != undefined)
          var size = sizes.find((t) => this.$props[t] != undefined)
          return "btn" 
                    + (color ? " btn-" + color : "")
                    + (size ? " btn-" + size : "")
      }
  }
}
</script>

