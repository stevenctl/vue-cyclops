<template>
  <div id="app">
    <cyclops-button @click="onClickThing()" danger>test</cyclops-button>
  </div>
</template>

<script>
import CyclopsButton from './components/CyclopsButton'

export default {
  name: 'app',
  components: {
    'cyclops-button': CyclopsButton
  },
  methods: {
    onClickThing(){
      alert('hello')
    }
  }
}
</script>

