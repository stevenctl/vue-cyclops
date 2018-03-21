<template>
<div id="app">
  <div class="container-fluid">
      <div class="card col-md-10 col-md-offset-1">
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
            <div class="col col-md-2">
              <h5 class="card-subtitle">Unordered List</h5>
              <cyclops-list :items="listSample" unordered/>
            </div>
            <div class="col col-md-2">
              <h5 class="card-subtitle">Ordered List</h5>
              <cyclops-list :items="listSample" ordered/>
            </div>
            <div class="col col-md-2">
              <h5 class="card-subtitle">Comma List</h5>
              <cyclops-list :items="listSample" comma/>
            </div>
            <div class="col col-md-2">
              <h5 class="card-subtitle">Inline List</h5>
              <cyclops-list :items="['Item A', 'Item B', 'Item C']" inline/>
            </div>
             <div class="col col-md-2">
              <h5 class="card-subtitle">Unstyled List</h5>
              <cyclops-list unstyled>
                <li>Item A</li>
                <ul>
                  <li>Item B1</li>
                  <li>Item B2</li>
                </ul>
                <li>Item C</li>
              </cyclops-list>
            </div>
          </div>
          <div class="row">
            <h5 class="card-subtitle">Info List</h5>
            <div class="col col-md-12">
              <cyclops-info-list :items="person"/>
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
import CyclopsList from './components/CyclopsList'
import CyclopsInfoList from './components/CyclopsInfoList'

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
    'cyclops-info-list': CyclopsInfoList

  },
  data: () => data,
  methods: {
    alert(msg){
      alert(msg)
    }
  }
}
</script>

