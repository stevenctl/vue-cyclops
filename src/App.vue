<template>
<div id="app">
  <cyclops-dropdown-button
    v-model="selectedDc"
    :options="datacenters">
  </cyclops-dropdown-button>
</div>
</template>

<script>
import {CyclopsButton,
CyclopsIcon,
CyclopsList,
CyclopsInfoList,
CyclopsListView,
CyclopsDropdownButton,
CyclopsTabNav} from './components/index.js';

var data = {
  listSample: ['Item A', ['Item B 1','Item B 2'], 'Item C', 'Item D'],
  person: {name: 'John Doe', age: 23, profession: 'Engineer'},
  datacenters: [
    {label: 'DC1 (place)', value: 'dc1'},
    {label: 'DC2 (other)', value: 'dc2'}
  ],
  selectedDc: {label: 'DC1 (place)', value: 'dc1'}
};

export default {
  name: 'app',
  components: {
    'cyclops-button': CyclopsButton,
    'cyclops-icon': CyclopsIcon,
    'cyclops-list': CyclopsList,
    'cyclops-info-list': CyclopsInfoList,
    'cyclops-list-view': CyclopsListView,
    'cyclops-tab-nav': CyclopsTabNav,
    'cyclops-dropdown-button': CyclopsDropdownButton
  },
  data: () => data,
  methods: {
    alert(msg){
      alert(msg)
    }
  }
}
</script>

