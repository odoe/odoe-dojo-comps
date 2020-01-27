import { create, tsx } from '@dojo/framework/core/vdom';
import * as css from './snackbar.m.css';

const factory = create().properties<{message: string, show: boolean}>();

export default factory(function ({ properties }) {
  const { message, show } = properties();
  const currClass = [css.root];
  if (show) {
    currClass.push(css.show);
  }
	return (
		<div classes={currClass} key={message}>{ message }</div>
	);
});