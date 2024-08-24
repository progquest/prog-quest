/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			boxShadow: {
				'button-default': '0px 10px 0px var(--purple-200)',
				'button-active': '0px 6px 0px var(--purple-200)',
			},
			colors: {
				text: {
					900: 'var(--text-900)',
				},
				background: {
					100: 'var(--background-100)',
					200: 'var(--background-200)',
				},
				purple: {
					100: 'var(--purple-100)',
					200: 'var(--purple-200)',
				},
				pink: {
					100: 'var(--pink-100)',
					200: 'var(--pink-200)',
				},
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
			},
		},
	},
	plugins: [],
};
