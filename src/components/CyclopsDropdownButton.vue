<template>
  <div class="dropdown">
    <button type="button" class="btn btn-default">
      {{optionText(this.value)}}
      <cyclops-icon icon="icon-caret-down"></cyclops-icon>
    </button>
    <ul class="dropdown-menu">
      <li v-for="option in options" @click="selectOption(option)">
        <a>{{optionText(option)}}</a>
      </li>
    </ul>
  </div>
</template>
<script>
import CyclopsIcon from "./CyclopsIcon";

export default {
  components: {CyclopsIcon},
  name: "dropdown-button",
  props: ['options', 'value'],
  updated(){
    $('.dropdown').dropdown();
  },
  methods: {
    selectOption(option){
      this.showDropdown = false;
      this.$emit('input', option);
    },
    optionText(option){
      return (option["label"] || option)
    }
  }
}
</script>

