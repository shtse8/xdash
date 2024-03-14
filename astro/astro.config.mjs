import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
// import starlight from '@astrojs/starlight'
// import starlightTypeDoc, { typeDocSidebarGroup } from 'starlight-typedoc'
import sitemap from '@astrojs/sitemap';
import rehypeAstroRelativeMarkdownLinks from "astro-rehype-relative-markdown-links";

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	markdown: {
		rehypePlugins: [rehypeAstroRelativeMarkdownLinks],
	},
	integrations: [
		mdx(),
		sitemap(),
		// starlight({
		// 	plugins: [
		// 		// Generate the documentation.
		// 		starlightTypeDoc({
		// 			entryPoints: ['../src/index.ts'],
		// 			tsconfig: '../tsconfig.json',
		// 		}),
		// 	],
		// 	sidebar: [
		// 		{
		// 			label: 'Guides',
		// 			items: [{ label: 'Example Guide', link: '/guides/example/' }],
		// 		},
		// 		// Add the generated sidebar group to the sidebar.
		// 		typeDocSidebarGroup,
		// 	],
		// 	title: 'My Docs',
		// }),
	],
});
