import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | uk-modal/body', function() {
  setupComponentTest('uk-modal/body', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#uk-modal/body}}
    //     template content
    //   {{/uk-modal/body}}
    // `);

    this.render(hbs`{{uk-modal/body}}`);
    expect(this.$()).to.have.length(1);
  });
});
