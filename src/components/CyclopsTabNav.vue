<template>
  <div class="container-fixed">
    <ul class="nav nav-tabs nav-tabs-narrow">
      <li 
        v-for="(title, i) in titles" 
        :class="active == title && 'active'"
        :key="`${title}-${i}`"
        @click="selectTab(title)">
        <a>{{title}}</a>
      </li>
    </ul>
    <span v-for="(title, i) in titles" :key="'slot-' + i + '-' + title" :style="active !== title && 'display: none;'">
      <slot :name="title"/>
    </span>
  </div>
</template>

<script>
export default {
  name: 'cyclops-tab-nav',
  props: ['titles'],
  data(){
    return {
      active: this.titles[0]
    }
  },
  methods: {
    selectTab(title){
      this.active = title
      this.$emit('tabSelected', title)
    }
  }
}
</script>



