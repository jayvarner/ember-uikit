import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import { find } from 'ember-native-dom-helpers';

describe('Integration | Component | uk modal', function() {
  setupComponentTest('uk-modal', {
    integration: true
  });

  it('renders', function() {
    this.render(hbs`
      {{#uk-modal modalName='test-modal' as |modal|}}
        {{#modal.open}}
          Open
        {{/modal.open}}
        {{#modal.header}}
          {{#modal.title}}
            I am a modal
          {{/modal.title}}
        {{/modal.header}}

        {{#modal.body}}
          Modal body
        {{/modal.body}}

        {{#modal.footer}}
          Modal footer
        {{/modal.footer}}
      {{/uk-modal}}
    `);

    expect(find('button.uk-button')).to.be.ok;
    expect(find('button.uk-button').getAttribute('uk-toggle')).to.equal('');
    expect(find('button.uk-button').getAttribute('target')).to.equal(
      '#test-modal'
    );
    // expect(find('div.uk-modal').getAttribute('bg-close')).to.be.ok;
    // expect(find('div.uk-modal').getAttribute('esc-close')).to.be.ok;
    // expect(find('div.uk-modal').getAttribute('id')).to.equal('test-modal');
    // expect(find('div.uk-modal').getAttribute('cls-no-drag')).to.equal(null);
    // expect(find('.uk-modal').getAttribute('cls-no-drag')).to.equal(null);
    // expect(find('.uk-modal > .uk-modal-dialog')).to.be.ok;
  });
});
