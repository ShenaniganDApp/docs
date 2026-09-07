const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
	title: 'SHE Docs',
	tagline: 'SHE wants you to win',
	url: 'https://www.she.energy',
	baseUrl: '/',
	onBrokenLinks: 'warn',
	markdown: {
		hooks: {
			onBrokenMarkdownLinks: 'warn',
		},
	},
	favicon: '/img/favicon.ico',
	organizationName: 'ShenaniganDApp', // Usually your GitHub org/user name.
	projectName: 'docs', // Usually your repo name.
	themeConfig: {
		navbar: {
			title: 'SHE Docs',
			items: isDevelopment ? [{to: '/', label: 'Docs', position: 'left'}] : [],
		},
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: isDevelopment ? {
					exclude: ['plans/**'],
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/ShenaniganDApp/docs/',
					routeBasePath: '/',
				} : false,
				pages: isDevelopment ? false : {},
				blog: false,
				theme: isDevelopment ? {
					customCss: require.resolve('./src/css/custom.css'),
				} : {},
			},
		],
	],
};
