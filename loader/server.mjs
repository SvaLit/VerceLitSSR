import {render} from "@lit-labs/ssr/lib/render-with-global-dom-shim.js";
import {readableFrom} from '@lit-labs/ssr/lib/readable.js';
import serializeError from "serialize-error";
import {html} from "lit";
import {unsafeHTML} from 'lit/directives/unsafe-html.js';
import head from './head.mjs';
import "../components/app.mjs";

export default async (req, res) => {
    try {
        return readableFrom(render(html`
            <!DOCTYPE html>
            <html lang="ru">${unsafeHTML((await head()).toString())}
            <body>
            <script src="https://polyfill.io/v3/polyfill.min.js?features=globalThis" async noshim></script>
            <script src="https://unpkg.com/es-module-shims@0.12.1/dist/es-module-shims.min.js" async noshim></script>
            <lit-app url="${req.url}"><span style="color: coral">Not hydrated</span></lit-app>
            </body>
            </html>`), true).pipe(res);
    } catch (e) {
        console.error(e);
        const json = JSON.stringify(serializeError(e), null, 2);
        return res.status(500).end(`<meta name="robots" content="noindex">
<pre style="font-size: 20px;white-space: pre-wrap;margin: 20px;">${json}</pre>
<script>console.error(Object.assign(new Error(),${json}))</script></body></html>`);
    }
}
