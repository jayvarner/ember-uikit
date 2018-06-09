import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import { find } from 'ember-native-dom-helpers';

describe('Integration | Component | uk spinner', function() {
  setupComponentTest('uk-spinner', {
    integration: true
  });

  it('renders', function() {
    this.render(hbs`{{uk-spinner}}`);

    expect(find('[uk-spinner]')).to.be.ok;
  });

  it('can set ratio', function() {
    this.render(hbs`{{uk-spinner ratio=2}}`);

    expect(find('[uk-spinner]').getAttribute('ratio')).to.be.equal('2');
  });
});
