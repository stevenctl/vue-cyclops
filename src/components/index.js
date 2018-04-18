import CyclopsButton from './CyclopsButton'
import CyclopsIcon from './CyclopsIcon'
import CyclopsInfoList from './CyclopsInfoList'
import CyclopsList from './CyclopsList'
import CyclopsListView from './CyclopsListView'
import CyclopsModal from './CyclopsModal'
import CyclopsTabNav from './CyclopsTabNav'
import CyclopsDropdownButton from './CyclopsDropdownButton'
import Vue from 'vue'

Vue.directive('click-outside', {
  bind () {
    let self  = this;
    this.event = function (event) {
      self.vm.$emit(self.expression, event)
    };
    this.el.addEventListener('click', this.stopProp);
    document.body.addEventListener('click', this.event)
  },

  unbind() {
    this.el.removeEventListener('click', this.stopProp);
    document.body.removeEventListener('click', this.event)
  },

  stopProp(event) { event.stopPropagation() }
});

export {
    CyclopsButton,
    CyclopsIcon,
    CyclopsInfoList,
    CyclopsList,
    CyclopsListView,
    CyclopsModal,
    CyclopsTabNav,
    CyclopsDropdownButton
}
