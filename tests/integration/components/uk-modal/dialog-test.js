import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | uk-modal/dialog', function() {
  setupComponentTest('uk-modal/dialog', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#uk-modal/dialog}}
    //     template content
    //   {{/uk-modal/dialog}}
    // `);

    this.render(hbs`{{uk-modal/dialog}}`);
    expect(this.$()).to.have.length(1);
  });
});
