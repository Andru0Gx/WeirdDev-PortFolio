/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			'bg': "var(--bg)",
			'headline': "var(--headline)",
			'paragraph': "var(--text)",
			'button': "var(--button)",
			'button_text': "var(--button-text)",
			accent: "var(--text-accent)",
		},
	},
	plugins: [],
}
