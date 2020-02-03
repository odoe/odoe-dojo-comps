import { create, tsx } from '@dojo/framework/core/vdom';
import theme from '@dojo/framework/core/middleware/theme';

import * as css from '../theme/default/Snackbar.m.css';

export interface SnackbarProperties {message: string, show: boolean};

const factory = create({theme}).properties<SnackbarProperties>();

export default factory(function ({ properties, middleware: { theme }  }) {
  const { message, show } = properties();
  const themedCss = theme.classes(css);
  const currClass = [themedCss.root];
  if (show) {
    currClass.push(themedCss.show);
  }
	return (
		<div classes={currClass} key={message}>{ message }</div>
	);
});