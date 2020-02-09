import { create, tsx } from '@dojo/framework/core/vdom';
import Snackbar from '../../snackbar/Snackbar';

const factory = create();

export default factory(function ButtonExample() {
	return (
		<virtual>
			<Snackbar open={true} message="This is a warning" />
		</virtual>
	);
});
