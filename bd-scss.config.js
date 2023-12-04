/** @type {import('bd-scss/lib/config').Config} */
export default {
	meta: {
		name: 'Ugricord',
		author: 'Ugric',
		version: '1.0.0',
		description: 'A soft and comfy feel for Ugricord.',
		source: 'https://github.com/Ugric/Ugricord-theme',
	},
	dev:"/home/william/.config/Ugricord/Ugricord/themes",
	baseImport: 'https://ugric.github.io/Ugricord-theme/Ugricord.css',
	addons: [
		['src/addons/_radialglow.scss', 'dist/RadialGlow.css'],
		['src/addons/_verticaluserarea.scss', 'dist/VerticalUserArea.css'],
		['src/addons/_serverrings.scss', 'dist/ServerRings.css']
	]
};
