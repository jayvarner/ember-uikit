import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | uk-modal/title', function() {
  setupComponentTest('uk-modal/title', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#uk-modal/title}}
    //     template content
    //   {{/uk-modal/title}}
    // `);

    this.render(hbs`{{uk-modal/title}}`);
    expect(this.$()).to.have.length(1);
  });
});
