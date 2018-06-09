import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | uk-modal/modal-base', function() {
  setupComponentTest('uk-modal/modal-base', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#uk-modal/modal-base}}
    //     template content
    //   {{/uk-modal/modal-base}}
    // `);

    this.render(hbs`{{uk-modal/modal-base}}`);
    expect(this.$()).to.have.length(1);
  });
});
