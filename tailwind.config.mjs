/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Cabin', ...defaultTheme.fontFamily.sans],
			},
			aspectRatio: {
				thumbnail: '1:5'
			}
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
