import {readFile} from 'fs/promises';

export default async ({title = 'LitSSR Hydration Demo with Async Render (SSR Pause)'} = {}) => `<head>
    <title>${title}</title>
    <meta name="color-scheme" content="dark light">
    <meta content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" name="viewport">
    <script type="importmap">${await readFile(new URL('./importmap.json', import.meta.url))}</script>
    <script type="module" async noshim>
        import {hydrateShadowRoots} from 'https://cdn.skypack.dev/@webcomponents/template-shadowroot/template-shadowroot.js';
        if (!HTMLTemplateElement.prototype.hasOwnProperty("shadowRoot")) hydrateShadowRoots(document.body);
    </script>
    <script type="module" src="/loader/client.mjs" defer></script>
</head>`;
