<template>
  <div class="dropdown">
    <button type="button" @click="showDropdown = true" class="btn btn-default">
      {{optionText(selectedOption)}}
      <cyclops-icon icon="icon-caret-down"></cyclops-icon>
    </button>
    <ul :style="showDropdown && 'display: block'" class="dropdown-menu">
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
  beforeMount(){
    this.selectedOption = this.value
  },
  data(){
    return {
      selectedOption: null,
      showDropdown: false
    }
  },
  methods: {
    selectOption(option){
      this.selectedOption = option;
      this.showDropdown = false;
      this.$emit('input', this.selectedOption);
    },
    optionText(option){
      return (option["label"] || option)
    }
  }
}
</script>

