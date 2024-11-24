import type { Config } from 'tailwindcss';

export default {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#8b52fe',
					dark: '#452d66',
					bright: '#a47fff',
				},
				secondary: {
					DEFAULT: '#4caf50',
					dark: '#317d34',
					bright: '#81c784',
				},
				accent: {
					DEFAULT: '#ad9ad7',
					bright: '#dbc9f3',
				},
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				jetbrains_mono: ['JetBrains Mono', 'monospaced'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
		},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('tailwindcss-animate'),
	],
} satisfies Config;
