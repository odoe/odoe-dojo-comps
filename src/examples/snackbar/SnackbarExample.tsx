import { create, tsx } from '@dojo/framework/core/vdom';
import Snackbar from '../../snackbar/Snackbar';

const factory = create();

export default factory(function ButtonExample() {
	return <Snackbar show={true} message="This is my snackbar" />;
});