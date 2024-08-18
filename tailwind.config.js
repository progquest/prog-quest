/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			boxShadow: {
				"def-button": "0px 10px 0px #452D66",
			},
			backgroundColor: {
				bpurple: "#8B52FE",
				bgray: "#D9D9D9",
				"bbox-rect": "#F6EBFB",
				"bbox-border": "#919191",
			},
			textColor: {
				bpurple: "#8B52FE",
				bgray: "#D9D9D9",
			},
			colors: {
				bpurple: "#8B52FE",
				"shadow-purple": "#452D66",
				bgray: "#D9D9D9",
				"bbox-rect": "#F6EBFB",
				"bbox-border": "#919191",
			},
			width: {
				"screen-1/2": "50vw",
			},
			height: {
				"screen-1/2": "50vh",
			},
		},
	},
	plugins: [],
};
