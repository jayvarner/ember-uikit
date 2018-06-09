import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | uk-modal/open', function() {
  setupComponentTest('uk-modal/open', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#uk-modal/open}}
    //     template content
    //   {{/uk-modal/open}}
    // `);

    this.render(hbs`{{uk-modal/open}}`);
    expect(this.$()).to.have.length(1);
  });
});
