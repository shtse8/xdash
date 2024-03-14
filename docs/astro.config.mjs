import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight'
import starlightTypeDoc, { typeDocSidebarGroup } from 'starlight-typedoc'

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            plugins: [
                // Generate the documentation.
                starlightTypeDoc({
                    entryPoints: ['../src/index.ts'],
                    tsconfig: '../tsconfig.json',
                }),
            ],
            sidebar: [
                {
                    label: 'Guides',
                    items: [{ label: 'Example Guide', link: '/guides/example/' }],
                },
                // Add the generated sidebar group to the sidebar.
                typeDocSidebarGroup,
            ],
            title: 'My Docs',
        }),
    ],
});
