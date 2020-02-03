const { describe, it } = intern.getInterface('bdd');
import { tsx } from '@dojo/framework/core/vdom';
import assertionTemplate from '@dojo/framework/testing/assertionTemplate';
import harness from '@dojo/framework/testing/harness';

import Snackbar from './Snackbar';
import * as css from '../theme/default/Snackbar.m.css';

const baseAssertion = assertionTemplate(() => {
	return (
    <div classes={[css.root, css.show]} key="This is my snackbar">This is my snackbar</div>
	);
});

describe('Snackbar', () => {
	it('render', () => {
		const h = harness(() => <Snackbar show={true} message="This is my snackbar" />);
		h.expect(baseAssertion);
	});
});