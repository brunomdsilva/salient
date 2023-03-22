const defaultColors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: defaultColors.blue,
			},

			fontFamily: {
				sans: ["Inter", "sans-serif"],
				display: ["lexend", "sans-serif"],
			},
		},
	},
	plugins: [],
}
