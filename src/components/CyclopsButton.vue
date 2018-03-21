<template>
  <button 
    @click="doOnClick()"
    :class="cssClass"
    v-if="!showConfirm">
     <slot></slot>
  </button>
  <div v-else class="confirmation-container" style="float: none; opacity: 1;">
    <span class="message">Are you sure?</span>
    <button @click="showConfirm=false" class="btn btn-default no">NO</button>
    <button @click="showConfirm=false; $emit('click')" class="yes btn btn-danger">YES</button>
  </div>
</template>

<script>
var types = ['default', 'primary', 'warning', 'danger', 'inverse', 'outline', 'link']
var sizes = ['lg', 'sm', 'mini']


export default {
  name: 'cyclops-button',
  props: [...types, ...sizes, 'block', 'icon', 'confirm'],
  data:() => {return { showConfirm: false }},
  methods: {
      doOnClick(){
        if(this.$props.confirm != undefined) {
          this.$data.showConfirm = true;
        } else {
          this.$emit('click');
        }
      }
  },
  computed: {
      cssClass(){
          console.log(this.$props)
          var color = types.find((t) => this.$props[t] != undefined)
          var size = sizes.find((t) => this.$props[t] != undefined)
          return "btn" 
                    + (color ? " btn-" + color : "")
                    + (size ? " btn-" + size : "")
                    + (this.block != undefined ? " btn-block" : "")
                    + (this.icon != undefined ? " btn-icon" : "")
      }
  }
}
</script>