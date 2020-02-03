import odoeDojoComps from '../theme/odoe-dojo-comps';

import SnackbarExample from './snackbar/SnackbarExample';

`!has('docs')`;
import testsContext from './tests';

const tests = typeof testsContext !== 'undefined' ? testsContext : { keys: () => [] };

export const config = {
	name: '@odoe/dojo-comps',
	home: 'src/examples/README.md',
	themes: [
		{ label: '@odoe/dojo-comps', theme: odoeDojoComps },
		{ label: 'default', theme: {} }
	],
	tests,
	readmePath: (widget: string) => `src/${widget}/README.md`,
	widgetPath: (widget: string, filename: string) => `src/${widget}/${filename || 'index'}.tsx`,
	examplePath: (widget: string, filename: string) =>
		`src/examples/src/widgets/${widget}/${filename || 'index'}.tsx`,
	codesandboxPath: () => '',
	widgets: {
		snackbar: {
			filename: 'Snackbar',
			overview: {
				example: {
					filename: 'SnackbarExample',
					module: SnackbarExample
				}
			}
		}
    }
};
export default config;