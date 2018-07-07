import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/uk-switcher';
import UIkit from 'uikit';

const noop = () => {};

export default Component.extend({
  layout,
  attributeBindings: ['animation', 'active'],

  animation: '',
  active: 0,

  contentId: computed('elementId', function() {
    return `uk-switcher-content-${this.get('elementId')}`;
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
