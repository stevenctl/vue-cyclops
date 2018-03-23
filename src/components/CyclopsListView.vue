<template>
<div>
  <div class="new-list-view-header">
    <div v-for="(header, i) in headers" :key="i" :class="colCss">{{header}}</div>
  </div>
  <ul class="new-list-view">
    <li v-for="(item, i) in items" :key="i">
      <div class="list-view-item">
        <div v-for="(datum, j) in item" :key="j" :class="colCss">{{datum}}</div>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'cyclops-list-view',
  props: ['titles', 'items'],
  computed: {
    colCss(){
      var pct = Math.floor(100 / Math.max(...[this.headers || [], ...this.items].map((i) => Object.keys(i).length)));
      pct = Math.floor(pct / 5) * 5 // round down to nearest 5
      return "col col-" + pct;
    },
    headers(){
      if(this.titles && this.titles.length > 0){
        return this.titles;
      } else if(this.items && this.items.length > 0 && !Array.isArray(this.items[0])) {
        return Object.keys(this.items[0])
      }
    }
  }
}
</script>



