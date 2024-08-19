/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			boxShadow: {
				"def-button": "0px 10px 0px #452D66",
				"def-button-pressed": "0px 6px 0px #452D66",
			},
			colors: {
				"button-purple": "#8B52FE",
				"shadow-purple": "#452D66",
				"background-gray": "#e1e1e1",
				"background-box-rect": "#F6EBFB",
				"background-box-border": "#919191",
				"input-box": "#DBC9F3",
			},
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1536px",
			},
		},
	},
	plugins: [],
};
