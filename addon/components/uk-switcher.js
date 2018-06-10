import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/uk-switcher';
import SwitcherMixin from 'ember-uikit/mixins/switcher';

export default Component.extend(SwitcherMixin, {
  layout,

  animation: '',

  contentId: computed('elementId', function() {
    return `uk-switcher-content-${this.get('elementId')}`;
  })
});
