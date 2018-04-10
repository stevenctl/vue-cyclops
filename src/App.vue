<template>
<div id="app">
  <cyclops-tab-nav :titles="['Abc', 'Def']">
    <div slot='Abc'>
      a;ldfja;lkdfj
    </div>
    <div slot='Def'>
      adfjfjadfj
    </div>
  </cyclops-tab-nav>
</div>
</template>

<script>
import CyclopsButton from './components/CyclopsButton'
import CyclopsIcon from './components/CyclopsIcon'
import CyclopsList from './components/CyclopsList'
import CyclopsInfoList from './components/CyclopsInfoList'
import CyclopsListView from './components/CyclopsListView'
import CyclopsTabNav from './components/CyclopsTabNav.vue';

var data = {
  listSample: ['Item A', ['Item B 1','Item B 2'], 'Item C', 'Item D'],
  person: {name: 'John Doe', age: 23, profession: 'Engineer'}
}

export default {
  name: 'app',
  components: {
    'cyclops-button': CyclopsButton,
    'cyclops-icon': CyclopsIcon,
    'cyclops-list': CyclopsList,
    'cyclops-info-list': CyclopsInfoList,
    'cyclops-list-view': CyclopsListView,
    'cyclops-tab-nav': CyclopsTabNav

  },
  data: () => data,
  methods: {
    alert(msg){
      alert(msg)
    }
  }
}
</script>

