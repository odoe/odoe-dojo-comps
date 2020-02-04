import { create, tsx } from '@dojo/framework/core/vdom';
import icache from '@dojo/framework/core/middleware/icache';
import Snackbar from '../../snackbar/Snackbar';

const factory = create({ icache });

export default factory(function ButtonExample({ middleware: { icache } }) {
	const open = icache.getOrSet('open', true);
	const snackbars: any[] = icache.getOrSet('snackbars', []);
	return (
		<virtual>
			<button onclick={() => {
				icache.set('open', !open);
				snackbars.push(
					<Snackbar open={open} autoHideDuration={10000} onClose={() => console.log('closed')}>This is a warning</Snackbar>
					);
				icache.set('snackbars', snackbars);
			}}>Show</button>
			{snackbars}
		</virtual>
	);
});
