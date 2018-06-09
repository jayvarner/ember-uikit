import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | uk-modal/header', function() {
  setupComponentTest('uk-modal/header', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#uk-modal/header}}
    //     template content
    //   {{/uk-modal/header}}
    // `);

    this.render(hbs`{{uk-modal/header}}`);
    expect(this.$()).to.have.length(1);
  });
});
