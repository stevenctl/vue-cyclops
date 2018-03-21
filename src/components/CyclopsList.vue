<script>
export default {
  name: 'cyclops-list',
  props: ['ordered', 'unordered', 'unstyled', 'inline', 'comma', 'items'],
  render(createElement) {
      var children = this.items ? this.items.map((item, i) => {
        if(typeof item == 'object'){
          return createElement('cyclops-list', {props: {items: item}})
        } else {
          return createElement('li', item)
        }
      }) : [];
      return createElement(this.ordered != undefined ? 'ol' : 'ul', {class: this.cssClass}, [...children, this.$slots.default]);
  },
  computed: {
    cssClass(){
          return (this.unstyled != undefined ? "list-unstyled" : "")
                 + (this.inline != undefined ? " list-inline" : "")
                 + (this.comma != undefined ? " list-comma" : "")
    }
  }
}
</script>



