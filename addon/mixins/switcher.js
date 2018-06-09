import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';
import UIkit from 'uikit';

// empty function as default event handler
const noop = () => {};

export default Mixin.create({
  attributeBindings: [
    'ukSwitcher:uk-switcher',
    'connect',
    'animation',
    'animationDuration:duration',
    'swiping'
  ],

  contentId: '',
  animation: '',
  animationDuration: 200,
  swiping: false,
  ukSwitcher: '',

  connect: computed('contentId', function() {
    let id = this.get('contentId');

    return isEmpty(id) ? '' : `#${id}`;
  }),

  setEvents() {
    let events = {
      beforeshow: this.getWithDefault('on-beforeshow', noop),
      show: this.getWithDefault('on-show', noop),
      shown: this.getWithDefault('on-shown', noop),
      beforehide: this.getWithDefault('on-beforehide', noop),
      hide: this.getWithDefault('on-hide', noop),
      hidden: this.getWithDefault('on-hidden', noop)
    };

    for (let event in events) {
      UIkit.util.on(this.element, event, events[event]);
    }
  },

  didInsertElement() {
    this._super(...arguments);
    this.setEvents();
  }
});
