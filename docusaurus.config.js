module.exports = {
	title: 'SHE Docs',
	tagline: 'SHE wants you to win',
	url: 'https://she.energy/docs',
	baseUrl: '/',
	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.png',
	organizationName: 'ShenaniganDApp', // Usually your GitHub org/user name.
	projectName: 'docs', // Usually your repo name.
	themeConfig: {
		navbar: {
			title: 'Shenanigan',
			logo: {
				alt: 'Shenanigan Logo',
				src: 'img/SHELogo.png',
				href: '/docs',
			},
			items: [
				{
					to: 'docs/',
					activeBasePath: 'docs',
					label: 'Docs',
					position: 'right',
				},
				{
					href: 'https://github.com/ShenaniganDApp',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Learn More',
					items: [
						{
							label: 'Github',
							href: 'https://github.com/ShenaniganDApp',
						},
						{
							label: 'Contribution Guide',
							to: '/docs/contribution-guide',
						},
						{
							label: 'Style Guide',
							href:
								'https://docs.google.com/document/d/1E0ZrhPARruPgFXbz-cuiQSa7C4yzTrgSN3E-2w6L8cg/edit',
						},
					],
				},
				{
					title: 'Social Media',
					items: [
						{
							label: 'Discord',
							href: 'https://discord.com/invite/eThfUxt',
						},
						{
							label: 'Facebook',
							href: 'https://www.facebook.com/shenanigan.dapp/',
						},
						{
							label: 'Instagram',
							href: 'https://www.instagram.com/she.dapp/',
						},
						{
							label: 'Twitter',
							href: 'https://twitter.com/She_Dapp',
						},
						{
							label: 'Reddit',
							href: 'https://www.reddit.com/user/shenanigan_dapp',
						},

						{
							label: 'YouTube',
							href: 'https://www.youtube.com/channel/UCyENEycuNXfntLJLSeIuWXw',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Shenanigan Tech LLC`,
		},
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl:
						'https://github.com/ShenaniganDApp/docs/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	],
}
