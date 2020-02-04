import { create, tsx } from '@dojo/framework/core/vdom';
import theme from '@dojo/framework/core/middleware/theme';
import icache from '@dojo/framework/core/middleware/icache';

import * as css from '../theme/default/Snackbar.m.css';

export interface SnackbarProperties {autoHideDuration: number, open: boolean, onClose: () => void};

const factory = create({ icache, theme }).properties<SnackbarProperties>();

export default factory(function Snackbar({ children, properties, middleware: { icache, theme }  }) {
	const { autoHideDuration, open, onClose } = properties();
	const visible = icache.getOrSet('visible', open || false);
	if (!visible) return;
	const duration = icache.getOrSet('duration', autoHideDuration || 0);
  const themedCss = theme.classes(css);
  const currClass = [themedCss.root];
  if (visible) {
    currClass.push(themedCss.show);
	}

	const handleClose = (t: any) => {
		clearTimeout(t);
		if (onClose) onClose();
		icache.set('visible', false);
	};

	const timer = setTimeout(() => {
		handleClose(timer);
	}, duration);

	return (
		<div classes={currClass} key={'snackbar'} onclick={() => {
			console.log('click close')
			handleClose(timer);
		}}>{ children() }</div>
	);
});
