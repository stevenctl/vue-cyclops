<template>
<div id="app">
  <div class="container-fluid">
      <div class="card col-md-8 col-md-offset-2">
        <div class="card-block">
          <h4 class="card-title">Buttons</h4>
          
          <cyclops-button @click="alert('Creating a thing!')" primary>
            <cyclops-icon icon="icon-plus"/> Create
          </cyclops-button>
          
          <cyclops-button @click="alert('Deleting a thing!')" danger confirm>
            <cyclops-icon icon="icon-trash"/> Delete
          </cyclops-button>

          <cyclops-button @click="alert('This is an icon button')" warning icon>
            <cyclops-icon icon="icon-times"/>
          </cyclops-button>

          <cyclops-button @click="alert('This is a \'sm\' button')" default sm>
            Button
          </cyclops-button>

        </div>
        <div class="card-block">
          <h4 class="card-title">Lists</h4>

          <div class="row">
            <div class="col col-md-3">
              <h5 class="card-subtitle">Unordered List</h5>
              <ul>
                <li v-for="n in [1,2,3]" :key="n">item {{n}}</li>
              </ul>
            </div>
            <div class="col col-md-3">
              <h5 class="card-subtitle">Ordered List</h5>
              <ol>
                <li v-for="n in [1,2,3]" :key="n">item {{n}}</li>
              </ol>
            </div>
          </div>

        </div>
      </div>
  </div>
</div>
</template>

<script>
import CyclopsButton from './components/CyclopsButton'
import CyclopsIcon from './components/CyclopsIcon'

export default {
  name: 'app',
  components: {
    'cyclops-button': CyclopsButton,
    'cyclops-icon': CyclopsIcon
  },
  methods: {
    alert(msg){
      alert(msg)
    }
  }
}
</script>

