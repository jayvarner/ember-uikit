import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | uk-modal/footer', function() {
  setupComponentTest('uk-modal/footer', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#uk-modal/footer}}
    //     template content
    //   {{/uk-modal/footer}}
    // `);

    this.render(hbs`{{uk-modal/footer}}`);
    expect(this.$()).to.have.length(1);
  });
});
